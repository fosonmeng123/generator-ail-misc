const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.assets = [];
    this.answers = {};
    this.finishMessage = '';
  }

  copyAssets() {
    for (let file of this.assets) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        this.answers
      );
    }
  }

  finishing() {
    this.log(`
Finishing---------------------------------------${this.finishMessage}
------------------------------------------------
`)
  }
};
