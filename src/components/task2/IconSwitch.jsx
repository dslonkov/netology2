import React from 'react';

const IconSwitch = (props) => {
  return (
    <div>
      <span
        className="material-icons"
        onClick={props.onSwitch}
      >
        {props.icon}
      </span>
    </div>
  );
};

export default IconSwitch;
