const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('ail-vue:app', function () {
  it('generates a project with require.js', function () {
    return helpers.run(path.join(__dirname, '../generators/vue-requirejs'))
      .withPrompts({
        title: 'A Test Project',
        installDepsGlobal: true,
      })
      .then(() => {
        assert.file([
          'public/index.html',
          'devServer.js',
          '.jshintrc',
          // 'node_modules/browser-sync',
        ]);
      });
  });
});
