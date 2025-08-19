import { useState } from 'react';

export default function FormComponent() {
  const [users] = useState([
    { userId: 'john' },
    { userId: 'john12' },
    { userId: 'david' },
  ]);

  const [userMsg, setUserMsg] = useState('');
  const [isUserValid, setIsUserValid] = useState(false);
  const [pwdMsg, setPwdMsg] = useState('');
  const [capsStatus, setCapsStatus] = useState(false);

  function verifyUserId(e) {
    for (var user of users) {
      if (user.userId === e.target.value) {
        setUserMsg('User Id Taken - Try another');
        setIsUserValid(false);
        break;
      } else {
        setUserMsg('UserId available');
        setIsUserValid(true);
      }
    }
  }

  function hideUserMsg() {
    setUserMsg('');
  }
  function hidePassword() {
    setPwdMsg('');
    setCapsStatus(false);
  }

  function verifyPassword(e) {
    if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
      setPwdMsg('Strong Password');
    } else {
      if (e.target.value.length < 4) {
        setPwdMsg('Poor password');
      } else {
        setPwdMsg('Weak Password');
      }
    }
  }

  function verifyCaps(e) {
    if (
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.which >= 65 && e.which <= 90)
    ) {
      setCapsStatus(true);
    } else {
      setCapsStatus(false);
    }
  }
  return (
    <div className='container-fluid'>
      <h1>Register User</h1>
      <dl>
        <dt>User Id</dt>
        <dd>
          <input type='text' onBlur={hideUserMsg} onKeyUp={verifyUserId} />
        </dd>
        <dd className={isUserValid ? 'text-success' : 'text-danger'}>
          {userMsg}
        </dd>
        <dt>Password</dt>
        <dd>
          <input
            type='password'
            onBlur={hidePassword}
            onKeyUp={verifyPassword}
            onKeyPress={verifyCaps}
          />
        </dd>
        <dd>{pwdMsg}</dd>
        <dd className={capsStatus ? 'd-block' : 'd-none'}>
          <span className='bi bi-exclamation-triangle'></span> Caps ON
        </dd>
      </dl>
    </div>
  );
}
