package main

import (
	"context"
	"fmt"
	"main/shared"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/windmillcode/go_cli_scripts/v5/utils"
	"google.golang.org/api/androidpublisher/v3"
	"google.golang.org/api/googleapi"
	"google.golang.org/api/option"
)

func main() {

	shared.CDToWorkspaceRoot()
	shared.SetJavaEnvironment()
	workspaceRoot, err := os.Getwd()
	if err != nil {
		return
	}
	settings, err := utils.GetSettingsJSON(workspaceRoot)
	if err != nil {
		return
	}
	utils.CDToFlutterApp()
	flutterRoot, err := os.Getwd()
	flutterLibLocation := utils.JoinAndConvertPathToOSFormat(flutterRoot,"lib")
	flutterTestLocation := utils.JoinAndConvertPathToOSFormat(flutterRoot,"test")
	if err != nil {

		return
	}

	cliInfo := utils.ShowMenuModel{
		Prompt: "Remove unused imports (this may take a while)",
		Choices:[]string{"YES","NO"},
	}
	removeUnusedImports := utils.ShowMenu(cliInfo,nil)
	cliInfo = utils.ShowMenuModel{
		Prompt: "Open result location",
		Choices:[]string{"TRUE","FALSE"},
		Default: "TRUE",
	}
	openResultLocation := utils.ShowMenu(cliInfo,nil)
	cliInfo = utils.ShowMenuModel{
		Prompt: "run flutter clean",
		Choices:[]string{"TRUE","FALSE"},
		Default: "FALSE",
	}
	runFlutterClean := utils.ShowMenu(cliInfo,nil)
	cliInfo = utils.ShowMenuModel{
		Prompt: "run ./gradlew --refresh-dependencies",
		Choices:[]string{"TRUE","FALSE"},
		Default: "FALSE",

	}
	runRefreshDeps := utils.ShowMenu(cliInfo,nil)
	cliInfo = utils.ShowMenuModel{
		Prompt: "Deploy to play store",
		Choices:[]string{"TRUE","FALSE"},
		Default: "TRUE",
	}
	deployToPlayStore := utils.ShowMenu(cliInfo,nil)


	var keyFile, packageName, trackName,publishTarget string

	if deployToPlayStore == "TRUE"{
		keyFile = utils.GetInputFromStdin(
			utils.GetInputFromStdinStruct{
				Prompt: []string{"Provide the path to the key file"},
				Default: settings.ExtensionPack.FlutterMobileBuild.PlayStoreServiceAccountKey,
			},
		)
		keyFile = utils.ConvertPathToOSFormat(keyFile)
		packageName = utils.GetInputFromStdin(
			utils.GetInputFromStdinStruct{
				Prompt: []string{"Provide the name of the package"},
				Default: settings.ExtensionPack.FlutterMobileBuild.PackageName,
			},
		)
		cliInfo := utils.ShowMenuModel{
			Prompt: "Select a publish target",
			Choices:[]string{"Production","Open Testing","Closed Testing","Internal Testing","Pre-registration"},
			Default: settings.ExtensionPack.FlutterMobileBuild.PublishTarget,
		}
		publishTarget = utils.ShowMenu(cliInfo,nil)
		if publishTarget =="Production"{
			trackName = ""
		} else{
			trackName = utils.GetInputFromStdin(
				utils.GetInputFromStdinStruct{
					Prompt: []string{"Provide the track name"},
					Default: settings.ExtensionPack.FlutterMobileBuild.TrackName,
				},
			)
		}

	}

	args := settings.ExtensionPack.FlutterMobileBuild.Args

	vmAdditionalArgs := settings.ExtensionPack.FlutterMobileBuild.VmAdditionalArgs

	toolArgs := []string{}
	for _, val := range settings.ExtensionPack.FlutterMobileBuild.ToolArgs {
		toolArgs = append(toolArgs, "--dart-define", val)
	}

	var wg sync.WaitGroup
	if removeUnusedImports == "YES" {
		flutterLibLocation = strings.ReplaceAll(flutterLibLocation, "\\", "\\\\")
		flutterTestLocation = strings.ReplaceAll(flutterTestLocation, "\\", "\\\\")
    wg.Add(2)
    go func() {
        defer wg.Done()
        utils.RunCommand("dart", []string{"run", "unused_import_remover", flutterLibLocation})
    }()
    go func() {
        defer wg.Done()
        utils.RunCommand("dart", []string{"run", "unused_import_remover", flutterTestLocation})
    }()
	}

	wg.Wait()

	if runFlutterClean == "TRUE" {
		utils.RunCommand("flutter",[]string{"clean"})
	}

	if runRefreshDeps == "TRUE" {
		options := utils.CommandOptions{
			Command: utils.JoinAndConvertPathToOSFormat(flutterRoot,"android","gradlew"),
			Args: []string{"--refresh-dependencies"},
			TargetDir: utils.JoinAndConvertPathToOSFormat(flutterRoot,"android"),
			PrintOutput:true,

		}
		utils.RunCommandWithOptions(options)
	}
	utils.RunCommand("flutter", append(append(append([]string{"build"}, args...), vmAdditionalArgs...), toolArgs...))

	flavorValue, _ := utils.FindRelativeToTarget(args, "--flavor", 1)
	flavorString, err := utils.CreateStringObject(fmt.Sprintf("%sRelease",flavorValue), "")
	if err != nil {
		fmt.Println(err)
		return
	}

	if utils.ArrayContainsAny(args, []string{"appbundle"}) {
		fmt.Println(flavorString.CamelCase(false, ""))
		releaseLocation := utils.JoinAndConvertPathToOSFormat(flutterRoot, fmt.Sprintf("build\\app\\outputs\\bundle\\%s",flavorString.CamelCase(false, "")))


		debugSymbolsFolder := utils.JoinAndConvertPathToOSFormat(flutterRoot, fmt.Sprintf("build\\app\\intermediates\\merged_native_libs\\%s\\out\\lib",flavorString.CamelCase(false, "")))
		zipFileName := "lib.zip"
		if err := zipFolder(debugSymbolsFolder, zipFileName); err != nil {
			fmt.Println("Error zipping folder:", err)
			return
		}
		srcPath := utils.JoinAndConvertPathToOSFormat(debugSymbolsFolder, zipFileName)
		destPath := utils.JoinAndConvertPathToOSFormat(releaseLocation, zipFileName)
		if err := os.Rename(srcPath, destPath); err != nil {
			fmt.Println("Error moving zip file:", err)
			return
		}
		var wg sync.WaitGroup

		if deployToPlayStore == "TRUE"{
			wg.Add(1)
			go func() {
				defer wg.Done()
				aabFile := utils.JoinAndConvertPathToOSFormat(releaseLocation,fmt.Sprintf("app-%s.aab",flavorString.KebabCase(false,"")))
				deployAppbundle(keyFile, packageName, publishTarget, trackName, aabFile)
			}()

		}

		if openResultLocation == "TRUE"{
			wg.Add(1)
			go func() {
				defer wg.Done()
				utils.CDToLocation(releaseLocation)
				utils.RunCommand("code", []string{"."})
			}()

		}
		wg.Wait()



	} else if  utils.ArrayContainsAny(args, []string{"apk"}) {
		var wg sync.WaitGroup
		releaseLocation := utils.JoinAndConvertPathToOSFormat(flutterRoot, "build\\app\\outputs\\flutter-apk")
		if deployToPlayStore == "TRUE"{
			wg.Add(1)
			go func() {
				defer wg.Done()
				apkFile := utils.JoinAndConvertPathToOSFormat(releaseLocation,fmt.Sprintf("app-%s.apk",flavorString.KebabCase(false,"")))
				deployAPK(keyFile, packageName, publishTarget, trackName, apkFile)
			}()

		}

		if openResultLocation == "TRUE"{
			wg.Add(1)
			go func() {
				defer wg.Done()
				utils.RunCommand("code", []string{releaseLocation})
			}()

		}
		wg.Wait()

	}

}

func zipFolder(srcFolder, destZip string) error {
	// Ensure the destination zip file has the .zip extension
	if filepath.Ext(destZip) != ".zip" {
		destZip += ".zip"
	}

	// Construct the command arguments for 7z
	args := []string{"a", destZip, srcFolder + "\\*"} // a for add, include all files from srcFolder

	// Run the 7z command
	_, err := utils.RunCommandWithOptions(utils.CommandOptions{
		Command:   "7z",
		Args:      args,
		TargetDir: srcFolder,
	})

	if err != nil {
		fmt.Printf("Failed to zip folder: %s\n", err)
		return err
	}

	fmt.Println("Folder zipped successfully:", destZip)
	return nil
}



func deployAppbundle( keyFile, packageName, publishTarget, trackName, aabFile string) {
	ctx := context.Background()
	service, err := androidpublisher.NewService(ctx, option.WithCredentialsFile(keyFile))
	if err != nil {
			panic(err)
	}

	bundle, err := os.Open(aabFile)
	if err != nil {
			panic(err)
	}
	defer bundle.Close()

	edit, err := service.Edits.Insert(packageName, nil).Do()
	if err != nil {
			panic(err)
	}

	call := service.Edits.Bundles.Upload(packageName, edit.Id)
	call.Media(bundle, googleapi.ContentType("application/octet-stream"))
	result, err := call.Do()
	if err != nil {
			panic(err)
	}

	track := &androidpublisher.Track{
			Track: trackName,
			Releases: []*androidpublisher.TrackRelease{
					{
							VersionCodes: []int64{result.VersionCode},
							Status:       "completed",  // All releases are immediately complete
					},
			},
	}

	_, err = service.Edits.Tracks.Update(packageName, edit.Id, trackName, track).Do()
	if err != nil {
			panic(err)
	}

	commitCall := service.Edits.Commit(packageName, edit.Id)
	_, err = commitCall.Do()
	if err != nil {
			panic(err)
	}

	println("Uploaded AAB to", publishTarget, "track:", trackName, "with version code:", result.VersionCode)
}


func deployAPK( keyFile, packageName, publishTarget, trackName, apkFile string) {
	ctx := context.Background()
	service, err := androidpublisher.NewService(ctx, option.WithCredentialsFile(keyFile))
	if err != nil {
			panic(err)
	}

	// Open the APK file instead of AAB
	bundle, err := os.Open(apkFile)
	if err != nil {
			panic(err)
	}
	defer bundle.Close()

	// Create a new edit session
	edit, err := service.Edits.Insert(packageName, nil).Do()
	if err != nil {
			panic(err)
	}

	// Upload the APK file using the APKs.Upload method
	call := service.Edits.Apks.Upload(packageName, edit.Id)
	call.Media(bundle, googleapi.ContentType("application/vnd.android.package-archive"))
	result, err := call.Do()
	if err != nil {
			panic(err)
	}

	// Set the track using the APK version code
	track := &androidpublisher.Track{
			Track: trackName,
			Releases: []*androidpublisher.TrackRelease{
					{
							VersionCodes: []int64{result.VersionCode},
							Status:       "completed",
					},
			},
	}

	// Update the track with the new APK release
	_, err = service.Edits.Tracks.Update(packageName, edit.Id, trackName, track).Do()
	if err != nil {
			panic(err)
	}

	// Commit the changes to apply the release
	commitCall := service.Edits.Commit(packageName, edit.Id)
	_, err = commitCall.Do()
	if err != nil {
			panic(err)
	}

	println("Uploaded APK to", publishTarget, "track:", trackName, "with version code:", result.VersionCode)
}
