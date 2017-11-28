import React, { Component } from 'react';
import './style.css';

class Counter extends Component {
  state = {
    count: 0
  };

  //callback to the setState
  incrementCount = () => {
    this.setState(
      state => {
        return { count: state.count + 1 };
      },
      () => {
        if (this.state.count > 5) {
          this.resetCount();
        }
      }
    );
  };

  //setting state by a function
  decrementCount = () => {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  };

  //normal setState
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <main className="counterContainer">
        <section className="Counter">
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.incrementCount} className="full-width">
            Increment
          </button>
          <button onClick={this.decrementCount} className="full-width">
            Decrement
          </button>
          <button onClick={this.resetCount} className="full-width">
            Reset
          </button>
        </section>
      </main>
    );
  }
}

export default Counter;
