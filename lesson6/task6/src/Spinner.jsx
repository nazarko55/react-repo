import React from 'react';

const Spinner = (size) => {
  const sizeSpinner = {
    width: `${size}px`,
    height: `${size}px`
  };
  return (
    <span style={sizeSpinner}
      className="spinner">
    </span>
  )
}
export default Spinner;