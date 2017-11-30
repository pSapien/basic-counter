import React from 'react';

const Counter = props => {
  const { count, incrementCount, decrementCount, resetCount } = props;
  return (
    <main className="counterContainer">
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={incrementCount} className="full-width">
          Increment
        </button>
        <button onClick={decrementCount} className="full-width">
          Decrement
        </button>
        <button onClick={resetCount} className="full-width">
          Reset
        </button>
      </section>
    </main>
  );
};

export default Counter;
