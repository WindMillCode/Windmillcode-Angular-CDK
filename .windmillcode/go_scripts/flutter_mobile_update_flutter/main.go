package main

import (
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToFlutterApp()

	utils.RunCommand("flutter", []string{"channel", "stable"})
	utils.RunCommandAndGetOutput("flutter", []string{"upgrade"})
	// utils.RunCommandAndGetOutput("flutter", []string{"upgrade","--force"})
}
