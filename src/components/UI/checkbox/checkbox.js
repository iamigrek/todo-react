import React from 'react';

import './checkbox.css';

class Checkbox extends React.Component {
  render() {
    return (
      <div className='checkbox'>
        <input className='checkbox__input' id='checkbox-1' type='checkbox' />
        <label className='checkbox__label' htmlFor='checkbox-1'></label>
      </div>
    );
  }
}

export default Checkbox;
