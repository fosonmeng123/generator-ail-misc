const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'index.html',
      'src/main.js',
    ];
  }

  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Your project title',
      },
    ]);
  }


  exec () {
    this.copyAssets();
  }
};
