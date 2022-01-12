import React from 'react';

import './todo-add-form.css';
class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChangeText = e => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmitForm = (e, text) => {
    e.preventDefault();
    this.props.createItem(text);
    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;

    return (
      <form className='todo-form' onSubmit={e => this.onSubmitForm(e, text)}>
        <input
          className='todo-form-input'
          placeholder='new task'
          onChange={this.onChangeText}
          value={text}
          type='text'
        />
      </form>
    );
  }
}

export default TodoAddForm;
