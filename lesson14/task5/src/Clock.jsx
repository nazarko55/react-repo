import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const intervlId = setInterval(() => setTime(moment()), 1000)
    return () => {
      clearInterval(intervlId);
    }
  }, [time]);

  const currentTime = time.utcOffset(offset).format('h:mm:ss a');
  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {currentTime}
      </div>
    </div>
  )
}

export default Clock;