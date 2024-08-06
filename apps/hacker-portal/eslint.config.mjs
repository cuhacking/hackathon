import baseConfig from '../../eslint.config.mjs';

export default [
  {
    ...baseConfig,
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@next/next/no-html-link-for-pages': [
        'error',
        'apps/hacker-portal/pages',
      ],
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    env: { jest: true },
    rules: {},
  },
  { ignores: ['.next/**/*'] },
];
