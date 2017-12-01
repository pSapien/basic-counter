import React, { Component } from 'react';

import withCount from './withCount';
import Counter from './Counter';
import './style.css';

const CounterContainer = withCount(Counter);

class Application extends Component {
  render() {
    return <CounterContainer />;
  }
}

export default Application;
