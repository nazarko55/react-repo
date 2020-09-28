import React, { Component } from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    }
  }

  componentDidMount() {
    const { innerHeight, innerWidth } = window;

    this.setDimensions(innerWidth, innerHeight)
    window.addEventListener('resize', this.onResize);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }


  onResize = () => {
    const { innerWidth, innerHeight } = window;

    this.setDimensions(innerHeight, innerWidth)

  }

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height}`;
  }

  render() {
    const { width, height } = this.state;

    return (
      <div className="dimensions"> {`${width}px - ${height}px`}
      </div>
    )
  }
}


export default Dimensions;