import React from 'react';
import TodoAddForm from '../todo-add-form/todo-add-form';

import TodoHeader from '../todo-header/todo-header';
import TodoList from '../todo-list/todo-list';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <TodoHeader />
        <TodoAddForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
