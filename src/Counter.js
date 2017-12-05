import React, { Component } from 'react';

import { incrementCount, decrementCount, resetCount } from './actions';

class Counter extends Component {
  onIncrement = () => {
    incrementCount(this.props.count);
  };
  onDecrement = () => {
    decrementCount(this.props.count);
  };
  onReset = () => {
    resetCount(this.props.count);
  };
  render() {
    const { count } = this.props;
    return (
      <main className="counterContainer">
        <section className="Counter">
          <h1>Count: {count}</h1>
          <button className="full-width" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="full-width" onClick={this.onDecrement}>
            Decrement
          </button>
          <button className="full-width" onClick={this.onReset}>
            Reset
          </button>
        </section>
      </main>
    );
  }
}

export default Counter;
