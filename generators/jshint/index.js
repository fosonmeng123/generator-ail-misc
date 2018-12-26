const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      '.jshintrc'
    ];
  }

  exec () {
    this.copyAssets();
  }
};
