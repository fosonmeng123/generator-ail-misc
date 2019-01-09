const BaseGenerator = require('../BaseGenerator.js');
const chalk = require('chalk');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'public/index.html',
    ];
    this.finishMessage = `
${chalk.yellow('Start a local server to view the page.')}`
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
      const name = await this.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Your project title:',
        },
      ]);
      Object.assign(this.answers, name);
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
};
