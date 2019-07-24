console.log(__filename)
//D:\study\text2019\12-node.js\03-global\001-global.js


console.log(__dirname)
//D:\study\text2019\12-node.js\03-global\001-global.js


console.log(module)
/*
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'D:\\study\\text2019\\12-node.js\\03-global\\001-global.js',
  loaded: false,
  children: [],
  paths:
   [ 'D:\\study\\text2019\\12-node.js\\03-global\\node_modules',
     'D:\\study\\text2019\\12-node.js\\node_modules',
     'D:\\study\\text2019\\node_modules',
     'D:\\study\\node_modules',
     'D:\\node_modules' ] }
*/


console.log(exports)//{}


console.log(require)
/*
{ [Function: require]
  resolve: { [Function: resolve] paths: [Function: paths] },
  main:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'D:\\study\\text2019\\12-node.js\\03-global\\001-global.js',
     loaded: false,
     children: [],
     paths:
      [ 'D:\\study\\text2019\\12-node.js\\03-global\\node_modules',
        'D:\\study\\text2019\\12-node.js\\node_modules',
        'D:\\study\\text2019\\node_modules',
        'D:\\study\\node_modules',
        'D:\\node_modules' ] },
  extensions:
   [Object: null prototype] { '.js': [Function], '.json': [Function], '.node': [Function] },
  cache:
   [Object: null prototype] {
     'D:\\study\\text2019\\12-node.js\\03-global\\001-global.js':
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: 'D:\\study\\text2019\\12-node.js\\03-global\\001-global.js',
        loaded: false,
        children: [],
        paths: [Array] } } }
*/