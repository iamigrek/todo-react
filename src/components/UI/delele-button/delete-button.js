import React from 'react';

import './delete-button.css';

class DeleteButton extends React.Component {
  render() {
    return (
      <button className='delete-button'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 58.67'>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
              <path
                class='cls-1'
                d='M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z'
              />
              <path
                class='cls-1'
                d='M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z'
              />
              <path
                class='cls-1'
                d='M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z'
              />
            </g>
          </g>
        </svg>
      </button>
    );
  }
}

export default DeleteButton;
