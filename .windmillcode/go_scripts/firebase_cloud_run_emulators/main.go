package main

import (
	"main/shared"
	// "os"
	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToFirebaseApp()

	shared.SetJavaEnvironment()
	packageManager := shared.ChooseNodePackageManager()
	// cliInfo := utils.ShowMenuModel{
	// 	Prompt: "Debug Mode",
	// 	Choices:[]string{"TRUE","FALSE"},
	// }
	// debugMode := utils.ShowMenu(cliInfo,nil)
	// if debugMode=="TRUE"{
	// 	os.Setenv("FIREBASE_DEBUG", "true")
	// }
	utils.RunCommand(packageManager, []string{"run", "cleanup"})
	utils.RunCommand("npx", []string{"firebase", "emulators:start", "--import=devData", "--export-on-exit"})
}
