'use strict';

var merge = require('deepmerge');

module.exports = neutrino => {
  // Remove minify plugin
  neutrino.config.plugins.delete('minify');

  neutrino.config.module
    .rule('compile')
      .loader('babel', ({ options }) => {
        console.log(options)
        // options.ignore = false
        // options.only = ['./src/**', './node_modules/skatejs/src/**']
        // Solve problem with HTMLElements: https://github.com/babel/babel/issues/4480
        // Must go first according to: https://github.com/github/babel-plugin-transform-custom-element-classes
        // options.plugins.unshift(require.resolve('babel-plugin-transform-custom-element-classes'))
        return { options };
      });

  // Use babel configuration in package.json 
  // neutrino.config.module
  //   .rule('compile')
  //     .loader('babel', props => merge(props, { options: require('./package.json').babel }))

};

