import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'Off',
    }
  }

  setBtnTxt = () => {
    this.setState({
      toggle: this.state.toggle === 'Off'
        ? "On"
        : "Off"
    })
  }

  render() {
    return (
      <button className="toggler"
        onClick={this.setBtnTxt}>
        {this.state.toggle}
      </button>
    )
  }
}

export default Toggler;