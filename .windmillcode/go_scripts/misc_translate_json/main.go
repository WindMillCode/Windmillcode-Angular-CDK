package main

import (
	"fmt"
	"os"
	"runtime"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	workspaceRoot, _ := os.Getwd()
	settings, err := utils.GetSettingsJSON(workspaceRoot)
	if err != nil {
		return
	}

	cliInfo := utils.ShowMenuModel{
		Prompt: "choose the location of the i18n folder",
		Choices: []string{
			utils.JoinAndConvertPathToOSFormat(workspaceRoot, "apps", "frontend", "AngularApp", "src", "assets", "i18n"),
			utils.JoinAndConvertPathToOSFormat(workspaceRoot, "apps", "mobile", "FlutterApp", "assets", "i18n"),
		},
	}
	i18nLocation := utils.ShowMenu(cliInfo, nil)
	openAIAPIKey := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide the open ai api key"},
			ErrMsg:  "an open ai key is required to translate the app",
			Default: settings.ExtensionPack.OpenAIAPIKey0,
		},
	)
	if settings.ExtensionPack.OpenAIAPIBase0 == "" {
		settings.ExtensionPack.OpenAIAPIBase0 = "https://api.openai.com/v1"
	}
	openAIBase := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Provide the open ai url"},
			Default: settings.ExtensionPack.OpenAIAPIBase0,
		},
	)
	langCodes := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{" Provide a list of lang codes to run \n translation script. \n Provide them in comma separated format according to the options below. \n Example: 'zh, es, hi, bn' \n It's best to do 4 at a time. \n Options: zh, es, hi, uk, ar, bn, ms, fr, de, sw, am"},
			ErrMsg:  "Lang codes are required",
			Default: settings.ExtensionPack.LangCodes0,
		},
	)

	os.Setenv("OPENAI_API_BASE", openAIBase)
	os.Setenv("OPENAI_API_KEY_0", openAIAPIKey)
	utils.CDToLocation(utils.JoinAndConvertPathToOSFormat(workspaceRoot, ".windmillcode", "go_scripts", "i18n_script_via_ai"))
	// pathSeparator := string(filepath.Separator)
	i18nScriptLocation, _ := os.Getwd()
	switch os := runtime.GOOS; os {
	case "windows":
		sitePackages := utils.JoinAndConvertPathToOSFormat(i18nScriptLocation, "site-packages", "windows")
		// sitePackages = strings.Join([]string{".",sitePackages},pathSeparator)
		if utils.FolderExists(sitePackages) == false {

			utils.RunCommand("pip", []string{"install", "-r", "requirements.txt", "--target", sitePackages})
		}
	case "linux", "darwin":
		sitePackages := utils.JoinAndConvertPathToOSFormat(i18nScriptLocation, "site-packages", "linux")
		// sitePackages = strings.Join([]string{".",sitePackages},pathSeparator)
		if utils.FolderExists(sitePackages) == false {
			utils.RunCommand("pip", []string{"install", "-r", "requirements.txt", "--target", sitePackages})
		}

	default:
		fmt.Println("Unknown Operating System:", os)
	}

	utils.RunCommand("python", []string{
		"index.py",
		"-c", langCodes, "--location", i18nLocation, "--source-file", "en.json",
	})
}
