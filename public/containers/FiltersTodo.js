import { connect } from 'react-redux';
import { setFilter } from '../actions/index';
import FiltersTodo from '../components/TodoList/FiltersTodo';

const mapDispatchToProps = dispatch => ({
  onChange: filter => {
    dispatch(setFilter(filter))
  }
});

export default connect(null, mapDispatchToProps)(FiltersTodo);
