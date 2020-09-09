include .env

copy_credential_files:
	rm -rf /tmp/{mastdt_keystore.pwd,mastdt_key.pwd}
	echo ${EXPO_ANDROID_KEYSTORE_PASSWORD} > /tmp/mastdt_keystore.pwd
	echo ${EXPO_ANDROID_KEY_PASSWORD} > /tmp/mastdt_key.pwd

fetch_keystore:
	rm -rf ./mastdt.jks && expo fetch:android:keystore

compile_source:
	expo export -f --dev --public-url http://localhost:8000

aab: fetch_keystore compile_source
	EXPO_ANDROID_KEYSTORE_PASSWORD=${EXPO_ANDROID_KEYSTORE_PASSWORD} \
	EXPO_ANDROID_KEY_PASSWORD=${EXPO_ANDROID_KEY_PASSWORD} \
	EXPO_USERNAME=${EXPO_USERNAME} \
	EXPO_PASSWORD=${EXPO_PASSWORD} \
	turtle build:android \
		--keystore-path mastdt.jks \
		--keystore-alias ${EXPO_ANDROID_KEYSTORE_ALIAS}

apk: copy_credential_files
	bundletool build-apks \
		--bundle=${bundle} \
		--output=${output} \
		--ks=mastdt.jks \
		--ks-pass=file:/tmp/mastdt_keystore.pwd \
		--ks-key-alias=${EXPO_ANDROID_KEYSTORE_ALIAS} \
		--key-pass=file:/tmp/mastdt_key.pwd