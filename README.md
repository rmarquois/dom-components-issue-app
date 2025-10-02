# DOM Components Issue App

Two instances of same DOM components causes the following error: 
`Error: Cannot invoke native actions outside of a webview`

## Install and debug

1) Download `test.aab` from `output` directory
2) Install aab using [bundletool](https://developer.android.com/tools/bundletool?hl=fr) 
    ```shell
    java -jar .\bundletool-all-1.18.2.jar build-apks --bundle=test.aab --output=my_app.apks
    java -jar .\bundletool-all-1.18.2.jar install-apks --apks=my_app.apks
    ```
3) Start webview debugging using this [guide](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Debugging.md#android--chrome)
4) Open "Settings" tab in test app and inspect it (there are two webviews to inspect, choose the one with error). You will see error above.

## Why this error?

Error is thrown [here](https://github.com/expo/expo/blob/main/packages/expo/src/dom/marshal.tsx#L37).
It's because the value of `IS_DOM` is `false`.
