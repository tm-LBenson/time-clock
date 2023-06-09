import React, { useState } from 'react';
import TimePicker from '@src/components/Timer/TimePicker';
import { setNotification } from '@src/utils/notifications';

const Timer = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handleSetNotification = () => {
    const now = new Date();
    const selected = new Date(now.toDateString() + ' ' + selectedTime);
    if (selected < now) {
      selected.setDate(selected.getDate() + 1);
    }
    setNotification('Your alarm is ringing!', selected);
  };

  return (
    <div className="timer">
      <h2 className="timer__header">Select a time:</h2>
      <TimePicker onTimeChange={handleTimeChange} />
      <button
        onClick={handleSetNotification}
        className="btn timer__button timer__button--active"
      >
        Set Alarm
      </button>
    </div>
  );
};

export default Timer;
