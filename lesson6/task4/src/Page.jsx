import React, { Component } from 'react';
import Message from './Message';

// input null
// output string

const text1 = 'Hello, world!';
const text2 = 'Another exciting text';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { // начальная состояние null.
      text: null
    };
  }

  setText = (text) => {
    this.setState({ // используем для отрисовки text1 и text2.
      text
    })
  }


  render() { //если состояния компонента меняется запускаем метод render(),
    //отрисовка нового значения переданное в компоненту Message
    return (
      <div className='page'>
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>Text 1</button>
          <button className="btn" onClick={() => this.setText(text2)}>Text 2</button>
          <button className="btn" onClick={() => this.setText(null)}> Clear </button>
        </div>
      </div>
    );
  }
}

export default Page;