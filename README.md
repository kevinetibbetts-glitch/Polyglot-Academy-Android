# Polyglot Academy — Android

This repository builds the Polyglot Academy 5.4 Android app into an installable debug APK, using GitHub Actions.

## Android APK build

1. Upload the **original** `Polyglot_Academy_Android_5_4_Build_Ready.zip` to the repository root (GitHub **Add file → Upload files → Commit changes**).
2. The **Build Polyglot Academy APK** workflow starts automatically. You can also run it from the **Actions** tab.
3. When the workflow finishes successfully, open the run and download the artifact named **PolyglotAcademy-Android-APK**.
4. Extract the downloaded artifact ZIP to get **PolyglotAcademy.apk**, the installable application for an Android phone (Android 8.0+).

The ZIP stores complete offline lesson data (Cebuano, Korean, Mandarin, Japanese) and the Android Java code. The source archive is extracted by the workflow before building; nothing needs to be compiled on your Windows computer.

## Important verification status

The source passed simulated interface and Java syntax checks; as of the initial setup it has **not** passed live Android hardware microphone and speaker tests. Not all lessons include native human speech. A successful APK build confirms compilation, not native pronunciation coverage or full device behavior.

Never store API keys, passwords, or personal recordings in this public repository.
