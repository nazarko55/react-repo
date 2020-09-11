const rootElement = document.querySelector('#root');

const greetinElem = React.createElement('div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetinElem, rootElement)