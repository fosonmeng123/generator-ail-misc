const BaseGenerator = require('../BaseGenerator.js');
const chalk = require('chalk');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'devServer.js',
      'src/main.js',
      'src/modules/foo.js',
      'src/styles/style.css',
    ];
    this.dependencies = [
      '@babel/core',
      '@babel/preset-env',
      'babelify',
      'budo',
      'cssify',
    ];
    this.finishMessage = `
${chalk.blueBright('Resources')}
${chalk.white('https://github.com/browserify/browserify/wiki/list-of-transforms ')}
${chalk.white('https://github.com/browserify/browserify/wiki/browserify-tools')}`
  }

  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'confirm',
        message: `
${chalk.blueBright('Template Infomation')}
${chalk.cyan('files (' + this.assets.length + '):')}
  ${this.assets.map((fn) => chalk.yellow(fn)).join('\n  ')}
${chalk.cyan('dependencies (' + this.dependencies.length + '):')}
  ${this.dependencies.map((fn) => chalk.yellow(fn)).join('\n  ')}

${chalk.white('Please confirm whether to proceed or not: (yes/NO)')}`,
      },
    ]);
  }

  exec () {
    if (this.answers.confirm === 'yes') {
      this.copyAssets();
      this.log(this.finishMessage);
    } else {
      this.log(chalk.gray('Operation canceled.'))
    }
  }
};
