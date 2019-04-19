import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

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

  decrementCount = () => {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="WithCount">
        {this.props.children({
          count: this.state.count,
          increment: this.incrementCount,
          decrement: this.decrementCount,
          reset: this.resetCount,
        })}
      </div>
    );
  }
}
