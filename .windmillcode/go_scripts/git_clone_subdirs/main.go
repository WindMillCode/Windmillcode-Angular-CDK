package main

import (
	"fmt"
	"io/fs"
	"os"
	"strings"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	workspaceRoot, err := os.Getwd()
	settings, err := utils.GetSettingsJSON(workspaceRoot)
	var gitCloneSubDirs utils.GitCloneSubdirsStruct
	if err == nil {
		gitCloneSubDirs = settings.ExtensionPack.GitCloneSubdirs
	}

	// stagingDir := os.TempDir()
	stagingDir := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Provide the staging dir"},
			Default: gitCloneSubDirs.StagingDir,
		},
	)
	if stagingDir == "" {
		stagingDir = os.TempDir()
		fmt.Println("using Temp for staging, this is risky and can end up replacing your files as folders! reach out to assist on how to get this fixed:)")
	}
	cliInfo := utils.ShowMenuModel{
		Prompt:  "deleteStaging Dir on Finish?",
		Choices: []string{"YES", "NO"},
	}
	deleteStagingDir := utils.ShowMenu(cliInfo, nil)
	if stagingDir == "" {
		stagingDir = os.TempDir()
	}
	repoURL := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"provide the repoURL"},
			Default: gitCloneSubDirs.RepoURL,
		},
	)
	subdirStringStruct := utils.TakeVariableArgsStruct{
		Prompt:    "provide all the subdirs you would like to retrieve",
		Default:   gitCloneSubDirs.Subdirs,
		Delimiter: "  ",
	}
	subdirsArgs := utils.TakeVariableArgs(
		subdirStringStruct,
	)
	subdirs := strings.Split(subdirsArgs.InputString, subdirStringStruct.Delimiter)
	destDir := utils.GetInputFromStdin(
		utils.GetInputFromStdinStruct{
			Prompt:  []string{"Provide the dest directory"},
			Default: gitCloneSubDirs.DestDir,
		},
	)

	stagingDir = utils.JoinAndConvertPathToOSFormat(stagingDir)
	os.RemoveAll(stagingDir)
	os.Mkdir(stagingDir, fs.ModeDir)
	utils.RunCommandInSpecificDirectory("git", []string{"init"}, stagingDir)
	utils.RunCommandInSpecifcDirectoryAndGetOutput("git", []string{"remote", "add", "origin", repoURL}, stagingDir)
	utils.RunCommandInSpecificDirectory("git", []string{"fetch", "origin"}, stagingDir)
	branches := utils.RunCommandInSpecifcDirectoryAndGetOutput("git", []string{"branch", "-r"}, stagingDir)
	newBranches := strings.Split(strings.Join(strings.Split(branches, "origin/"), ""), "\n")
	for i, element := range newBranches {
		newBranches[i] = strings.TrimSpace(element)
	}
	cliInfo = utils.ShowMenuModel{
		Prompt:  "select the branch name",
		Choices: newBranches,
		Other:   true,
	}
	branchName := utils.ShowMenu(cliInfo, nil)
	utils.RunCommandInSpecificDirectory("git", []string{"pull", "origin", branchName}, stagingDir)
	directories, err := utils.GetItemsInFolderRecursive(stagingDir, true)
	if err != nil {
		fmt.Println("error getting directores in staging folder check to see if its missing or some OS Error")
	}
	entriesToRemove := []string{}
	entriesToKeep := []string{}
	for _, entry := range directories {
		absEntryPathList := strings.Split(entry, string(os.PathSeparator))
		for _, subdir := range subdirs {
			absSubdirPath := utils.JoinAndConvertPathToOSFormat(stagingDir, subdir)
			absSubdirPathList := strings.Split(absSubdirPath, string(os.PathSeparator))

			removeEntry := false
			for i, part := range absSubdirPathList {

				if i >= 0 && i < len(absEntryPathList) {

					if absEntryPathList[i] != part {
						entriesToRemove = append(entriesToRemove, entry)
						removeEntry = true
						break
					}
				}
			}
			if removeEntry == false {
				entriesToKeep = append(entriesToKeep, entry)
			}

		}
	}
	for _, removeMe := range entriesToRemove {
		os.RemoveAll(removeMe)
	}
	// for _, keepMe := range entriesToKeep {
	// 	fmt.Println(keepMe)
	// }
	// for _, subdir := range subdirs {
	// 	fmt.Println(subdir)
	// }

	os.RemoveAll(destDir)
	os.Mkdir(destDir, fs.ModeDir)

	entriesToKeep = utils.Reverse(entriesToKeep)
	for _, src := range entriesToKeep {
		suffix := ""
		for _, subdir := range subdirs {
			prefix := utils.JoinAndConvertPathToOSFormat(stagingDir, subdir)
			suffix = utils.HasPrefixInArray(src, []string{prefix}, true)
			if suffix != "" {
				break
			}
		}

		if suffix != "" {
			dest := utils.JoinAndConvertPathToOSFormat(destDir, suffix)
			entryType, _ := utils.IsFileOrFolder(src)
			// fmt.Println(entryType)
			// fmt.Println(dest)
			// fmt.Println(src)
			if entryType == "dir" {
				utils.CopyDir(src, dest)
			} else {
				utils.CopyFile(src, dest)
			}
		}

	}

	if deleteStagingDir == "YES" {
		os.RemoveAll(stagingDir)
	} else {
		fmt.Println(stagingDir)
	}

}
