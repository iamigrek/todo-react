import React from 'react';

import './checkbox.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id } = this.props;

    return (
      <div className='checkbox'>
        <input
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
