// 1. for more information:
// https://github.com/browserify/browserify/wiki/list-of-transforms
// https://github.com/browserify/browserify/wiki/browserify-tools
// 2. dependencies
// ├── @babel/core@7.2.2
// ├── @babel/preset-env@7.2.3
// ├── babelify@10.0.0
// ├── budo@11.5.0
// └── cssify@1.0.3
const budo = require('budo');
const babelify = require('babelify');
const cssify = require('cssify');

budo('./src/main.js', {
  live: true,             // setup live reload
  port: 8000,             // use this port
  browserify: {
    transform: [
       [babelify, { "presets": ["@babel/preset-env"] }],
        cssify,
    ],
  }
}).on('connect', function (ev) {
  console.log('Server running on %s', ev.uri)
  console.log('LiveReload running on port %s', ev.livePort)
}).on('update', function (buffer) {
  console.log('bundle - %d bytes', buffer.length)
});
