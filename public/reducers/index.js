import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from './todos';
import filterReducer from './filters';

const reducers = combineReducers({
  todo: todoReducer,
  filters: filterReducer
});

export default reducers;
