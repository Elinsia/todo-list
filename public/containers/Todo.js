import { connect } from 'react-redux';
import { editTodo, deleteTodo, doneTodo } from '../actions/index';
import Todo from '../components/TodoList/Todo';

const mapDispatchToProps = dispatch => ({
  onEdit: (id, payload) => {
    dispatch(editTodo(id, payload))
  },
  onDelete: (id) => {
    dispatch(deleteTodo(id))
  },
  onDone: (id) => {
    dispatch(doneTodo(id))
  }
});

export default connect(null, mapDispatchToProps)(Todo);
