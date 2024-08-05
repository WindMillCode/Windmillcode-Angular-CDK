package main

import (
	"fmt"
	"main/shared"
	"os"
	"regexp"
	"strings"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

var(
	useForce = "TRUE"
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
	angularAppLocation := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide the relative path to the angular app (note : for every project  the relative path should be the same other )"},
			Default: "apps/frontend/AngularApp",
		},
	)
	cliInfo := utils.ShowMenuModel{
		Prompt: "use --force",
		Choices:[]string{"TRUE","FALSE"},
		Default:"TRUE",
	}
	useForce = utils.ShowMenu(cliInfo,nil)

	var wg sync.WaitGroup
	regex0 := regexp.MustCompile(" ")
	projectsList := regex0.Split(projectsCLI.InputString, -1)
	for _, project := range projectsList {
		rootProject := project
		AngularApp := utils.JoinAndConvertPathToOSFormat(project, angularAppLocation)
		wg.Add(1)
		go func() {
			defer wg.Done()
			updateAngular(rootProject, AngularApp)
		}()
	}
	wg.Wait()

}

func updateAngular(project string, angularApp string) {
	utils.RunCommandInSpecificDirectory("git", []string{"add", "."}, project)
	utils.RunCommandInSpecificDirectory("git", []string{"commit", "-m", "[CHECKPOINT] before upgrading to next angular version"}, project)
	inputText := utils.RunCommandInSpecifcDirectoryAndGetOutput("npx", []string{"ng", "update"}, angularApp)
	inputLines := strings.Split(inputText, "\n")
	packagesToUpdate := []string{}
	for _, line := range inputLines {
		if strings.Contains(line, "ng update @") {
			packagesToUpdate = append(packagesToUpdate, line)
		}
	}
	updateCommand := "ng update"
	for _, pkg := range packagesToUpdate {
		packageGroup := strings.TrimSpace(strings.Split(pkg, "->")[0])
		packageName := strings.TrimSpace(strings.Split(packageGroup, " ")[0])
		updateCommand += " " + packageName
	}

	updateArgs := strings.Split(updateCommand, " ")
	if useForce == "TRUE"{
		updateArgs = append(updateArgs,"--force")
	}
	utils.RunCommandInSpecificDirectory("npx", updateArgs, angularApp)



}
