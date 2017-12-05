import React, { Component } from 'react';

import CountStore from './CountStore';
import Counter from './Counter';
import './style.css';

class Application extends Component {
  state = { count: CountStore.getCount() };

  getCount = () => {
    this.setState({ count: CountStore.getCount() });
  };

  componentDidMount() {
    CountStore.on('change', this.getCount);
  }

  componentWillUnmount() {
    CountStore.off('change', this.getCount);
  }

  render() {
    return <Counter count={this.state.count} />;
  }
}

export default Application;
