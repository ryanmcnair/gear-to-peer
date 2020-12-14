import React from 'react';
import { Link } from 'react-router-dom';

export default function TourCard({ allGear }) {
  return (
    <div className='card m-2'>
      <div className='card-body'>
        <h5 className='card-title'>{allGear.name}</h5>
        <p className='card-text'>{allGear.description}</p>
        <Link className='btn btn-primary' to={`/tour/${allGear.firebaseKey}`}>
          Tour Items
        </Link>
      </div>
    </div>
  );
}
