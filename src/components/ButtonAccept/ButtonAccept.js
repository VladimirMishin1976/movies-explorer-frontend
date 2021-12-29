import React from 'react';

import './ButtonAccept.css';

function ButtonAccept({ text }) {
  const [enable, setEnable] = React.useState(true);

  function onClick() {
    setEnable(!enable);
  }

  return (
    <button className={`button button-hover ${!enable && 'button_disabled'}`}
      onClick={onClick} >{text}</button>
  )
}

export default ButtonAccept;