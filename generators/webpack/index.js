const BaseGenerator = require('../BaseGenerator.js');
const chalk = require('chalk');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'webpack.config.js',
      'src/main.js',
      'src/modules/foo.js',
      'src/styles/style.css',
    ];
    this.dependencies = [
      'css-loader',
      'style-loader',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
    ];
    this.finishMessage = `
${chalk.blueBright('NPM setups')}
${chalk.magenta('start:')} ${chalk.white('webpack-dev-server')}
${chalk.magenta('build:')} ${chalk.white('webpack')}
${chalk.white('More options refer to: https://webpack.js.org/guides/')}`;
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
      this.finishing();
    } else {
      this.log(chalk.gray('Operation canceled.'))
    }
  }
};
