import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class EditTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      open: !this.state.open
    })
  }

  handleSubmit() {
    const name = this.name.value;
    const descr = this.descr.value;
    const date = this.date.value;
    const id = this.props.id;
    if (name && date !== '') {
      const payload = {
          name: name.trim(),
          descr: descr.trim(),
          date: date.trim()
      };

      this.props.onEdit(id, payload);
      this.props.handleToggle();
    } else {
      this.setState({
        open: !this.state.open
      })
    }
  }

  render() {
    const todo = this.props.todoData;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit TODO</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              inputRef={name => {this.name = name} }
              label="Name"
              type="text"
              defaultValue={todo.name}
              fullWidth
            />
            <TextField
              inputRef={descr => {this.descr = descr} }
              label="Description"
              type="text"
              defaultValue={todo.descr}
              fullWidth
            />
            <TextField
              required
              label="Date"
              inputRef={date => {this.date = date} }
              type="date"
              defaultValue={todo.date}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.props.handleToggle}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              color="secondary"
            >
              Edit
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Error, full all required (*) fields</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              OK
            </Button>
          ]}
        />
      </div>
    );
  }
}

export default EditTodoForm;
