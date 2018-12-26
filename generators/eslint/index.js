const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      '.eslintrc.json',
    ];
  }

  exec () {
    this.copyAssets();
  }
};
