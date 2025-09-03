import React, { useEffect, useState } from 'react';
import { useSyncExternalStore } from 'react';

const Debounce = () => {
  const [msg, setMsg] = useState('');
  function Msg1() {
    setMsg('Hello !');
  }
  function Msg2() {
    setMsg('How are you?');
  }
  function Msg3() {
    setMsg('Welcome to React');
  }

  function handleShowClick() {
    Msg1();
    Msg2();
    Msg3();
  }
  return (
    <div className='container-fluid'>
      <button onClick={handleShowClick}>Show Msgs</button>
      <p className='mt-4 h1'>{msg}</p>
    </div>
  );
};

export default Debounce;
