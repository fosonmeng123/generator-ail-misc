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
      {
        name: 'vue',
        description: 'requirejs',
      },
      'webpack',
      {
        name: 'typescript',
        description: 'system 0.21',
      },
      'modernizr',
    ];
  }

  list () {
    this.log(`${chalk.blueBright('Generators')}
  ${this.generators.map((n) => {
    if (typeof n === 'object') {
      return chalk.yellow('ail-misc:' + n.name) +
        chalk.white('(' + n.description + ')')
    } else {
      return chalk.yellow('ail-misc:' + n);
    }
  }).join('\n  ')}`);
  }
};
