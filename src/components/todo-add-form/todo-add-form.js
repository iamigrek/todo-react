import React from 'react';

import './todo-add-form.css';
class TodoAddForm extends React.Component {
  render() {
    return (
      <form className='todo-form'>
        <input className='todo-form-input' placeholder='new task' type='text' />
      </form>
    );
  }
}

export default TodoAddForm;
