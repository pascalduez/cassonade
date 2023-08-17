const path = require('node:path');
const sassTrue = require('sass-true');
const glob = require('glob');

let testPath = 'src/**/*.spec.scss';

describe('Sass', () => {
  glob
    .sync(path.resolve(process.cwd(), testPath))
    // Run on each file, passing describe() and it() functions from Jest.
    .forEach(file => sassTrue.runSass({ describe, it }, file));
});
