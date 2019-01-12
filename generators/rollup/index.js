const BaseGenerator = require('../BaseGenerator.js');
const chalk = require('chalk');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'rollup.config.js',
      'src/main.js',
    ];
    this.dependencies = [
      'rollup',
      'rollup-plugin-buble',
      'rollup-plugin-commonjs',
      'rollup-plugin-json',
      'rollup-plugin-node-resolve',
      'rollup-pluginutils',
    ];
    this.finishMessage = `
${chalk.blueBright('NPM setups')}
${chalk.magenta('build:')} ${chalk.white('rollup -c')}
${chalk.magenta('watch:')} ${chalk.white('rollup -c -w')}
${chalk.white('Middlewares refer to: https://github.com/rollup/rollup-pluginutils')}`;
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
