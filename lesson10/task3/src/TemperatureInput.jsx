import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({ onTemperatureChannge, temperature, scale }) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]};
      </legend>
      <input type="" value={temperature}
        onChange={(e) => onTemperatureChannge(e.target.value)} />
    </fieldset>
  )
};

export default TemperatureInput;