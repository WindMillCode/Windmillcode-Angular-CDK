package main

import (
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	dockerImgPath := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Please enter a path for the docker image backup"},
			Default: utils.JoinAndConvertPathToOSFormat("E:\\docker-images"),
		},
	)
	dockerImgPath = utils.JoinAndConvertPathToOSFormat(dockerImgPath)

	dockerContainerPath := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Please enter a path for the docker container backup"},
			Default: utils.JoinAndConvertPathToOSFormat("E:\\docker-containers"),
		},
	)
	dockerContainerPath = utils.JoinAndConvertPathToOSFormat(dockerContainerPath)
	batchSizeString := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Provide the batch size in order to back up x number of containers and images at a time"},
			Default: "7",
		},
	)
	batchSizeNum, err := strconv.Atoi(batchSizeString)
	if err != nil {
		fmt.Println("Please enter a number", err)
		return
	}

	folders := []string{dockerImgPath, dockerContainerPath}
	for _, folder := range folders {
		exists := utils.FolderExists(folder)
		if !exists {
			os.Mkdir(folder, 0755)
		}
	}

	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		backupImages(dockerImgPath, &wg, batchSizeNum)
	}()
	wg.Add(1)
	go func() {
		defer wg.Done()
		backupContainers(dockerContainerPath, &wg, batchSizeNum)
	}()
	wg.Wait()
}

func backupImages(targetPath string, wg *sync.WaitGroup, batchSize int) {
	dockerImages := utils.RunCommandAndGetOutput("docker", []string{"images", "--format", "'{{.Repository}}:{{.Tag}}'", "-a"})
	dockerImagesArray := strings.Split(dockerImages, "\n")
	batchDone := make(chan bool, batchSize)

	for index, repoTag := range dockerImagesArray {
		i := index + 1
		if !strings.Contains(repoTag, "<none>") {
			wg.Add(1)
			repoTagWithoutQuotes := strings.Replace(repoTag, "'", "", -1)
			regex0 := regexp.MustCompile(`[^a-zA-Z0-9|\.]`)
			tarImageName := regex0.ReplaceAllString(repoTagWithoutQuotes, "_")

			go func() {
				defer wg.Done()
				utils.RunCommandInSpecificDirectory(
					"docker",
					[]string{"save", "-o", fmt.Sprintf("%s.tar", tarImageName), repoTagWithoutQuotes},
					targetPath,
				)
				batchDone <- true

			}()

			decreaseChannelBatchFn(i, batchSize, batchDone, dockerImagesArray)

		}
	}
	close(batchDone)
}

func decreaseChannelBatchFn(i int, batchSize int, batchDone chan bool, targetArray []string) {
	if i%batchSize == 0 {

		for j := 0; j < batchSize; j++ {
			<-batchDone
		}
		fmt.Println("Batch complete")
	} else if i == len(targetArray) {

		for j := 0; j < len(targetArray)%batchSize; j++ {
			<-batchDone
		}
		fmt.Println("Batch complete")
	}
}

func backupContainers(targetPath string, wg *sync.WaitGroup, batchSize int) {

	dockerContainers := utils.RunCommandAndGetOutput("docker", []string{"ps", "--format", "'{{.ID}}---{{.Names}}'", "-a"})

	dockerContainersArray := strings.Split(dockerContainers, "\n")
	batchDone := make(chan bool, batchSize)
	fmt.Printf("docker container length is %s\n", len(dockerContainersArray))
	for index, containerInfo := range dockerContainersArray {
		i := index + 1
		containerInfoWOQuotes := strings.Replace(containerInfo, "'", "", -1)
		containerInfoArray := strings.Split(containerInfoWOQuotes, "---")
		if len(containerInfoArray) == 2 {
			ctnrId := strings.TrimSpace(containerInfoArray[0])
			ctrnName := strings.TrimSpace(containerInfoArray[1])

			wg.Add(1)
			go func() {
				defer wg.Done()
				utils.RunCommandInSpecificDirectory("docker", []string{"commit", "-p", ctnrId, ctrnName}, targetPath)
				utils.RunCommandInSpecificDirectory("docker", []string{"save", "-o", fmt.Sprintf("%s.tar", ctrnName), ctrnName}, targetPath)
				batchDone <- true
			}()

			decreaseChannelBatchFn(i, batchSize, batchDone, dockerContainersArray)

		}

	}
	close(batchDone)
}
