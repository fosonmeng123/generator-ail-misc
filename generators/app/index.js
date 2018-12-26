const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);
  }

  list () {
    this.log(`Generators:\n    ${[
      'ail-vue:editorconfig',
      'ail-vue:vue-requirejs',
      'ail-vue:rollup',
    ].join('\n    ')}`);
  }
};
