import { connect } from 'react-redux';
import { editTodo } from '../actions/index';
import EditTodoForm from '../components/TodoList/EditTodoForm';

const mapDispatchToProps = dispatch => ({
  onEdit: (id, payload) => {
    dispatch(editTodo(id, payload));
  }
});

export default connect(null, mapDispatchToProps)(EditTodoForm);
