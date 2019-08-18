import React from 'react';
import './card.styles.css';

export const Card = props => {
  const { cat } = props;
  return (
    <div className='card-container'>
      <img
        alt={`cat${cat.id}`}
        src={`https://robohash.org/${cat.id}?set=set4&size=150x150`}
      />
      <h2>{cat.name}</h2>
      <p>{cat.email}</p>
    </div>
  );
};
