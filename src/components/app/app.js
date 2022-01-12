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

  createItem = text => {
    if (text !== '') {
      this.setState(({ data }) => {
        const newItem = {
          id: new Date().toISOString(),
          title: text,
          status: false,
        };
        const newArr = [...data, newItem];

        return {
          data: newArr,
        };
      });
    }
  };

  deleteitem = id => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id),
      };
    });
  };

  onComplete = id => {
    this.setState(({ data }) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return { ...item, status: !item.status };
          }
          return item;
        }),
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className='app'>
        <TodoHeader />
        <TodoAddForm createItem={this.createItem} />
        <TodoList
          onComplete={this.onComplete}
          deleteitem={this.deleteitem}
          data={data}
        />
      </div>
    );
  }
}

export default App;
