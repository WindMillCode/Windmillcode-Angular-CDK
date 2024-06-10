package main

import (
	"fmt"
	"main/shared"
	"path/filepath"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()

	initScript := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"docker init script to run relative to workspace root "},
			Default: utils.JoinAndConvertPathToOSFormat(".windmillcode\\Local\\docker_init_container.go"),
		},
	)
	initScriptArgsStruct := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{},
	)
	initScriptArgs := fmt.Sprintf("%s %s", utils.JoinAndConvertPathToOSFormat("..", "..", ".."), initScriptArgsStruct.InputString)
	initScriptLocation := filepath.Dir(initScript)
	utils.CDToLocation(initScriptLocation)
	initScript = filepath.Base(initScript)

	utils.RunCommand(shared.GetGoExecutable(), []string{"run", initScript, initScriptArgs})
}
