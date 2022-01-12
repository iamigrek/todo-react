import React from 'react';
import TodoAddForm from '../todo-add-form/todo-add-form';

import TodoHeader from '../todo-header/todo-header';
import TodoList from '../todo-list/todo-list';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 'some1', status: false },
        { id: 2, title: 'some2', status: false },
        { id: 3, title: 'some3', status: false },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className='app'>
        <TodoHeader />
        <TodoAddForm />
        <TodoList data={data} />
      </div>
    );
  }
}

export default App;
