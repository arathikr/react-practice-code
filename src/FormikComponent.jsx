import React from 'react';
import { Formik } from 'formik';

const FormikComponent = () => {
  return (
    <div className='container-fluid'>
      <form>
        <h2>REGISTER USER</h2>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input type='text' />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type='text' />
          </dd>
          <dt>City</dt>
          <dd>
            <select>
              <option value='Delhi'>Delhi</option>
              <option value='Hyderabad'>Hyderabad</option>
            </select>
          </dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
};

export default FormikComponent;
