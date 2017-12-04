import React, { Component } from 'react';

class WithCount extends Component {
  state = {
    count: 0
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
        {this.props.render(
          this.state.count,
          this.incrementCount,
          this.decrementCount,
          this.resetCount
        )}
      </div>
    );
  }
}

export default WithCount;
