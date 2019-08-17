import React from 'react';
import './card.styles.css';

export const Card = props => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img
        alt={`monster${monster.id}`}
        src={`https://robohash.org/${monster.id}?set=set4&size=150x150`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
