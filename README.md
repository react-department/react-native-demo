# Welcome to the React Native Demo mobile app

## Install requirements
Actual project versions:
- node version is 16.19.0
- cocoapods version is 1.12.1

Install react-native packages

`npm install`

Run iOS packages

`cd ios && pod install`

## Run App Locally
Open terminal and run

`npm run start`

After success metro running press `I` for build app on iOS emulator
and `A` for build app on Android simulator.

(As alternative you can run app from Xcode and Android Studio)

## Read before coding
### Protected constants
Under `src/constants` you can see `protectedConstants.ts` file. This file contains
values which are different for each working environment.
It depends on working branch (develop/DEV, staging/STAGING, master/PROD).

#### Be careful to make changes in this file.

## Release by CodePush
As an option, we can make a release by CodePush. Take attention, that CodePush
can't update a native code. It can update only JS code.
So if you want to update native code you shouldmake the release by
App Store or Google Play.

To make a CodePush follow next steps:
- checkout to target branch
  (if you want to make a release in stores it's a `master` by default)
- make sure that you don't have any (uncommitted, committed or pushed) changes,
  which are not expected to be released by CodePush
- run one of the `codepush-release...` scripts from package.json in your terminal
  to release CodePush update
    - by default, it will be an optional update, for make it mandatory you should
      add `-m` flag in the end of your script
    - after successful build and release, you should immediately see a new
      version of the app in the `CodePush` section of the App Center
