import React from 'react';

import Counter from './Counter';
import './style.css';

export default function Application() {
  return (
    <Counter>
      {({ increment, decrement, reset, count }) => (
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
      )}
    </Counter>
  );
}
