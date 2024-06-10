package main

import (
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	sourceBranch := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"the branch to merge changes from:"},
			Default: "dev",
		},
	)

	utils.RunCommand("git", []string{"checkout", sourceBranch})
	utils.RunCommand("git", []string{"pull", "origin", sourceBranch})
	utils.RunCommand("git", []string{"checkout", "-"})
	utils.RunCommand("git", []string{"merge", sourceBranch})
}
