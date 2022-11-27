module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@appTypes': './src/appTypes',
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@hoc': './src/hoc',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators',
          '@recoils': './src/recoils',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
    'nativewind/babel',
  ],
};
