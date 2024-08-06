const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
