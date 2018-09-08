import { createStore } from 'redux';
import reducer from '../reducers/index';
import { loadState, saveState } from './localStorage';

const localState = loadState();
const store = createStore(reducer, localState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
