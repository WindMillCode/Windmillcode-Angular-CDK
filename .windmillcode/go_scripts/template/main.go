package main

import (
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToTestNGApp()

	opts := utils.CommandOptions{
		Command: "",
		Args:    []string{},
	}
	utils.RunCommandWithOptions(opts)
}
