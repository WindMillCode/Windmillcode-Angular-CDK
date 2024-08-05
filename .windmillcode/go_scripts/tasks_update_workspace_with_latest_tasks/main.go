package main

import (
	"encoding/json"
	"fmt"
	"main/shared"
	"os"
	"regexp"
	"strings"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func DefaultSettings() utils.VSCodeSettings {
  return utils.VSCodeSettings{
    ExtensionPack: utils.WindmillcodeExtensionPack{
      TasksToRunOnFolderOpen: []string{},
    },
  }
}
func MergeSettings(settings utils.VSCodeSettings, defaultSettings utils.VSCodeSettings) utils.VSCodeSettings {
  if len(settings.ExtensionPack.TasksToRunOnFolderOpen) == 0 {
    settings.ExtensionPack.TasksToRunOnFolderOpen = defaultSettings.ExtensionPack.TasksToRunOnFolderOpen
  }
  // Add checks for other properties as needed
  return settings
}




func filterJSONForOwnItems(items []json.RawMessage) []json.RawMessage {
	var filteredItems []json.RawMessage
	for _, item := range items {
		var itemWithMetadata struct {
			Metadata shared.Metadata `json:"metadata"`
		}

		if err := json.Unmarshal(item, &itemWithMetadata); err != nil {
			fmt.Println("Error unmarshalling item:", err)
			continue
		}

		if itemWithMetadata.Metadata.Name != "windmillcode" {
			filteredItems = append(filteredItems, item)
		}
	}
	return filteredItems
}

func turnToDynamicJSONArray[T any](mySource []T) []json.RawMessage {
	var rawItems []json.RawMessage
	for _, item := range mySource {
		rawItem, err := json.Marshal(item)
		if err != nil {
			utils.LogErrorWithTraceBack("Error marshalling:", err)
			continue
		}
		rawItems = append(rawItems, rawItem)
	}
	return rawItems
}

func preActions(deleteDestDir, goScriptsSourceDirPath, goScriptsDestDirPath string) func() {
	return func() {
		if deleteDestDir == "YES" {
			fmt.Println("Deleting Dest dir ...")
			if err := os.RemoveAll(goScriptsDestDirPath); err != nil {
				fmt.Println("Error:", err)
				return
			}
		}
		fmt.Println("Copying over files ...")
		utils.CopyDir(goScriptsSourceDirPath, goScriptsDestDirPath)
	}
}

func updateGitignore(gitignorePath string) {
	linesToAdd := []string{
		".windmillcode/go_scripts/*/diode.exe*",
		".windmillcode/go_scripts/*/diode*",
		".windmillcode/go_scripts/*/main.exe*",
		".windmillcode/go_scripts/*/main*",
		"!.windmillcode/go_scripts/*/main.go",
	}

	// Check if .gitignore exists, if not create it
	if !utils.FolderExists(gitignorePath) {
		file, err := os.Create(gitignorePath)
		if err != nil {
			utils.LogErrorWithTraceBack("Error creating .gitignore file:", err)
			return
		}
		file.Close()
	}

	// Read existing lines in .gitignore
	existingLinesMap, err := utils.ReadLines(gitignorePath)
	if err != nil {
		utils.LogErrorWithTraceBack("Error reading .gitignore file:", err)
		return
	}

	// Convert map keys to a slice
	var existingLines []string
	for line := range existingLinesMap {
		existingLines = append(existingLines, line)
	}

	// Filter out lines that are already in the .gitignore
	linesToAdd = utils.RemoveElementsNotInSource(existingLines, linesToAdd)

	// Append new lines to .gitignore
	err = utils.AddContentToFile(gitignorePath, strings.Join(linesToAdd, "\n"), "suffix")
	if err != nil {
		utils.LogErrorWithTraceBack("Error writing to .gitignore file:", err)
		return
	}
}



func main() {


	workSpaceFolder := os.Args[1]
	extensionFolder := os.Args[2]
	tasksJsonRelativeFilePath := os.Args[3]

	settings, err := utils.GetSettingsJSON(workSpaceFolder)
	if err != nil {
		settings = DefaultSettings() // Use the default settings if GetSettingsJSON fails
	} else {
		defaultSettings := DefaultSettings()
		settings = MergeSettings(settings, defaultSettings) // Merge with default settings for missing properties
	}


	proceed := "TRUE"

	cliInfo := utils.ShowMenuModel{
		Prompt:  "delete dest dir to ensure proper update (if updates are not taking place choose YES)",
		Choices: []string{"YES", "NO"},
		Default: "YES",
	}
	deleteDestDir := utils.ShowMenu(cliInfo, nil)

	cliInfo = utils.ShowMenuModel{
		Prompt:  "Run Tasks Via Interpreted or Complied Mode",
		Choices: []string{"COMPLIED", "INTERPRETED"},
		Default: "COMPLIED",
	}
	runMode := utils.ShowMenu(cliInfo, nil)

	cliInfo = utils.ShowMenuModel{
		Prompt: "Should the .gitignore be modifed (this is harmless select NO IF sure)",
		Choices:[]string{"YES","NO"},
		Default: "YES",
	}
	modifyGitignore := utils.ShowMenu(cliInfo,nil)
	// TODO implement later
	// cliInfo = utils.ShowMenuModel{
	// 	Prompt:  "use default user (if unsure select NO)",
	// 	Choices: []string{"NO", "YES"},
	// 	Default: "NO",
	// }
	// customUserIsPresent := utils.ShowMenu(cliInfo, nil)

	tasksJsonFilePath := utils.JoinAndConvertPathToOSFormat(extensionFolder, tasksJsonRelativeFilePath)

	workspaceTasksJSONFilePath := utils.JoinAndConvertPathToOSFormat(workSpaceFolder, "/.vscode/tasks.json")
	gitignorePath :=utils.JoinAndConvertPathToOSFormat(workSpaceFolder,".gitignore")
	if modifyGitignore == "YES" {
		updateGitignore(gitignorePath)
	}

	if _, err := os.Stat(workspaceTasksJSONFilePath); os.IsNotExist(err) {
		if err := os.MkdirAll(workSpaceFolder+"/.vscode", os.ModePerm); err != nil {
			utils.LogErrorWithTraceBack("Error creating .vscode directory:", err)
			return
		}
	}

  var tasksJSON shared.TasksJSON
  content, err := os.ReadFile(tasksJsonFilePath)
  if err != nil {
    newContent, err, shouldReturn := shared.CreateTasksJson(tasksJsonFilePath, false)

    if err != nil {
      utils.LogErrorWithTraceBack("Error creating tasks json file", err)
      return
    }
		content = newContent
    if shouldReturn {
      return
    }
  }
	cleanJSON, err := utils.RemoveComments(content)
	if err != nil {
		utils.LogErrorWithTraceBack("Error removing comments:", err)
		return
	}
	err = json.Unmarshal([]byte(cleanJSON), &tasksJSON)
	if err != nil {
		utils.LogErrorWithTraceBack("Error unmarshalling JSON:", err)
		return
	}

	fmt.Print("\n\n\n If you see an unexpected end of input one of the array in your JSON has a ',' for its last item. this is not valid json remove that LAST comma\n\n\n")

	goExecutable := shared.GetGoExecutable()
	goScriptsSourceDirPath := utils.JoinAndConvertPathToOSFormat(extensionFolder, "task_files/go_scripts")
	goScriptsDestDirPath := utils.JoinAndConvertPathToOSFormat(workSpaceFolder, ".windmillcode/go_scripts")

	if proceed == "TRUE" {

		for index, task := range tasksJSON.Tasks {

			pattern0 := ":"
			regex0 := regexp.MustCompile(pattern0)
			programLocation0 := regex0.Split(task.Label, -1)
			pattern1 := " "
			regex1 := regexp.MustCompile(pattern1)
			programLocation1 := regex1.Split(strings.Join(programLocation0, ""), -1)
			programLocation2 := strings.Join(programLocation1, "_")
			programLocation3 := ".windmillcode//go_scripts//" + programLocation2
			taskExecutable := ".//main"
			if runMode == "INTERPRETED" || programLocation2 == "tasks_update_workspace_without_extension" {
				taskExecutable = fmt.Sprintf("%s %s", goExecutable, "run main.go")
			}
			linuxCommand0 := "cd " + programLocation3 + " ; " + taskExecutable
			windowsCommand0 := "cd " + strings.Replace(programLocation3, "//", "\\", -1) + " ; " + strings.Replace(taskExecutable+".exe", "//", "\\", -1)
			tasksJSON.Tasks[index].Windows.Command = windowsCommand0
			tasksJSON.Tasks[index].Osx.Command = linuxCommand0
			tasksJSON.Tasks[index].Linux.Command = linuxCommand0
			tasksJSON.Tasks[index].Linux.Options = shared.CommandOptions{
				Shell: shared.ShellOptions{
					Executable: "bash",
					Args:       []string{"-ic"},
				},
			}
			tasksJSON.Tasks[index].Metadata.Name = "windmillcode"
			if utils.ArrayContainsAny([]string{task.Label}, settings.ExtensionPack.TasksToRunOnFolderOpen) {
				tasksJSON.Tasks[index].RunOptions.RunOn = "folderOpen"
			}
		}
		workspaceTasksJSONFilePath := utils.JoinAndConvertPathToOSFormat(workSpaceFolder, "/.vscode/tasks.json")
		content, err, shouldReturn := shared.CreateTasksJson(workspaceTasksJSONFilePath, false)
		if err != nil {
			utils.LogErrorWithTraceBack("Error creating tasks json file", err)
			return
		}
		if shouldReturn {
			return
		}
		var previousTasksJSON map[string]json.RawMessage
		previousCleanJSON, _ := utils.RemoveComments(content)
		err = json.Unmarshal([]byte(previousCleanJSON), &previousTasksJSON)
		if err != nil {
			previousTasksJSON =map[string]json.RawMessage{}
			utils.LogErrorWithTraceBack("Error unmarshalling JSON:", err)
		}


		var previousTasks []json.RawMessage
		if _, ok := previousTasksJSON["tasks"]; ok {
			err = json.Unmarshal(previousTasksJSON["tasks"], &previousTasks)
			if err != nil {
				utils.LogErrorWithTraceBack("Error unmarshalling tasks:", err)
				return
			}
		} else{
			previousTasks = []json.RawMessage{}
		}

		for i, taskRaw := range previousTasks {
			// Unmarshal the task into a map to access its properties
			var task map[string]interface{}
			if err := json.Unmarshal(taskRaw, &task); err != nil {
				fmt.Println("Error unmarshalling task:", err)
				continue
			}

			// Check if the task's label is in the TasksToRunOnFolderOpen list
			label, ok := task["label"].(string)
			if !ok {
				fmt.Println("Error: label is not a string")
				continue
			}
			var runOnValue = ""
			if utils.ArrayContainsAny([]string{label}, settings.ExtensionPack.TasksToRunOnFolderOpen) {
				runOnValue = "folderOpen"
			}
			runOptions, exists := task["runOptions"].(map[string]interface{})
			if !exists {
				runOptions = make(map[string]interface{})
				task["runOptions"] = runOptions
			}
			runOptions["runOn"] = runOnValue

			// Marshal the task back into json.RawMessage
			modifiedTaskRaw, err := json.Marshal(task)
			if err != nil {
				utils.LogErrorWithTraceBack("Error marshalling task:", err)
				continue
			}

			// Update the previousTasks slice with the modified task
			previousTasks[i] = modifiedTaskRaw
		}

		currentTasksRaw := turnToDynamicJSONArray(tasksJSON.Tasks)

		var previousInputs []json.RawMessage
		_ = json.Unmarshal(previousTasksJSON["inputs"], &previousInputs)
		currentInputsRaw := turnToDynamicJSONArray(tasksJSON.Inputs)
		var newTasksJSON shared.DynamicTasksJSON
		newTasksJSON.Version = tasksJSON.Version
		newTasksJSON.Tasks = append(filterJSONForOwnItems(previousTasks), currentTasksRaw...)
		newTasksJSON.Inputs = append(filterJSONForOwnItems(previousInputs), currentInputsRaw...)

		// marker
		tasksJSONData, err := json.MarshalIndent(newTasksJSON, "", "  ")
		if err != nil {
			utils.LogErrorWithTraceBack("Error marshalling JSON:", err)
			return
		}

		workspaceTasksJSONFile, err := os.OpenFile(workspaceTasksJSONFilePath, os.O_WRONLY|os.O_TRUNC, 0644)
		if err != nil {
			utils.LogErrorWithTraceBack("Error opening file:", err)
			return
		}
		defer workspaceTasksJSONFile.Close()
		_, err = workspaceTasksJSONFile.Write(tasksJSONData)
		if err != nil {
			utils.LogErrorWithTraceBack("Error writing to file:", err)
			return
		}
	}

	shared.RebuildExecutables(proceed, tasksJSON, goScriptsDestDirPath, goExecutable, preActions(deleteDestDir, goScriptsSourceDirPath, goScriptsDestDirPath))
}
