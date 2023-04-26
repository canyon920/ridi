import React from 'react';

const Sort = ({ sort, setSort }) => {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select name="sort" id="sort" value={sort} onChange={handleSortChange}>
        <option value="popular">Popular</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default Sort;
