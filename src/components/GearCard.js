import React from 'react';
import { Link } from 'react-router-dom';

export default function GearCard({ allGear }) {
  return (
    <div className='card m-2'>
      <img className='card-img-top' src={allGear.image} alt='Card cap' />
      <div className='card-body'>
        <h5 className='card-title'>{allGear.name}</h5>
        <p className='card-text'>{allGear.description}</p>
        <Link className='btn btn-primary' to={`/gear/${allGear.firebaseKey}`}>
          Gear Details
        </Link>
      </div>
    </div>
  );
}
