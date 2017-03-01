// import React from 'react';
// import { render } from 'react-dom';
// import * as skate from 'skatejs';

// console.log(skate);

// render(<h1>Hello.</h1>, document.getElementById('root'));


import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const load = () => render((
  <AppContainer>
    <App />
  </AppContainer>
), document.getElementById('root'));

// This is needed for hot-module-replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();