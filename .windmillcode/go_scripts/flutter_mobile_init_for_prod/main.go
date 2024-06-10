package main

import (
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToFlutterApp()

	utils.RunCommand("dart", []string{"fix", "--apply"})
	utils.RunCommand("flutter", []string{"build", "appbundle"})
}
