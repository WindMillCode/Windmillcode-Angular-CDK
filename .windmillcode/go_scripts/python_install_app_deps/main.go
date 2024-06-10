package main

import (
	"fmt"
	"os"
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
	projectsCLI := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt:  "Provide the paths of all the projects where you want the actions to take place",
			Default: workspaceRoot,
		},
	)

	cliInfo := utils.ShowMenuModel{
		Other:  true,
		Prompt: "Choose an option:",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat("./apps/backend/FlaskApp"),
			utils.JoinAndConvertPathToOSFormat("."),
		},
	}
	appLocation := utils.ShowMenu(cliInfo, nil)

	pythonVersion := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide a python version for pyenv to use"},
			Default: settings.ExtensionPack.PythonVersion0,
		},
	)
	utils.RunCommand("pyenv", []string{"global", pythonVersion})
	cliInfo = utils.ShowMenuModel{
		Prompt:  "reinstall?",
		Choices: []string{"true", "false"},
	}
	reinstall := utils.ShowMenu(cliInfo, nil)
	utils.CDToLocation(appLocation)
	var sitePackages string
	targetOs := runtime.GOOS
	requirementsFile := targetOs + "-requirements.txt"
	switch targetOs {
	case "windows":

		sitePackages = utils.JoinAndConvertPathToOSFormat(".", "site-packages", "windows")

	case "linux", "darwin":
		sitePackages = utils.JoinAndConvertPathToOSFormat(".", "site-packages", "linux")

	default:
		fmt.Println("Unknown Operating System:", targetOs)
	}

	var wg sync.WaitGroup
	projectsList := projectsCLI.InputArray
	for _, project := range projectsList {
		app := utils.JoinAndConvertPathToOSFormat(project, appLocation)
		sitePackagesAbsPath := utils.JoinAndConvertPathToOSFormat(app, sitePackages)
		wg.Add(1)
		go func() {
			if reinstall == "true" {
				if err := os.RemoveAll(sitePackagesAbsPath); err != nil {
					fmt.Println("Error:", err)
					return
				}
			}
			utils.RunCommandInSpecificDirectory("pip", []string{"install", "-r", requirementsFile, "--target", sitePackages, "--upgrade"}, app)
		}()

	}
	wg.Wait()

}
