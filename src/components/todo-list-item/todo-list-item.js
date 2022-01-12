import React from 'react';
import Checkbox from '../UI/checkbox/checkbox';
import DeleteButton from '../UI/delele-button/delete-button';

import './todo-list-item.css';

class TodoListItem extends React.Component {
  render() {
    const { title, status, id, deleteitem } = this.props;
    const compl = status && 'todo__item--compl';

    return (
      <li className={'todo__item' + ' ' + compl}>
        <div className='todo__item-left'>
          <Checkbox id={id} />
          <h2 className='todo__item-title'>{title}</h2>
        </div>
        <DeleteButton deleteitem={deleteitem} />
      </li>
    );
  }
}

export default TodoListItem;
