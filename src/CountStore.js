import EventEmitter from 'events';

import AppDispatcher from './AppDispatcher';

let count = 0;

class CountStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      if (action.type === 'INCREMENT_COUNT') {
        return this.incrementCount(action.count);
      }
      if (action.type === 'DECREMENT_COUNT') {
        return this.decrementCount(action.count);
      }
      if (action.type === 'RESET_COUNT') {
        return this.resetCount(action.count);
      }
    });
  }
  getCount() {
    return count;
  }
  incrementCount() {
    count = count + 1;
    if (count > 5) return this.resetCount();

    this.emit('change');
  }

  decrementCount() {
    count = count - 1;

    this.emit('change');
  }

  resetCount() {
    count = 0;
    this.emit('change');
  }
}

export default new CountStore();
