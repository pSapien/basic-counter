import React from 'react';

import useCounter from './useCounter';
import './style.css';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <main className="counterContainer">
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={increment} className="full-width">
          Increment
        </button>
        <button onClick={decrement} className="full-width">
          Decrement
        </button>
        <button onClick={reset} className="full-width">
          Reset
        </button>
      </section>
    </main>
  );
}
