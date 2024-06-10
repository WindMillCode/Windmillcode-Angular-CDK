package main

import (
	"fmt"
	"regexp"
	"strings"

	"strconv"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	dockerImgPath := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Please enter a path for the docker image backup"},
			Default: utils.JoinAndConvertPathToOSFormat("D:\\docker-images"),
		},
	)
	dockerImgPath = utils.JoinAndConvertPathToOSFormat(dockerImgPath)

	dockerContainerPath := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Please enter a path for the docker container backup"},
			Default: utils.JoinAndConvertPathToOSFormat("D:\\docker-containers"),
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

	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		restoreImages(dockerImgPath, &wg, batchSizeNum)
	}()
	// wg.Add(1)
	// go func() {
	// 	defer wg.Done()
	// 	restoreCtnrs(dockerContainerPath, &wg, batchSizeNum)
	// }()
	wg.Wait()
}

func restoreImages(targetPath string, wg *sync.WaitGroup, batchSize int) {
	fileNames, _ := utils.GetItemsInFolder(targetPath)
	batchDone := make(chan bool, batchSize)
	fmt.Println("fire")
	for index, tarImage := range fileNames {
		fmt.Println(tarImage)
		i := index + 1
		wg.Add(1)

		go func(tarImage string) {
			defer wg.Done()
			utils.RunCommandInSpecificDirectory(
				"docker",
				[]string{"load", "--input", tarImage},
				targetPath,
			)
			batchDone <- true
		}(tarImage)

		utils.DecreaseChannelBatchFn(i, batchSize, batchDone, fileNames)

	}
	close(batchDone)
}

func restoreCtnrs(targetPath string, wg *sync.WaitGroup, batchSize int) {

	fileNames, _ := utils.GetItemsInFolder(targetPath)
	batchDone := make(chan bool, batchSize)

	for index, tarImage := range fileNames {
		i := index + 1
		wg.Add(1)

		go func(tarImage string) {
			defer wg.Done()
			ctnrName := strings.Split(tarImage, ".tar")[0]
			ctnrImgNameRaw := utils.RunCommandInSpecifcDirectoryAndGetOutput(
				"docker",
				[]string{"load", "--input", tarImage},
				targetPath,
			)
			fmt.Printf("output result %s", ctnrImgNameRaw)
			pattern := `Loaded image: ([^:]+)`

			re := regexp.MustCompile(pattern)

			matches := re.FindStringSubmatch(ctnrImgNameRaw)
			if len(matches) >= 2 {
				ctnrImgName := matches[1]

				utils.RunCommand("docker", []string{"run", "-d", "--name", ctnrName, ctnrImgName})
				utils.RunCommand("docker", []string{"rmi", ctnrImgName, "--force"})
			}

			batchDone <- true

		}(tarImage)

		utils.DecreaseChannelBatchFn(i, batchSize, batchDone, fileNames)

	}
	close(batchDone)
}
