const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'devServer.js'
    ];
  }
  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'confirm',
        name: 'installDepsGlobal',
        message: 'Install "browser-sync" to global?',
      },
    ]);
  }

  exec () {
    this.copyAssets();
  }

  finishing () {
    if (this.answers.installDepsGlobal) {
      this.spawnCommand('npm', ['link', 'browser-sync']);
    }
  }
};
