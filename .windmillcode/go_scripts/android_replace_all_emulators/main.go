package main

import (
	"fmt"
	"strings"
	"main/shared"
	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func listAVDs() ([]string, error) {


	output, err := utils.RunCommandWithOptions(utils.CommandOptions{
		Command:   "avdmanager",
		Args:      []string{"list", "avd"},
		GetOutput: true,
	})
	if err != nil {
		return nil, err
	}

	lines := strings.Split(output, "\n")
	var avds []string
	for _, line := range lines {
		if strings.Contains(line, "Name:") {
			avd := strings.TrimSpace(strings.Split(line, "Name:")[1])
			fmt.Println(avd)
			avds = append(avds, avd)
		}
	}
	return avds, nil
}

func deleteAVDs(avds []string) {
	for _, avd := range avds {
		utils.RunCommandWithOptions(utils.CommandOptions{
			Command: "avdmanager",
			Args:    []string{"delete", "avd", "-n", avd},
		})
		fmt.Printf("Deleted AVD: %s\n", avd)
	}
}

func createAVDs(avds []string) {
	for _, avd := range avds {
		utils.RunCommandWithOptions(utils.CommandOptions{
			Command: "avdmanager",
			Args:    []string{"create", "avd","--force", "-n", avd, "--abi","google_apis/x86_64", "-k", "system-images;android-34;google_apis;x86_64","--device"},
			IsInputFromProgram:true,
		})
		fmt.Printf("Created AVD: %s\n", avd)
	}
}


func main() {

	shared.SetJavaEnvironment()
	cliInfo := utils.ShowMenuModel{
		Prompt:   "What would you like to do?",
		Choices:  []string{"Add AVDs", "Delete AVDs", "Both"},
		Default:  "Both",
		Other:    false,
	}
	action := utils.ShowMenu(cliInfo,nil)


	avdsToCreateInput := utils.GetInputFromStdin(utils.GetInputFromStdinStruct{
		Prompt: []string{"To create : Enter a comma-separated list of AVD names or leave blank to use all available AVDs: (issue does not work because it cant find the respective device for the avd)"},
	})
	avdsToDeleteInput := utils.GetInputFromStdin(utils.GetInputFromStdinStruct{
		Prompt: []string{"To delete :Enter a comma-separated list of AVD names or leave blank to use all available AVDs:"},
	})

	var avdsToCreate []string
	var avdsToDelete []string
	if avdsToCreateInput == "" {
		var err error
		avdsToCreate, err = listAVDs()
		if err != nil {
			fmt.Println("Error listing AVDs:", err)
			return
		}
	} else {
		avdsToCreate = strings.Split(avdsToCreateInput, ",")
		for i, avd := range avdsToCreate {
			avdsToCreate[i] = strings.TrimSpace(avd)
		}
	}

	if avdsToDeleteInput == "" {
		var err error
		avdsToDelete, err = listAVDs()
		if err != nil {
			fmt.Println("Error listing AVDs:", err)
			return
		}
	} else {
		avdsToDelete = strings.Split(avdsToDeleteInput, ",")
		for i, avd := range avdsToDelete {
			avdsToDelete[i] = strings.TrimSpace(avd)
		}
	}


	if action == "Delete AVDs" || action == "Both" {
		deleteAVDs(avdsToDelete)
	}
	if action == "Add AVDs" || action == "Both" {
		createAVDs(avdsToCreate)
	}

}
