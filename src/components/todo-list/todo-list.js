import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    );
  }
}

export default TodoList;
