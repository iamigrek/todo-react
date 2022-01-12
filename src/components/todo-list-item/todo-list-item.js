import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return (
      <li>
        <input type='text' />
        <h2>Some text</h2>
        <button>Del</button>
      </li>
    );
  }
}

export default TodoListItem;
