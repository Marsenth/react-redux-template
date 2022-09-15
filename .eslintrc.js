module.exports = {
  parser: 'babel-eslint',
  env: {
    mocha: true,
    browser: true,
    es6: true,
    jquery: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': [
      'warn',
      'never'
    ],
    indent: [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    /* Advanced Rules */
    'import/no-cycle': ['error', { maxDepth: 10 }],
    'block-scoped-var': 'error',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-mixed-operators': 'off',
    radix: 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': ['error', { forbid: [] }],
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};