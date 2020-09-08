## 🚀 Local Setup

### Quick start

> **Install the [Expo Client App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)**

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

1. Install Open JDK: `brew install openjdk`
2. Install the CLI tool: `yarn add --global turtle-cli`
3. Setup environment for android: `turtle setup:android --sdk-version 38.0.0` 

### Building the APK

```bash
# First, fetch the android keystore:
rm -rf ./mastdt.jks && expo fetch:android:keystore

# Then, compile the source:
expo export --dev --public-url http://localhost:8000

# Then, build the android app bundle:
node bin/generate-aab

# Finally, build the apk from the android app bundle:
bundletool build-apks --bundle=/path/to/my_app.aab --output=/path/to/my_app.apks
```
