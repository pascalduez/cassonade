import { describe, it } from 'node:test';
import { runSass } from 'sass-true';
import glob from 'fast-glob';

let testMatch = 'src/**/*.spec.scss';

describe('[Sass] Cassonade', () => {
  glob.globSync(testMatch).forEach(file => runSass({ describe, it }, file));
});
