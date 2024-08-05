package shared

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)



type ShellOptions struct {
	Executable string   `json:"executable"`
	Args       []string `json:"args"`
}

type CommandOptions struct {
	Shell ShellOptions `json:"shell"`
}

type Metadata struct {
	Name string `json:"name"`
}

type RunOptions struct {
	RunOn         string `json:"runOn"`
	InstanceLimit int    `json:"instanceLimit"`
}

type Task struct {
	Label   string `json:"label"`
	Type    string `json:"type"`
	Windows struct {
		Command string `json:"command"`
	} `json:"windows"`
	Linux struct {
		Command string         `json:"command"`
		Options CommandOptions `json:"options"`
	} `json:"linux"`
	Osx struct {
		Command string `json:"command"`
	} `json:"osx"`
	RunOptions   RunOptions `json:"runOptions"`
	Presentation struct {
		Panel string `json:"panel"`
	} `json:"presentation"`
	Metadata Metadata `json:"metadata"`
}

type Input struct {
	ID          string   `json:"id"`
	Description string   `json:"description"`
	Default     string   `json:"default"`
	Type        string   `json:"type"`
	Metadata    Metadata `json:"metadata"`
}

type TasksJSON struct {
	Version string  `json:"version"`
	Tasks   []Task  `json:"tasks"`
	Inputs  []Input `json:"inputs"`
}

type DynamicTasksJSON struct {
	Version string            `json:"version"`
	Tasks   []json.RawMessage `json:"tasks"`
	Inputs  []json.RawMessage `json:"inputs"`
}

func CDToWorkspaceRoot() {
	utils.CDToLocation(filepath.Join("..", "..", ".."))
}

func RebuildExecutables(proceed string, tasksJSON TasksJSON, goScriptsDestDirPath string, goExecutable string, beforeActionPredicate func()) {
	var rebuild string
	var cliInfo utils.ShowMenuModel
	if proceed == "TRUE" {
		rebuild = "TRUE"
	} else {
		cliInfo = utils.ShowMenuModel{
			Prompt:  "Do you want to rebuild the go programs into binary exectuables ",
			Choices: []string{"TRUE", "FALSE"},
		}
		rebuild = utils.ShowMenu(cliInfo, nil)
	}

	if rebuild == "TRUE" {

		cliInfo = utils.ShowMenuModel{
			Prompt:  "Build one by one or all at once",
			Choices: []string{"ALL_AT_ONCE", "ONE_BY_ONE"},
		}
		inSync := utils.ShowMenu(cliInfo, nil)
		beforeActionPredicate()

		if inSync == "ALL_AT_ONCE" {
			var wg sync.WaitGroup
			fmt.Print(len(tasksJSON.Tasks))
			for _, task := range tasksJSON.Tasks {
				wg.Add(1)

				pattern0 := ":"
				regex0 := regexp.MustCompile(pattern0)
				programLocation0 := regex0.Split(task.Label, -1)
				pattern1 := " "
				regex1 := regexp.MustCompile(pattern1)
				programLocation1 := regex1.Split(strings.Join(programLocation0, ""), -1)
				programLocation2 := strings.Join(programLocation1, "_")
				absProgramLocation := utils.JoinAndConvertPathToOSFormat(goScriptsDestDirPath, programLocation2)
				go func() {
					defer wg.Done()
					BuildGoCLIProgram(absProgramLocation, goExecutable)
				}()
			}
			wg.Wait()
		} else {
			fmt.Print(len(tasksJSON.Tasks))
			for _, task := range tasksJSON.Tasks {

				pattern0 := ":"
				regex0 := regexp.MustCompile(pattern0)
				programLocation0 := regex0.Split(task.Label, -1)
				pattern1 := " "
				regex1 := regexp.MustCompile(pattern1)
				programLocation1 := regex1.Split(strings.Join(programLocation0, ""), -1)
				programLocation2 := strings.Join(programLocation1, "_")
				absProgramLocation := utils.JoinAndConvertPathToOSFormat(goScriptsDestDirPath, programLocation2)
				BuildGoCLIProgram(absProgramLocation, goExecutable)

			}
		}

	} else {
		beforeActionPredicate()
	}
}

func BuildGoCLIProgram(programLocation string, goExecutable string) {

	fmt.Printf("%s \n", programLocation)
	utils.RunCommandInSpecificDirectory(goExecutable, []string{"build", "main.go"}, programLocation)
	fmt.Printf("Finished building %s \n", programLocation)

}

func CreateTasksJson(tasksJsonFilePath string, triedCreateOnError bool) ([]byte, error, bool) {

	content, err := os.ReadFile(tasksJsonFilePath)
	if err != nil {
		if triedCreateOnError {
			return nil, err, true
		}

		// If the file doesn't exist, create it.
		_, createErr := os.Create(tasksJsonFilePath)
		if createErr != nil {
			return nil, createErr, true
		}

		// Recursively attempt to read the file after creating it.
		return CreateTasksJson(tasksJsonFilePath, true)
	}

	return content, nil, false
}

func SetupEnvironmentToRunFlaskApp(env string) (string, error) {
	// Change to workspace root and get the current directory
	CDToWorkspaceRoot()
	workspaceFolder, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("error getting current directory: %w", err)
	}

	// Get settings from the workspace folder
	settings, err := utils.GetSettingsJSON(workspaceFolder)
	if err != nil {
		return "", fmt.Errorf("error getting settings JSON: %w", err)
	}

	// Change to Flask app directory and get the current directory
	utils.CDToFlaskApp()
	flaskAppFolder, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("error changing to Flask app directory: %w", err)
	}

	// Determine the helper script based on whether it's running in Docker
	helperScript := settings.ExtensionPack.FlaskBackendDevHelperScript
	if env == "test" {
		helperScript = settings.ExtensionPack.FlaskBackendTestHelperScript
	}
	if utils.IsRunningInDocker() {
		helperScript = strings.Replace(helperScript, "dev", "docker_dev", 1)
	}

	// Prompt for the location of the environment variables file
	cliInfo := utils.ShowMenuModel{
		Prompt:  "Where are the env vars located",
		Choices: []string{utils.JoinAndConvertPathToOSFormat(workspaceFolder, helperScript)},
		Other:   true,
	}
	envVarsFile := utils.ShowMenu(cliInfo, nil)

	// Get the Python version input
	pythonVersion := utils.GetInputFromStdin(utils.GetInputFromStdinStruct{
		Prompt:  []string{"Provide a Python version for pyenv to use"},
		Default: settings.ExtensionPack.PythonVersion0,
	})

	// Execute the helper script to set environment variables
	utils.CDToLocation(workspaceFolder)
	envVarCommandOptions := utils.CommandOptions{
		Command:     GetGoExecutable(),
		Args:        []string{"run", envVarsFile, filepath.Dir(utils.JoinAndConvertPathToOSFormat(envVarsFile)), workspaceFolder},
		GetOutput:   true,
		TargetDir:   filepath.Dir(utils.JoinAndConvertPathToOSFormat(envVarsFile)),
		PrintOutput: false,
	}
	envVars, err := utils.RunCommandWithOptions(envVarCommandOptions)
	if err != nil {
		return "", fmt.Errorf("error running command for env vars: %w", err)
	}

	// Parse and set the environment variables
	re := regexp.MustCompile(`(?s)<ENVVARS>(.*?)<\/ENVVARS>`)
	matches := re.FindStringSubmatch(envVars)
	envVarsArray := strings.Split(matches[1], ",")
	for _, x := range envVarsArray {
		indexOfEqual := strings.Index(x, "=")
		if indexOfEqual == -1 {
			continue
		}
		key := strings.TrimSpace(x[:indexOfEqual])
		value := strings.TrimSpace(x[indexOfEqual+1:])
		os.Setenv(key, value)
	}

	// Set the Python version if provided
	if pythonVersion != "" {
		_, err := exec.LookPath("pyenv")
		if err == nil{
			utils.RunCommand("pyenv", []string{"global", pythonVersion})
		} else{
			fmt.Println("pyenv seems not to be install in your system please install or set manually")
		}
	}

	return flaskAppFolder, nil
}

func SetNodeJSEnvironment(myDefault string){
	nodeJSVersion := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt: []string{"provide the nodejs version"},
			Default: myDefault,
		},
	)
	_, err := exec.LookPath("nvm")
	if err == nil{
		utils.RunCommand("nvm",[]string{"use",nodeJSVersion})
	} else{
		fmt.Println("nvm seems not to be installed in your system please install or set manually")
	}
}

func SetJavaEnvironment(){

	_, err := exec.LookPath("jvms")
	if err == nil{

	} else{
		fmt.Println("jvms seems not to be installed in your system please install or set manually")
		return;
	}
	output, _ := utils.RunCommandWithOptions(utils.CommandOptions{
		Command:   "jvms",
		Args:      []string{"ls"},
		GetOutput: true,
	})
	// Split the output into lines
	lines := strings.Split(output, "\n")
	var jdks []string

	// Iterate over the lines and extract JDK names
	for _, line := range lines {
		trimmedLine := strings.TrimSpace(line)
		if len(trimmedLine) > 0 && !strings.HasPrefix(trimmedLine, "Installed jdk") {
			// Remove the leading index and asterisk if present
			parts := strings.Split(trimmedLine, ")")
			if len(parts) > 1 {
				jdk := strings.TrimSpace(parts[1])
				// Remove the leading asterisk if present
				jdk = strings.TrimPrefix(jdk, "*")
				jdks = append(jdks, strings.TrimSpace(jdk))
			}
		}
	}
	cliInfo := utils.ShowMenuModel{
		Prompt: "select the java version to use",
		Choices:jdks,
	}
	javaVersion := utils.ShowMenu(cliInfo,nil)
	utils.RunElevatedCommand("jvms",[]string{"switch",javaVersion})

}


func GetGoExecutable() string {
	cliInfo := utils.ShowMenuModel{
		Prompt:  "choose the executable to use (try with windmillcode_go first if not then use go)",
		Choices: []string{"go", "windmillcode_go"},
		Default: "windmillcode_go",
	}
	goExecutable := utils.ShowMenu(cliInfo, nil)
	return goExecutable
}

func ChooseNodePackageManager() string {
	cliInfo := utils.ShowMenuModel{
		Prompt:  "choose the package manager",
		Choices: []string{"npm", "yarn", "pnpm"},
		Default: "npm",
	}
	exectuable := utils.ShowMenu(cliInfo, nil)
	return exectuable
}
