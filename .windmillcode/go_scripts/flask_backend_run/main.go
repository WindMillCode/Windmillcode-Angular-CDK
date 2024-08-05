package main

import (
	"fmt"
	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {
	flaskAppFolder, err := shared.SetupEnvironmentToRunFlaskApp("dev")
	if err != nil {
		fmt.Println("Error during setup:", err)
		return
	}

	// Remaining part of the original script that uses flaskAppFolder
	for {
		utils.CDToLocation(flaskAppFolder)
		runOptions := utils.CommandOptions{
			Command:         "python",
			Args:            []string{"app.py", "--reloader_type", "stat"},
			GetOutput:       false,
			PrintOutputOnly: true,
		}
		utils.RunCommandWithOptions(runOptions)
	}
}
