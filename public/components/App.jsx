import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TodoList from '../containers/TodoList';
import AddTodo from './TodoList/AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              TodoList
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper>
          <TodoList />
          <AddTodo />
        </Paper>
      </div>
    )
  }
}

export default App;
