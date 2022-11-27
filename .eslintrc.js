module.exports = {
  root: true,
  // plugins: ['sonarjs', 'testing-library'],
  extends: '@react-native-community',
  rules: {
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'no-useless-escape': 'off',
    // 'object-shorthand': 'error',
    // 'react/jsx-boolean-value': 'error',
    // 'sonarjs/no-duplicate-string': 'warn',
    // 'sonarjs/cognitive-complexity': 'warn',
    'no-console': ['error', {allow: ['warn', 'error', 'info', 'trace']}],
    // 'testing-library/await-async-query': 'error',
    // 'testing-library/no-await-sync-query': 'error',
    // 'testing-library/no-debugging-utils': 'warn',
    // 'testing-library/no-dom-import': 'off',
  },
};
