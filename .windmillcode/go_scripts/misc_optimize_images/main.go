package main

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"runtime"
	"sync"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	workspaceRoot, err := os.Getwd()
	if err != nil {
		fmt.Println("there was an error while trying to receive the current dir")
	}
	settings, err := utils.GetSettingsJSON(workspaceRoot)
	if err != nil {
		return
	}
	miscOptimizeImages := settings.ExtensionPack.MiscOptimizeImages

	projectsCLI := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt:  "Provide the paths of all the locations where you want your images optimized",
			Default: miscOptimizeImages.Location,
		},
	)
	backupLocation := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"This program will delete images in the directories provided please provide a path "},
			Default: miscOptimizeImages.BackupLocation,
		},
	)
	optimizePercent := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"enter a value from 1 -100 where 100 is perform no changes and 0 is full optimization, recommnded is"},
			Default: miscOptimizeImages.OptimizePercent,
		},
	)

	var wg sync.WaitGroup
	regex0 := regexp.MustCompile(" ")
	projectsList := regex0.Split(projectsCLI.InputString, -1)
	for _, project := range projectsList {
		app := utils.JoinAndConvertPathToOSFormat(project)
		normalizedBackupLocation := ""
		if runtime.GOOS == "windows" {
			normalizedBackupLocation = utils.JoinAndConvertPathToOSFormat(backupLocation, utils.RemoveDrivePath(app))
		} else {
			normalizedBackupLocation = utils.JoinAndConvertPathToOSFormat(backupLocation, app)
		}
		wg.Add(1)
		go func() {
			defer wg.Done()
			utils.CopyDir(app, normalizedBackupLocation)
			allEntries, err := utils.GetItemsInFolderRecursive(app, true)
			if err != nil {
				fmt.Println("An error occured while recursively going through the directory", err)
			}
			for _, entry := range allEntries {
				prefixImage := utils.HasSuffixInArray(entry, []string{".png", ".gif", ".ico", ".jpg", ".webp", ".ico"}, true)
				if prefixImage != "" {
					imageFolderPath := filepath.Dir(entry)
					imageFile := filepath.Base(entry)
					destImage := utils.HasPrefixInArray(prefixImage, []string{imageFolderPath + "\\"}, true)

					utils.RunCommandInSpecificDirectory("convert", []string{
						"-quality", optimizePercent,
						imageFile,
						"-background", "#FFFFFF", "-flatten",
						fmt.Sprintf("%s%s", destImage, ".jpg")}, imageFolderPath)

					if utils.HasSuffixInArray(entry, []string{".jpg"}, true) == "" {
						os.Remove(entry)
					}

				}
			}

		}()
	}
	wg.Wait()

}
