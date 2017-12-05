import AppDispatcher from './AppDispatcher';

export const incrementCount = count => {
  AppDispatcher.dispatch({
    type: 'INCREMENT_COUNT',
    count
  });
};

export const decrementCount = count => {
  AppDispatcher.dispatch({
    type: 'DECREMENT_COUNT',
    count
  });
};

export const resetCount = count => {
  AppDispatcher.dispatch({
    type: 'RESET_COUNT',
    count
  });
};
