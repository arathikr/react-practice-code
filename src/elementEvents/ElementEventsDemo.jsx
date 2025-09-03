import React, { useState } from 'react';

const ElementEventsDemo = () => {
  const [msg, setMsg] = useState('');
  const [code, setCode] = useState('');
  function handleFocus() {
    setMsg('IFSC CODE: SBY0000012923');
  }
  function handleBlur() {
    setMsg('');
  }

  function handleKeyUp(e) {
    setCode(e.target.value.toUpperCase());
  }
  return (
    <div className='container-fluid'>
      <h2>State Events</h2>
      <dl>
        <dt>Bank IFSC Code</dt>
        <dd>
          <input
            type='text'
            value={code}
            onChange={handleKeyUp}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </dd>
        <dd className='text-danger'>{msg}</dd>
      </dl>
    </div>
  );
};

export default ElementEventsDemo;
