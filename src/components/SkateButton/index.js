// import '../../native-shim';
import * as skate from 'skatejs';
console.log('skate', skate)

// http://stackoverflow.com/questions/39037489/extending-htmlelement-constructor-fails-when-webpack-was-used
customElements.define(
  'x-hello',
  class extends skate.Component {
    static get props() {
      return { name: { attribute: true } };
    }
    renderCallback() {
      return [
        skate.h('style', '.my-class { display: block; color: red }'),
        skate.h('div', { class: 'my-class' }, `Hello, ${this.name}`)
      ];
    }
  }
);
