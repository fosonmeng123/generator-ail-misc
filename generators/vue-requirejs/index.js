const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);
  }

  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Your project title',
      }, {
        type: 'confirm',
        name: 'installDepsGlobal',
        message: 'Install "browser-sync" to global?',
      },
    ]);
  }

  copyAssets () {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      {title: this.answers.title}
    );
    this.fs.copyTpl(
      this.templatePath('.jshintrc'),
      this.destinationPath('.jshintrc'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('devServer.js'),
      this.destinationPath('devServer.js'),
      {}
    );
  }

  end () {
    if (this.answers.installDepsGlobal) {
      this.spawnCommand('npm', ['link', 'browser-sync']);
    }
  }
};
