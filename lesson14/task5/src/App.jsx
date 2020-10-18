import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <>
      <button className="toggle-time-btn"
        onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
      <div className="world-time">
        {
          toggle &&
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kiev" offset={2} />
            <Clock location="New-York" offset={-5} />
          </>
        }
      </div>
    </>
  )
}

export default App;