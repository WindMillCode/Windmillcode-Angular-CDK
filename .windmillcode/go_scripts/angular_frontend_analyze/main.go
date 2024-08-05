package main

import (
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	exectuable := shared.ChooseNodePackageManager()
	cliInfo := utils.ShowMenuModel{
		Prompt:  "Choose an option:",
		Choices: []string{"dev", "preview", "prod"},
	}
	envType := utils.ShowMenu(cliInfo, nil)
	utils.CDToAngularApp()
	if exectuable == "npm" {
		utils.RunCommand(exectuable, []string{"run", "analyze:" + envType})
	} else if exectuable == "pnpm" {
		utils.RunCommand(exectuable, []string{"run", "analyze:" + envType})
	} else if exectuable == "yarn" {
		utils.RunCommand(exectuable, []string{"analyze:" + envType})
	}
}
