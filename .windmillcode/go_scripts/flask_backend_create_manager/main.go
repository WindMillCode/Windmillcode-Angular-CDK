package main

import (
	"fmt"
	"os"
	"strings"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	scriptLocation, err := os.Getwd()
	if err != nil {
		return
	}
	templateLocation := utils.JoinAndConvertPathToOSFormat(scriptLocation, "template_manager")
	testTemplateLocation := utils.JoinAndConvertPathToOSFormat(scriptLocation, "test_template_manager")
	shared.CDToWorkspaceRoot()
	utils.CDToFlaskApp()
	targetApp, err := os.Getwd()
	if err != nil {
		return
	}
	cliInfo := utils.ShowMenuModel{
		Prompt: "where is the managers folder located",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat(".", "managers"),
		},
		Other: true,
	}
	managersLocation := utils.JoinAndConvertPathToOSFormat(targetApp, utils.ShowMenu(cliInfo, nil))
	cliInfo = utils.ShowMenuModel{
		Prompt: "where is the test managers folder located",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat(".", "unit_tests", "FlaskTesting", "managers"),
		},
		Other: true,
	}
	testManagersLocation := utils.JoinAndConvertPathToOSFormat(targetApp, utils.ShowMenu(cliInfo, nil))
	managerName := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt: []string{"What is the name of the manager "},
			ErrMsg: "You must provide the name of a manager",
		},
	)
	managerNameString, err := utils.CreateStringObject(managerName, "")
	snakeCaseManagerName := managerNameString.Snakecase(false, "_manager")
	managersLocation = utils.JoinAndConvertPathToOSFormat(managersLocation, snakeCaseManagerName)
	testManagersLocation = utils.JoinAndConvertPathToOSFormat(testManagersLocation, snakeCaseManagerName)
	utils.CopyDir(templateLocation, managersLocation)
	utils.CopyDir(testTemplateLocation, testManagersLocation)
	managerFilePath := utils.JoinAndConvertPathToOSFormat(managersLocation, fmt.Sprintf("%s.py", snakeCaseManagerName))
	testManagerFilePath := utils.JoinAndConvertPathToOSFormat(testManagersLocation, fmt.Sprintf("test_%s.py", snakeCaseManagerName))
	os.Rename(
		utils.JoinAndConvertPathToOSFormat(managersLocation, "template_manager.py"),
		managerFilePath,
	)
	os.Rename(
		utils.JoinAndConvertPathToOSFormat(testManagersLocation, "test_template_manager.py"),
		testManagerFilePath,
	)

	for _, path := range []string{managerFilePath, testManagerFilePath} {
		fileString, err := utils.ReadFile(path)
		if err != nil {
			return
		}
		fileString = strings.ReplaceAll(fileString, "Template", managerNameString.Classify(false, ""))
		fileString = strings.ReplaceAll(fileString, "template", managerNameString.Snakecase(false, ""))
		utils.OverwriteFile(path, fileString)
	}

}
