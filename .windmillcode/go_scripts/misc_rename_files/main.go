package main

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	rootDir, err := os.Getwd()
	if err != nil {
		return
	}
	cliInfo := utils.ShowMenuModel{
		Prompt:  "select the location",
		Choices: []string{"apps/frontend/AngularApp/src", "."},
		Other:   true,
	}
	targetDir := utils.ShowMenu(cliInfo, nil)
	targetDir = utils.JoinAndConvertPathToOSFormat(rootDir, targetDir)

	// insertVal := utils.GetInputFromStdin(
	// 	utils.GetInputFromStdinStruct{
	// 		Prompt: []string{"Provide a value to modify the file"},
	// 		Default: "// @ts-nocheck\n",
	// 	},
	// )

	// insertPos := utils.ShowMenu(cliInfo,nil)

	pattern := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Provide the regex pattern to filter the files on"},
			Default: `\.spec\.ts$`,
		},
	)

	overwriteString := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt: []string{"provide the string that will replace the substring in the matched string"},
		},
	)

	fileLinesPredicateFn := func(fullPath string) {
		oldFileName := filepath.Base(fullPath)
		re := regexp.MustCompile(pattern)
		newFileName := re.ReplaceAllString(oldFileName, overwriteString)
		os.Rename(
			fullPath,
			utils.JoinAndConvertPathToOSFormat(
				filepath.Dir(fullPath), newFileName,
			),
		)
	}

	err = utils.ProcessFilesMatchingPattern(targetDir, pattern, fileLinesPredicateFn)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
	err = utils.ProcessFoldersMatchingPattern(targetDir, pattern, fileLinesPredicateFn)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}
