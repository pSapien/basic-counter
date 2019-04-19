import React from 'react';

export default function useCounter(props = {}) {
  const { initialState = 0, step = 1, minValue = 1 } = props;
  const [count, setCount] = React.useState(initialState);

  const increment = () => setCount(count + step);

  const decrement = () => {
    if (count >= minValue) setCount(count - step);
  };

  const reset = () => setCount(initialState);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}
