## 🚀 Local Setup

It's recommended to install the [Expo Client App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) if you have a physical device.

```bash
# First, install dependencies
yarn install

# Then, run the Metro bundler
yarn start

# Finally, you can scan the QR code using the Expo client app and start building!
```

## Building an APK

To build an apk, we can use a tool called [Turtle CLI](https://github.com/expo/turtle).

### Pre-requisites

1. Install the CLI tool: `yarn add --global turtle-cli`
2. Setup environment for android: `turtle setup:android --sdk-version 38.0.0` 

### Building the APK

```bash
# First, build the android app bundle:
make aab

# Finally, build the apk from the android app bundle:
make apk bundle=/path/to/my_app.aab output=/path/to/my_app.apks
```
