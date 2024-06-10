package main

import (
	"fmt"
	"os"
	"strings"

	"main/shared"

	"github.com/iancoleman/strcase"
	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	scriptLocation, err := os.Getwd()
	if err != nil {
		return
	}
	templateLocation := utils.JoinAndConvertPathToOSFormat(scriptLocation, "template")
	templateEndpointFile := utils.JoinAndConvertPathToOSFormat(templateLocation, "template_endpoint.py")
	templateHandlerFile := utils.JoinAndConvertPathToOSFormat(templateLocation, "template_handler.py")
	shared.CDToWorkspaceRoot()
	utils.CDToFlaskApp()
	targetApp, err := os.Getwd()
	if err != nil {
		return
	}

	endpointsFolder := utils.JoinAndConvertPathToOSFormat(targetApp, "endpoints")
	handlersFolder := utils.JoinAndConvertPathToOSFormat(targetApp, "handlers")

	targetName := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt: []string{"Please provide the name of the controller"},
			ErrMsg: "You must provide the name of the controller",
		},
	)
	urlPrefix := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide the url prefix for the controller"},
			Default: targetName,
		},
	)
	snakeCaseUrlPrefix := strcase.ToSnake(urlPrefix)
	snakeCaseTargetName := strcase.ToSnake(targetName)
	snakeCaseEndpointTargetName := strcase.ToSnake(targetName + "_endpoint")
	snakeCaseHandlersTargetName := strcase.ToSnake(targetName + "_handler")
	endpointsFile := utils.JoinAndConvertPathToOSFormat(endpointsFolder, fmt.Sprintf("%s.py", snakeCaseEndpointTargetName))
	handlersFile := utils.JoinAndConvertPathToOSFormat(handlersFolder, fmt.Sprintf("%s.py", snakeCaseHandlersTargetName))
	utils.CopyFile(templateEndpointFile, endpointsFile)
	utils.CopyFile(templateHandlerFile, handlersFile)

	for _, path := range []string{endpointsFile, handlersFile} {
		fileString, err := utils.ReadFile(path)
		if err != nil {
			return
		}
		fileString = strings.ReplaceAll(fileString, "wml_template_url_prefix", snakeCaseUrlPrefix)
		fileString = strings.ReplaceAll(fileString, "wml_template", snakeCaseTargetName)

		utils.OverwriteFile(path, fileString)
	}

	updateAppFile(targetApp)

}

func updateAppFile(targetApp string) {
	// appFile := utils.JoinAndConvertPathToOSFormat(targetApp, "app.py")
}
