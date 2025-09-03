import React, { useReducer } from 'react';

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === 'INCREMENT') {
        return { ...state, count: state.count++ };
      }
    },
    { count: 0 }
  );
  return (
    <section>
      <h1>UseReducerExample</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Click</button>
    </section>
  );
};

export default UseReducerExample;
