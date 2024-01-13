module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'study-type-checker',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    indent: 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-void': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'aria-label',
          'data-testid',
          'to',
          'alt',
          'target',
          'direction',
          'justify',
          'align',
          'gap',
          'max',
          'role',
          'as',
          'border',
        ],
      },
    ], // Выкидывает ошибку, если мы какую либо стрингу не заворачиваем в перевод. markupOnly - только для tsx/jsx
    'max-len': ['error', { ignoreComments: true, code: 130 }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'study-type-checker/path-checker': ['error', { alias: '@' }],
    'study-type-checker/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'study-type-checker/public-api-imports': [
      'error',
      {
        alias: '@',
        testFiles: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 'off', 'max-len': 'off' }, // Отключаем это правило для тестов и сторибука
    },
  ],
};
