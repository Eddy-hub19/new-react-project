import React from 'react';

const ControlsCounter = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button tvpe="button" onClick={onIncrement}>
        Увеличить на один
      </button>
      <button tvpe="button" onClick={onDecrement}>
        Уменшить на один
      </button>
    </div>
  );
};

export default ControlsCounter;
