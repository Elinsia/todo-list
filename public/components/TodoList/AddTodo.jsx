import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddTodoForm from '../../containers/AddTodoForm';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })

  }

  render() {
    return (
      <div className="add-button">
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={this.handleToggle}
        >
          <AddIcon />
        </Button>
        <AddTodoForm open={this.state.open} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default AddTodo;
