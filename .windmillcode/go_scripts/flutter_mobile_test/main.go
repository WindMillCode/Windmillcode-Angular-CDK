package main

import (
	"time"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToFlutterApp()

	targetPath := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide the path to a file or directory"},
			Default: "./test",
		},
	)
	targetPath = utils.JoinAndConvertPathToOSFormat(targetPath)
	commandOptions := utils.CommandOptions{
		Command:   "flutter",
		Args:      []string{"test", targetPath},
		GetOutput: true,
	}
	for {
		utils.RunCommandWithOptions(commandOptions)
		time.Sleep(60 * time.Second)
	}

}
