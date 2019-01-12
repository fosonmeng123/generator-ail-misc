const BaseGenerator = require('../BaseGenerator.js');
const chalk = require('chalk');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'tsconfig.base.json',
      'tsconfig.json',
      'index.html',
      'src/main.ts',
      'src/global.d.ts',
      'src/modules/Student.ts',
      'src/modules/greeter/index.js',
      'src/modules/greeter/index.d.ts',
    ];
    this.dependencies = [
      '@types/lodash',
      'lodash',
      'typescript',
    ];
    this.finishMessage = `
${chalk.blueBright('NPM setups')}
${chalk.magenta('watch:')} ${chalk.white('npx tsc -w -p tsconfig.json')}
${chalk.magenta('build:')} ${chalk.white('Maybe use "')}${chalk.yellow('gulp/webpack')}${chalk.white('"?')}
${chalk.white(`More setups refer to:
 https://www.typescriptlang.org/docs/home.html
 http://json.schemastore.org/tsconfig`)}`;
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
      this.finishing();
    } else {
      this.log(chalk.gray('Operation canceled.'))
    }
  }
};
