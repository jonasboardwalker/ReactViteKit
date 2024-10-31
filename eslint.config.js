import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tailwindcss from 'eslint-plugin-tailwindcss'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import eslintImport from 'eslint-plugin-import'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss,
      'simple-import-sort': simpleImportSort,
      prettier,
      import: eslintImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Core ESLint rules
      'no-console': 'warn',
      eqeqeq: ['error', 'smart'],
      curly: ['error', 'all'],
      'no-else-return': 'error',
      'no-undef': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'], // Warn if semicolons are used

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // React rules
      'react/jsx-key': 'warn',
      'react/self-closing-comp': 'off', // Allow non-self-closing tags
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Tailwind rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',

      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'import/no-default-export': 'error',

      // Prettier integration
      'prettier/prettier': [
        'warn',
        { singleQuote: true, trailingComma: 'es5', tabWidth: 2, semi: false },
      ],
    },
  }
)
