import React, { Component } from 'react';

import Counter from './Counter';
import './style.css';

class CounterContainer extends Component {
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
      <Counter
        count={this.state.count}
        incrementCount={this.incrementCount}
        decrementCount={this.decrementCount}
        resetCount={this.resetCount}
      />
    );
  }
}

export default CounterContainer;
