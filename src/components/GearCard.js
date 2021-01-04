import React from 'react';
import { Link } from 'react-router-dom';

export default function GearCard({ allGear }) {
  return (
    <div className='card m-2'>
      <h5 className='card-title'>{allGear.name}</h5>
      <img className='card-img-top img-container' src={allGear.imageUrl} alt='Card cap' />
      <div className='card-body'>
        <p className='card-text'>{allGear.description}</p>
        <Link className='btn btn-primary' to={`/gear/${allGear.firebaseKey}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
