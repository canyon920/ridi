import React from 'react';

const Filter = () => {
  return (
    <div>
      <label htmlFor="genre">Genre:</label>
      <select name="genre" id="genre">
        <option value="romance">Romance</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
      </select>
    </div>
  );
};

export default Filter;
