import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import { filters } from '../actions/constants';

const getFilterTodos = (todos, filterType) => {
  switch (filterType) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_DONE:
      return todos.filter(todo => todo.completed);
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

const mapStateToProps = state => ({
  todos: getFilterTodos(state.todo.todos, state.filters.setFilter),
  filter: state.filters.setFilter
});

export default connect(mapStateToProps, null)(TodoList);
