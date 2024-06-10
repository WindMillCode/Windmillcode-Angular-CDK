package main

import (
	"fmt"
	"main/shared"
	"os"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	workspaceRoot, err := os.Getwd()
	if err != nil {
		fmt.Println("there was an error while trying to receive the current dir")
	}
	projectsCLI := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt:  "Provide the paths of all the projects where you want the actions to take place",
			Default: workspaceRoot,
		},
	)

	packageManager := shared.ChooseNodePackageManager()
	cliInfo := utils.ShowMenuModel{
		Other:  true,
		Prompt: "Choose the node.js app",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat("./apps/frontend/AngularApp"),
			utils.JoinAndConvertPathToOSFormat("./apps/cloud/FirebaseApp"),
			utils.JoinAndConvertPathToOSFormat("."),
		},
	}
	appLocation := utils.ShowMenu(cliInfo, nil)

	packagesCLI := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt: "Provide the names of the packages you would like to install",
			ErrMsg: "You must provide packages for installation",
		},
	)

	cliInfo = utils.ShowMenuModel{
		Prompt:  "chose whether its a dev dependency (-D) or dependency (-s)",
		Choices: []string{"-D", "-s"},
	}
	depType := utils.ShowMenu(cliInfo, nil)

	cliInfo = utils.ShowMenuModel{
		Prompt:  "uninstall?",
		Choices: []string{"true", "false"},
	}
	uninstall := utils.ShowMenu(cliInfo, nil)
	cliInfo = utils.ShowMenuModel{
		Prompt:  "install?",
		Choices: []string{"true", "false"},
	}
	install := utils.ShowMenu(cliInfo, nil)

	cliInfo = utils.ShowMenuModel{
		Prompt:  "force",
		Choices: []string{"true", "false"},
	}
	force := utils.ShowMenu(cliInfo, nil)

	var wg sync.WaitGroup
	projectsList := projectsCLI.InputArray

	packagesList := packagesCLI.InputArray
	for _, project := range projectsList {
		app := utils.JoinAndConvertPathToOSFormat(project, appLocation)
		wg.Add(1)
		go func() {
			defer wg.Done()
			uninstallPackages(uninstall, packageManager, force, packagesList, app)

			installPackages(install, packageManager, depType, force, packagesList, app)

		}()

	}
	wg.Wait()

}

func installPackages(install string, packageManager string, depType string, force string, packagesList []string, app string) {
	if install == "true" {
		var commands []string
		if packageManager == "npm" {
			commands = []string{"install"}
			if depType == "--save-dev" {
				commands = append(commands, "--save-dev")
			}
		} else { // This applies to both yarn and pnpm
			commands = []string{"add"}
			if depType == "--save-dev" {
				commands = append(commands, "--save-dev")
			}
		}

		if force == "true" {
			commands = append(commands, "--force")
		}

		commands = append(commands, "--verbose")
		commands = append(commands, packagesList...)
		utils.RunCommandInSpecificDirectory(packageManager, commands, app)
	}
}

func uninstallPackages(uninstall string, packageManager string, force string, packagesList []string, app string) {
	if uninstall == "true" {
		var commands []string
		if packageManager == "npm" || packageManager == "pnpm" {
			commands = []string{"uninstall"}
		} else { // This applies to yarn
			commands = []string{"remove"}
		}
		if force == "true" {
			commands = append(commands, "--force")
		}
		commands = append(commands, packagesList...)
		utils.RunCommandInSpecificDirectory(packageManager, commands, app)
	}
}
