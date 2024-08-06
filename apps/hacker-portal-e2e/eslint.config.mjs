import baseConfig from '../../eslint.config.mjs';
// import playwright from 'eslint-plugin-playwright';

export default [
  {
    ...baseConfig,
  },
  // {
  //   ...playwright.configs['flat/recommended'],
  // },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['src/**/*.{ts,js,tsx,jsx}'],
    rules: {},
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    env: { jest: true },
    rules: {},
  },
  { ignores: ['.next/**/*'] },
];
