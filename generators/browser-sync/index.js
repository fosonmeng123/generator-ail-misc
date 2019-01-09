const BaseGenerator = require('../BaseGenerator.js');
const chalk = require('chalk');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'devServer.js'
    ];
    this.finishMessage = `
${chalk.yellow('Run "node devServer.js to start"')}`;
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

${chalk.white('Please confirm whether to proceed or not: (yes/NO)')}`,
      },
    ]);

    if (this.answers.confirm === 'yes') {
      const installDepsGlobal = await this.prompt([
        {
          type: 'confirm',
          name: 'installDepsGlobal',
          message: 'Install "browser-sync" to global?',
        },
      ]);
      Object.assign(this.answers, installDepsGlobal);
    }
  }

  exec () {
    if (this.answers.confirm === 'yes') {
      this.copyAssets();
      this.log(this.finishMessage);
    } else {
      this.log(chalk.gray('Operation canceled.'))
    }
  }

  finishing () {
    if (this.answers.installDepsGlobal) {
      this.spawnCommand('npm', ['link', 'browser-sync']);
    }
  }
};
