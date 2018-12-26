const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'webpack.config.js',
      'src/main.js',
      'src/modules/foo.js',
      'src/styles/style.css',
    ];
  }

  exec () {
    this.copyAssets();
  }
};
