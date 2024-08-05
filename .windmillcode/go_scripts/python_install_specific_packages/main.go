package main

import (
	"fmt"
	"os"
	"runtime"
	"strings"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {
	scriptFolder, err := os.Getwd()
	if err != nil {
		fmt.Println("there was an error while trying to receive the script dir")
	}
	shared.CDToWorkspaceRoot()
	workspaceFolder, err := os.Getwd()
	if err != nil {
		fmt.Println("there was an error while trying to receive the current dir")
	}
	settings, err := utils.GetSettingsJSON(workspaceFolder)
	if err != nil {
		return
	}
	cliInfo := utils.ShowMenuModel{
		Other:  true,
		Prompt: "Choose an option:",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat("./apps/backend/FlaskApp"),
			utils.JoinAndConvertPathToOSFormat("."),
		},
	}
	appLocation := utils.ShowMenu(cliInfo, nil)
	appLocation = utils.JoinAndConvertPathToOSFormat(workspaceFolder, appLocation)

	pythonVersion := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide a python version for pyenv to use"},
			Default: settings.ExtensionPack.PythonVersion0,
		},
	)
	utils.RunCommand("pyenv", []string{"global", pythonVersion})

	packageList := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt: "Provide the names of the packages you would like to install",
			ErrMsg: "You must provide packages for installation",
		},
	)

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
	utils.CDToLocation(appLocation)
	var sitePackages string
	targetOs := runtime.GOOS

	cliInfoMulti := utils.ShowMenuMultipleModel{
		Prompt:         "Select the requirements files ",
		Choices:        []string{"windows-requirements.txt", "linux-requirements.txt", "darwin-requirements.txt"},
		SelectionLimit: 3,
		Defaults:       []string{"windows-requirements.txt", "linux-requirements.txt", "darwin-requirements.txt"},
	}
	requirementsFiles := utils.ShowMenuMultipleOptions(cliInfoMulti, nil)
	switch targetOs {
	case "windows":

		sitePackages = utils.JoinAndConvertPathToOSFormat(appLocation, "site-packages", "windows")

	case "linux", "darwin":
		sitePackages = utils.JoinAndConvertPathToOSFormat(appLocation, "site-packages", "linux")

	default:
		fmt.Println("Unknown Operating System:", targetOs)
	}
	if uninstall == "true" {

		cliInfo := utils.ShowMenuModel{
			Prompt:  "force?",
			Choices: []string{"YES", "NO"},
			Default: "NO",
		}
		force := utils.ShowMenu(cliInfo, nil)
		packageListArgs := append([]string{"remove_local_packages.py"}, packageList.InputArray...)
		packageListArgs = append(packageListArgs, sitePackages)
		if force == "YES" {
			packageListArgs = append(packageListArgs, "--force")
		}
		removeLocalPagesOptions := utils.CommandOptions{
			Command:     "python",
			Args:        packageListArgs,
			TargetDir:   scriptFolder,
			GetOutput:   true,
			PrintOutput: true,
		}
		keptPackages, _ := utils.RunCommandWithOptions(removeLocalPagesOptions)
		if strings.Contains(keptPackages, "ERROR") == true {
			fmt.Println(fmt.Errorf("Error removing packages"))
			return
		}
		keptPackagesArray := strings.Split(strings.TrimSpace(keptPackages), ", ")
		packagesToRemove := utils.RemoveElementsNotInSource[string](keptPackagesArray, packageList.InputArray)

		for _, requirementsFile := range requirementsFiles {
			requirementsFilePath := utils.JoinAndConvertPathToOSFormat(appLocation, requirementsFile)
			err := utils.RemoveContentFromFile(requirementsFilePath, packagesToRemove)
			if err != nil {
				fmt.Printf("Error removing package from requirements file: %v\n", err)
			}

		}

	}
	if install == "true" {
		packageListArgs := append([]string{"install"}, packageList.InputArray...)
		packageListArgs = append(packageListArgs, "--target", sitePackages)
		cliInfo := utils.ShowMenuModel{
			Prompt:  "upgrade if uncertain choose No",
			Choices: []string{"YES", "NO"},
			Default: "NO",
		}
		upgrade := utils.ShowMenu(cliInfo, nil)
		if upgrade == "YES" {
			packageListArgs = append(packageListArgs, "--upgrade")
		}
		utils.RunCommand("pip", packageListArgs)

		for _, requirementsFile := range requirementsFiles {
			requirementsFilePath := utils.JoinAndConvertPathToOSFormat(appLocation, requirementsFile)

			// Read the existing content of the requirements file
			content, err := utils.ReadFile(requirementsFilePath)
			if err != nil {
				fmt.Printf("Error reading requirements file: %v\n", err)
				continue
			}

			// Process the content to create a set of unique packages
			lines := strings.Split(content, "\n")
			uniquePackages := make(map[string]bool)
			for _, line := range lines {
				trimmedLine := strings.TrimSpace(line)
				if trimmedLine != "" {
					uniquePackages[trimmedLine] = true
				}
			}

			// Add new packages from packageList.InputArray if they're not already present
			for _, packageName := range packageList.InputArray {
				trimmedPackageName := strings.TrimSpace(packageName)
				if trimmedPackageName != "" {
					uniquePackages[trimmedPackageName] = true
				}
			}

			// Prepare the updated content for the requirements file
			updatedContent := ""
			for packageName := range uniquePackages {
				updatedContent += packageName + "\n"
			}

			// Write the updated content back to the file
			err = utils.OverwriteFile(requirementsFilePath, updatedContent)
			if err != nil {
				fmt.Printf("Error writing to requirements file: %v\n", err)
			}
		}
	}

}
