import React, { Component } from 'react';

class OddNumbers extends Component {
  shouldComponentUpdate(nextPorpss) {
    return nextPorpss.number % 2 === 1;
  }
  render() {
    return (
      <div className="number">
        <span className="numbet__title">
          {this.props.title}
        </span>
        <span className="number__value">
          {this.props.number}
        </span>
      </div>
    )
  }
}

export default OddNumbers;