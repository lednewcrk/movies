module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@api': './src/services/api',
          '@values': './src/values',
          '@context': './src/context',
          '@hooks': './src/hooks',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
