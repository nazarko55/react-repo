import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const number = this.state.number;
    return (
      <div className="app">
        <Numbers title="All numbers" number={number} />
        <EvenNumbers title="Even numbers" number={number} />
        <OddNumbers title="Odd numbers" number={number} />
        <Numbers title="All" number={17} />
      </div>
    )
  }
}

export default App;