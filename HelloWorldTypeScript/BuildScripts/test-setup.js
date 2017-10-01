//Transpile w/ babel before tests run.
require('babel-register')();

//Disable webpack-only things
require.extensions['.css'] = function(){};