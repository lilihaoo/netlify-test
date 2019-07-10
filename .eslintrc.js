module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    "prettier",
    "prettier/vue"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'no-console': 'off',
    'max-len': [
      'error',
      {
        comments: 300,
        ignoreStrings: true,
        ignoreUrls: true,
        code: 100,
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};
