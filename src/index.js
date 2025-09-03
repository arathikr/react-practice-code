import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import Debounce from './elementEvents/Debounce';
// import ElementEventsDemo from './elementEvents/ElementEventsDemo';
// import UseReducerExample from './useHooks/UseReducerExample';
// import ShoppingComponent from './ShoppingComponent';
// import FormComponent from './FormComponent';
// import FormikComponent from './FormikComponent';
// import ClassBinding from './ClassBinding';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Debounce />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
