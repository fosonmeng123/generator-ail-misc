const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);
  }

  list () {
    this.log(`Generators:\n    ${[
      'ail-vue:browser-sync',
      'ail-vue:editorconfig',
      'ail-vue:jshint',
      'ail-vue:rollup',
      'ail-vue:vue-requirejs',
      'ail-vue:rollup',
      'ail-vue:webpack',
    ].join('\n    ')}`);
  }
};
