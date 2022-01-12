import React from 'react';
import Checkbox from '../UI/checkbox/checkbox';
import DeleteButton from '../UI/delele-button/delete-button';

import './todo-list-item.css';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;

    return (
      <li className='todo__item'>
        <div className='todo__item-left'>
          <Checkbox />
          <h2 className='todo__item-title'>{title}</h2>
        </div>
        <DeleteButton />
      </li>
    );
  }
}

export default TodoListItem;
