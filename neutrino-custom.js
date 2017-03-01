'use strict';

module.exports = neutrino => {
  // Remove minify plugin
  neutrino.config.plugins.delete('minify');

  neutrino.config.module
    .rule('compile')
      .loader('babel', ({ options }) => {
        // Solve problem with HTMLElements: https://github.com/babel/babel/issues/4480
        // Must go first according to: https://github.com/github/babel-plugin-transform-custom-element-classes
        // options.plugins.unshift(require.resolve('babel-plugin-transform-custom-element-classes'))
        return { options };
      });
};

