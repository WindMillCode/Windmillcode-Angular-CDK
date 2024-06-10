package main

import (
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToAngularApp()

	utils.RunCommand("yarn", []string{"compodoc:build-and-serve"})
}
