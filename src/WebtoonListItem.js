import React from 'react';

const WebtoonListItem = ({ webtoon }) => {
  return (
    <div>
      <img src={webtoon.thumbnail} alt={webtoon.title} />
      <h2>{webtoon.title}</h2>
      <p>{webtoon.description}</p>
      <p>{webtoon.author}</p>
      <p>{webtoon.genre}</p>
      <p>{webtoon.likes} likes</p>
      <p>Last updated: {webtoon.updatedAt}</p>
    </div>
  );
};

export default WebtoonListItem;
