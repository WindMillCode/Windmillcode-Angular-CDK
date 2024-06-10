package main

import (
	"fmt"
	"os"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	workspaceRoot, err := os.Getwd()
	if err != nil {
		return
	}
	settings, err := utils.GetSettingsJSON(workspaceRoot)
	if err != nil {
		settings = utils.VSCodeSettings{}
	}
	choicePaths := append(settings.ExtensionPack.GitPushingWorkToGitRemote.RelativePaths,settings.ExtensionPack.GitPushingWorkToGitRemote.AbsolutePaths...)
	normalizedChoicePaths := []string{}
	for _, path := range choicePaths {
		normalizedChoicePaths = append(normalizedChoicePaths, utils.ConvertPathToOSFormat(path))

	}
	if(len(normalizedChoicePaths)==0){
		normalizedChoicePaths = []string{
				utils.JoinAndConvertPathToOSFormat("."),
				utils.JoinAndConvertPathToOSFormat(".", "apps", "frontend", "AngularApp"),
				utils.JoinAndConvertPathToOSFormat(".", "apps", "backend", "RailsApp"),
				utils.JoinAndConvertPathToOSFormat(".", "apps", "backend", "FlaskApp"),
			}
	}
	cliInfo := utils.ShowMenuModel{
		Prompt: "choose a location to push to git remote",
		Choices:normalizedChoicePaths,
	}
	repoLocation := utils.ShowMenu(cliInfo, nil)
	cliInfo = utils.ShowMenuModel{
		Prompt:  "choose the commit type",
		Choices: []string{"UPDATE", "CHECKPOINT", "FIX", "PATCH", "BUG", "MERGE", "COMPLEX MERGE"},
	}
	commitType := utils.ShowMenu(cliInfo, nil)
	commitType = fmt.Sprintf("[%s]", commitType)
	commitMsg := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Enter your commit msg:"},
			Default: "additional work",
		},
	)
	utils.CDToLocation(repoLocation)

	commitFullMsg := fmt.Sprintf("\"%s %s\"", commitType, commitMsg)
	utils.RunCommand("git", []string{"add", "."})
	utils.RunCommand("git", []string{"commit", "-m", commitFullMsg})
	utils.RunCommand("git", []string{"branch", "--unset-upstream"})
	utils.RunCommand("git", []string{"push", "origin", "HEAD"})
}
