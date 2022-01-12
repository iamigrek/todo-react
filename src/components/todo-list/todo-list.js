import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';
class TodoList extends React.Component {
  render() {
    return (
      <ul className='todo__list'>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    );
  }
}

export default TodoList;
