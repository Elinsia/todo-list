import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Todo from '../../containers/Todo';
import FiltersTodo from '../../containers/FiltersTodo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;
    return (
      <div>
        <FiltersTodo filter={this.props.filter}/>
        <List>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.data}
              completed={todo.completed}
              />
          ))}
        </List>
      </div>
    );
  }
}

export default TodoList;
