import antfu from '@antfu/eslint-config';
import nxEslintPlugin from '@nx/eslint-plugin';

export default antfu(
  {
    formatters: true,
    react: true,
  },
  // NX plugin with module boundary rules
  {
    plugins: { '@nx': nxEslintPlugin },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
)
