'use strict';

module.exports = neutrino => {
  // console.dir(neutrino.config.module)

  // Remove minify plugin
  neutrino.config.plugins.delete('minify');

  neutrino.config.module
    .rule('compile')
      .loader('babel', ({ options }) => {
        // console.dir(options)
        // Solve problem with HTMLElements: https://github.com/babel/babel/issues/4480
        // Must go first according to: https://github.com/github/babel-plugin-transform-custom-element-classes
        // options.plugins.unshift(require.resolve('babel-plugin-transform-custom-element-classes'))
        return { options };
      });
};

