import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import AddTodoForm from '../components/TodoList/AddTodoForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: (payload) => {
    dispatch(addTodo(payload));
  }
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
