package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"sync"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {
	shared.CDToWorkspaceRoot()
	utils.CDToAngularApp()
	absAngularAppPath, err := os.Getwd()
	if err != nil {
		fmt.Printf("Error getting the current working directory: %s\n", err)
		return
	}

	karmaConfigPath, err := findKarmaConfigFile(absAngularAppPath)
	if err != nil {
		fmt.Printf("Unable to find finding karma.conf.js: %s\n", err)

	} else {
		fmt.Printf("Found karma.conf.js at: %s\n", karmaConfigPath)
	}

	subDir := ""
	if karmaConfigPath != "" {
		subDir, err = extractCoverageDir(karmaConfigPath)
		if err != nil {
			fmt.Printf("Unable to extract the coverage directory: %s\n", err)
			fmt.Printf("Running tests: you may have to manually open the coverage report\n\n")

		}
	}

	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		utils.RunCommand("npm", []string{"run", "test"})
	}()

	if subDir != "" {
		wg.Add(1)
		go func() {
			defer wg.Done()
			port := 8003
			subDirPath := utils.ConvertPathToOSFormat(subDir)
			utils.CDToLocation(subDirPath, true)

			fmt.Printf("Coverage info accessible at http://localhost:%d\n", port)
			http.Handle("/", http.FileServer(http.Dir(".")))
			if err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil); err != nil {
				fmt.Println("Error starting the server:", err)
			}
		}()
	}

	wg.Wait()
}

func findKarmaConfigFile(rootPath string) (string, error) {
	var karmaConfigPath string
	err := utils.TraverseDirectory(utils.TraverseDirectoryParams{
		RootDir: rootPath,
		Predicate: func(path string, info os.FileInfo) {
			if filepath.Base(path) == "karma.conf.js" {
				karmaConfigPath = path
			}
		},
		Filter: func(path string, info os.FileInfo) bool {
			return !strings.Contains(path, "node_modules")
		},
	})

	if err != nil {
		return "", err
	}

	if karmaConfigPath == "" {
		return "", fmt.Errorf("karma.conf.js not found in %s", rootPath)
	}

	return karmaConfigPath, nil
}

func extractCoverageDir(karmaConfigPath string) (string, error) {
	content, err := utils.ReadFile(karmaConfigPath)
	if err != nil {
		return "", err
	}

	// First, try to find the specific coverageReporter.dir path
	specificPattern := regexp.MustCompile(`coverageReporter:\s*\{\s*dir:\s*require\('path'\)\.join\(__dirname,\s*'([^']+)'\s*\)`)
	matches := specificPattern.FindStringSubmatch(content)

	if len(matches) > 1 {
		return matches[1], nil
	}

	// If not found, try to find any generic string prefixed with "coverage/"
	genericPattern := regexp.MustCompile(`'coverage/[^']*'`)
	genericMatches := genericPattern.FindStringSubmatch(content)

	if len(genericMatches) > 0 {
		// Remove the single quotes from the match
		return strings.Trim(genericMatches[0], "'"), nil
	}

	return "", fmt.Errorf("No coverage directory found in %s", karmaConfigPath)
}
