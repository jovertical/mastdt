module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
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
            '@screens': './screens'
          }
        }
      ]
    ]
  };
};
