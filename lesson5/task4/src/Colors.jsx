import React, { Component } from 'react';


const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {

  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  }
  render() {
    return (
      <div className="colors">
        <button
          onClick={() => this.setBodyColor(RED)}
          style={{
            background: RED
          }}
          className="colors__button" />
        <button
          onClick={() => this.setBodyColor(GREEN)}
          style={{
            background: GREEN
          }}
          className="colors__button" />
        <button
          onClick={() => this.setBodyColor(BLUE)}
          style={{
            background: BLUE
          }}
          className="colors__button" />
      </div>
    )
  }
}

export default Colors;
