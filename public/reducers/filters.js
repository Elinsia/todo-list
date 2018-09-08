import { combineReducers } from 'redux';
import { SET_FILTER, filters } from '../actions/constants';

function setFilter(state = filters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state;
  }
}

const filterReducer = combineReducers({
  setFilter
});

export default filterReducer;
