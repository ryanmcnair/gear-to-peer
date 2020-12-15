import React from 'react';

export default function SmallCard({ allGear }) {
  return (
    <div className='card m-2'>
      <div className='card-body'>
        <h5 className='card-title'>{allGear.name}</h5>
        <p className='card-text'>{allGear.description}</p>
      </div>
    </div>
  );
}
