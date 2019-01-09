const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);
    this.generators = [
      'browser-sync',
      'browserify',
      'editorconfig',
      'eslint',
      'jshint',
      'rollup',
      'systemjs2',
      'vue(requirejs)',
      'webpack',
    ];
  }

  list () {
    this.log(`${chalk.blueBright('Generators')}
  ${this.generators.map((n) => chalk.yellow('ail-misc:' + n)).join('\n  ')}`);
  }
};
