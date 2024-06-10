package main

import (
	"crypto/tls"
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"sync"

	"main/shared"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
)

func main() {

	shared.CDToWorkspaceRoot()
	workspaceRoot, err := os.Getwd()
	settings, err := utils.GetSettingsJSON(workspaceRoot)
	if err != nil {
		return
	}

	targetExecutable, shouldReturn := downloadDiodeCLI()
	if shouldReturn {
		return
	}

	proxyURLs := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt:  "URLs to forward requests to",
			Default: settings.ExtensionPack.ProxyURLs,
		},
	)

	ports := utils.TakeVariableArgs(
		utils.TakeVariableArgsStruct{
			Prompt:  "The ports to run the proxy on in order respective to proxy URLs",
			Default: "7998",
		},
	)

	var wg sync.WaitGroup
	for index, proxyURL := range proxyURLs.InputArray {
		port := ports.InputArray[index]
		url, err := url.Parse(proxyURL)
		if err != nil {
			log.Fatal("Error parsing URL:", err)
		}
		transport := &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
		}

		proxy := httputil.NewSingleHostReverseProxy(url)
		proxy.Transport = transport
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			proxy.ServeHTTP(w, r)
		})

		fmt.Println("A tunnel takes an application running on localhost and serves as a proxy by giving it a URL and making it public for anyone who knows the url to visit. If you dont want your proxy to be available to the world select NO")
		cliInfo := utils.ShowMenuModel{
			Prompt:  "Do you want to run a diode tunnel.",
			Choices: []string{"YES", "NO"},
			Default: "YES",
		}
		setupDiodeTunnelForProxy := utils.ShowMenu(cliInfo, nil)

		if setupDiodeTunnelForProxy == "YES" {
			wg.Add(1)
			go func() {
				defer wg.Done()
				options := utils.CommandOptions{
					Command: targetExecutable,
					Args:    []string{"publish", "-public", fmt.Sprintf("%s:80", port)},
				}
				utils.RunCommandWithOptions(options)

			}()
		}

		wg.Add(1)
		go func() {
			defer wg.Done()
			log.Println(fmt.Sprintf("HTTP proxy server listening on port %s forwarding all request data to %s", port, proxyURL))
			if err := http.ListenAndServe(fmt.Sprintf(":%s", port), nil); err != nil {
				log.Fatal("ListenAndServe: ", err)
			}

		}()

		wg.Wait()

	}
	wg.Wait()
}

func downloadDiodeCLI() (string, bool) {
	sourceDir, err := utils.GetSourceFilePath()
	if err != nil {
		fmt.Printf("error getting source file directory: %v", err)
	}
	targetExecutable := utils.FindExecutable("diode", sourceDir)
	if targetExecutable == "NOTFOUND" {
		diodeRepoURL := "https://api.github.com/repos/diodechain/diode_go_client"
		latestRelease, err := utils.GetLatestRelease(diodeRepoURL)
		if err != nil {
			fmt.Println("Error:", err)
			return "", true
		}
		diodeUrl, err := utils.GetDownloadURLForCurrentOS(latestRelease)
		if err != nil {
			fmt.Println("Error:", err)
			os.Exit(1)
		}
		fmt.Println("Download URL for the current OS:", diodeUrl)
		arichvePath := utils.ExtractArchive(diodeUrl, true)
		targetExecutable = utils.FindExecutable("diode", arichvePath)
	}
	return targetExecutable, false
}
