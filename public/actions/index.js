import { v4 } from 'node-uuid';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DONE_TODO,
  SET_FILTER
} from './constants';

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    id: v4(),
    payload
  }
}

export function editTodo(id, payload) {
  return {
    type: EDIT_TODO,
    id,
    payload
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function doneTodo(id) {
  return {
    type: DONE_TODO,
    id
  }
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  }
}
