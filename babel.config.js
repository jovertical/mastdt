module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/transform-react-jsx-source',
      'babel-plugin-transform-typescript-metadata',
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@contexts': './contexts',
            '@database': './database',
            '@hooks': './hooks',
            '@models': './models',
            '@queries': './queries',
            '@screens': './screens',
            '@utilities': './utilities',
          },
        },
      ],
    ],
  }
}
