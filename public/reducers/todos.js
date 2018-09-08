import { combineReducers } from 'redux';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DONE_TODO
 } from '../actions/constants';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          id: action.id,
          data: action.payload,
          completed: false
        }
      ];
    case EDIT_TODO:
    return state.map(todo => {
      if(todo.id == action.id) {
        return {
          ...todo,
          data: action.payload
        }
      } else {
        return todo;
      }
    });
    case DELETE_TODO:
      return [ ...state.filter(todo =>
        todo.id != action.id
      )];
    case DONE_TODO:
      return state.map(todo => {
        if(todo.id == action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

const todoReducer = combineReducers({
  todos
});

export default todoReducer;
