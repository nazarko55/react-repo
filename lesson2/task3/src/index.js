import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const renderSeconds = () => {
  const second = new Date().getSeconds();

  const time = second % 2 === 0

    ? {
      color: 'black',
      backgroundColor: 'white'
    }
    :
    {
      color: 'white',
      backgroundColor: 'black'
    };

  const element = (
    <div
      className='seconds' style={time}>
      {`Now is ${second}`}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

renderSeconds(new Date())

setInterval(() => renderSeconds(), 1000)