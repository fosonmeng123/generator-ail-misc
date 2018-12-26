const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  copyAssets () {
    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig'),
      {}
    );
  }
};
