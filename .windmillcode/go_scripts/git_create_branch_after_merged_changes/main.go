package main

import (
	"regexp"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	sourceBranch := "dev"
	currentBranch := utils.RunCommandAndGetOutput("git", []string{"rev-parse", "--abbrev-ref", "HEAD"})
	pattern := `\s+|\n+`

	// Create a regex object
	regex := regexp.MustCompile(pattern)

	// Remove all matches of the regex pattern from the input string
	currentBranch = regex.ReplaceAllString(currentBranch, "")
	deleteBranch := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"the local branch to delete:"},
			Default: currentBranch,
		},
	)
	createBranch := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"the local branch to create:"},
			Default: currentBranch,
		},
	)

	utils.RunCommand("git", []string{"checkout", sourceBranch})
	utils.RunCommand("git", []string{"pull", "origin", sourceBranch})
	utils.RunCommand("git", []string{"branch", "-D", deleteBranch})
	utils.RunCommand("git", []string{"checkout", "-b", createBranch})

}
