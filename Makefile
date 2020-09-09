include .env

fetch_keystore:
	rm -rf ./mastdt.jks && expo fetch:android:keystore

compile_source:
	expo export -f --dev --public-url http://localhost:8000

generate_aab: fetch_keystore compile_source
	EXPO_ANDROID_KEYSTORE_PASSWORD=${EXPO_ANDROID_KEYSTORE_PASSWORD} \
	EXPO_ANDROID_KEY_PASSWORD=${EXPO_ANDROID_KEY_PASSWORD} \
	EXPO_USERNAME=${EXPO_USERNAME} \
	EXPO_PASSWORD=${EXPO_PASSWORD} \
	turtle build:android \
		--keystore-path mastdt.jks \
		--keystore-alias ${EXPO_ANDROID_KEYSTORE_ALIAS}