import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditTodoForm from '../../containers/EditTodoForm';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      openDialogEdit: false
    };

    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  handleEdit() {
    this.setState({
      openDialogEdit: !this.state.openDialogEdit
    })
  }

  handleChange() {
    this.props.onDone(this.props.id);
  }

  render() {
    const todo = this.props.todo;
    return (
      <div>
        <ListItem className={this.props.completed ? 'completed' : '' }>
          <Checkbox
            inputRef={check => {this.check = check} }
            checked={this.props.completed}
            onChange={this.handleChange}
          />
        <ListItemText primary={todo.name} secondary={`${todo.date} | ${todo.descr}`} />
          <ListItemSecondaryAction>
            <IconButton
              buttonRef={node => {this.anchorEl = node;}}
              aria-label="More"
              aria-haspopup="true"
              onClick={this.handleToggleMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.anchorEl}
              open={this.state.openMenu}
              onClose={this.handleToggleMenu}
            >
              <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
              <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
            </Menu>
          </ListItemSecondaryAction>
        </ListItem>
        <EditTodoForm
          open={this.state.openDialogEdit}
          id={this.props.id}
          todoData={todo}
          handleToggle={this.handleEdit}
        />
      </div>
    );
  }
}

export default Todo;
