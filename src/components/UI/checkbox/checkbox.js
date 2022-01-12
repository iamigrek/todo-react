import React from 'react';

import './checkbox.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, onComplete, status } = this.props;

    return (
      <div className='checkbox'>
        <input
          checked={status && 'checked'}
          onChange={onComplete}
          className='checkbox__input'
          id={'checkbox-' + id}
          type='checkbox'
        />
        <label className='checkbox__label' htmlFor={'checkbox-' + id}></label>
      </div>
    );
  }
}

export default Checkbox;
