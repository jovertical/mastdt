import 'dotenv/config'

export default {
  name: 'Mastdt',
  slug: 'mastdt',
  platforms: ['android'],
  version: '1.0.0',
  orientation: 'landscape',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  android: {
    package: 'com.mastdt.mastdt',
    versionCode: 2,
  },
  extra: {},
}
