import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <label htmlFor='search'>Search for a robot
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
          onChange={searchChange}
          id='search'
        />
        </label>
    </div>
  );
}

export default SearchBox;