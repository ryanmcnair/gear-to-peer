import React from 'react';
import { Link } from 'react-router-dom';

export default function TourCard({ allTours }) {
  return (
    <div className='card m-2'>
      <div className='card-body'>
        <h5 className='card-title'>{allTours.name}</h5>
        <p className='card-text'>{allTours.description}</p>
        <Link className='btn btn-primary' to={`/tour/${allTours.firebaseKey}`}>
          Tour Items
        </Link>
      </div>
    </div>
  );
}
