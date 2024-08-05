package main

import (
	"fmt"
	"main/shared"
	"net/http"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	flaskAppFolder, err := shared.SetupEnvironmentToRunFlaskApp("test")
	if err != nil {
		fmt.Println("Error during setup:", err)
		return
	}
	flaskAppUnitTestFolder := utils.JoinAndConvertPathToOSFormat(
		flaskAppFolder, "unit_tests",
	)
	utils.CDToLocation(flaskAppUnitTestFolder)
	var wg sync.WaitGroup

	wg.Add(1)
	go func() {
		defer wg.Done()
		port := 8004
		utils.CDToLocation(utils.JoinAndConvertPathToOSFormat("covhtml"))
		http.Handle("/", http.FileServer(http.Dir(".")))
		fmt.Println(fmt.Sprintf("Coverage info accesible at localhost:%d", port))
		err = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
		if err != nil {
			fmt.Println("Error starting the server:", err)
		}
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()

		for {
			utils.RunCommandWithOptions(
				utils.CommandOptions{
					Command:         "python",
					Args:            []string{"run_tests.py"},
					TargetDir:       flaskAppUnitTestFolder,
					PrintOutputOnly: true,
				},
			)
		}
	}()

	wg.Wait()

}
