module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // This line applies Prettier rules as ESLint rules.
      'prettier' // This line turns off ESLint rules that might conflict with Prettier.
    ],
    plugins: ['@typescript-eslint', 'import', 'sort-imports-es6-autofix'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            ['index', 'internal', 'sibling', 'parent']
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
  