package main

import (
	"fmt"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	cliInfo := utils.ShowMenuModel{
		Prompt: "Choose an option:",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat("docs", "tasks_docs"),
			utils.JoinAndConvertPathToOSFormat("docs", "application_documentation"),
			"issues",
		},
	}
	docLocation := utils.ShowMenu(cliInfo, nil)
	docLocation = utils.JoinAndConvertPathToOSFormat(docLocation)
	entityNames, err := utils.GetItemsInFolder(docLocation)
	if err != nil {

		fmt.Println("Error retrieving file names please check the spelling of the provided/selected folder")
	}
	cliInfo = utils.ShowMenuModel{
		Prompt:  "Select the entity to open",
		Choices: entityNames,
		Other:   true,
	}
	targetName := utils.ShowMenu(cliInfo, nil)
	targetPath := utils.JoinAndConvertPathToOSFormat(docLocation, targetName)
	utils.RunCommand("code", []string{targetPath})
}
