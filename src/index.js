import './native-shim';
import React from 'react';
import { render } from 'react-dom';
import './components/SkateHello';

console.log(skate);

render(<div>
  <h1>Hello.</h1>
  <x-hello name="Joe" />
</div>, document.getElementById('root'));
