import React, { Component } from 'react';

import WithCount from './WithCount';
import Counter from './Counter';
import './style.css';

class Application extends Component {
  render() {
    return (
      <WithCount
        render={(count, incrementCount, decrementCount, resetCount) => (
          <Counter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
    );
  }
}

export default Application;
