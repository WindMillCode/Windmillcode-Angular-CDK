package main

import (
	"fmt"
	"os"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	rootDir, err := os.Getwd()
	if err != nil {
		return
	}
	utils.CDToAngularApp()
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

	cliInfo = utils.ShowMenuModel{
		Prompt:  "position to insert (if unsure choose prefix)",
		Choices: []string{"prefix", "suffix"},
	}
	// insertPos := utils.ShowMenu(cliInfo,nil)

	pattern := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Provide the regex pattern to filter the files on"},
			Default: `\.spec\.ts$`,
		},
	)

	// fileOnlyPredicateFn := func(fullPath string) {
	// 	utils.AddContentToFile(fullPath, insertVal,insertPos)
	// }

	fileLinesPredicateFn := func(fullPath string) {
		utils.AddContentToEachLineInFile(fullPath, func(line string) string {
			// Example: Add "Processed: " as a prefix to each line
			return "// " + line
		})
	}

	err = utils.ProcessFilesMatchingPattern(targetDir, pattern, fileLinesPredicateFn)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}
