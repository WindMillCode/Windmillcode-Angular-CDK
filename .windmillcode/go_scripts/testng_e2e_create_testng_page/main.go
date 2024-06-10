package main

import (
	"fmt"
	"os"
	"strings"

	"main/shared"

	"github.com/iancoleman/strcase"
	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	utils.CDToTestNGApp()
	testNGApp, err := os.Getwd()
	if err != nil {
		return
	}
	pageFolder := utils.JoinAndConvertPathToOSFormat(testNGApp, "src", "main", "java", "pages")
	testFolder := utils.JoinAndConvertPathToOSFormat(testNGApp, "src", "test", "java", "e2e")
	pageName := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt: []string{"The name of the page on the website type in snake case "},
			ErrMsg: "You must provide a page name",
		},
	)
	utils.CDToLocation(pageFolder)
	myPrefix := strcase.ToCamel(pageName)
	myDir := strings.ToLower(myPrefix)
	err = os.Mkdir(myDir, 0755)
	if err != nil {
		fmt.Printf("Error: ", err.Error())
	}
	myAct := utils.JoinAndConvertPathToOSFormat(pageFolder, myDir, myPrefix+"ActController.java")
	myPage := utils.JoinAndConvertPathToOSFormat(pageFolder, myDir, myPrefix+"Page.java")
	myVerify := utils.JoinAndConvertPathToOSFormat(pageFolder, myDir, myPrefix+"VerifyController.java")
	utils.CopyFile(utils.JoinAndConvertPathToOSFormat(".", "template", "TemplateActController.java"), myAct)
	utils.CopyFile(utils.JoinAndConvertPathToOSFormat(".", "template", "TemplatePage.java"), myPage)
	utils.CopyFile(utils.JoinAndConvertPathToOSFormat(".", "template", "TemplateVerifyController.java"), myVerify)

	utils.CDToLocation(testFolder)
	myTest := utils.JoinAndConvertPathToOSFormat(testFolder, myPrefix+"Test.java")
	utils.CopyFile(utils.JoinAndConvertPathToOSFormat(".", "TemplateTest.java"), myTest)
	for _, v := range []string{myAct, myPage, myVerify, myTest} {

		fileString, err := utils.ReadFile(v)
		if err != nil {
			return
		}
		fileString = strings.ReplaceAll(fileString, "Template", myPrefix)
		fileString = strings.ReplaceAll(fileString, "template", myDir)
		utils.OverwriteFile(v, fileString)
	}
}
