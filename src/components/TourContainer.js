import React, { Component } from 'react';
import Loader from './Loader';
import gearData from '../helpers/data/gearData';
import TourCard from './TourCard';
import getUid from '../helpers/data/authData';
import AppModal from './AppModal';
import TourForm from './TourForm';

export default class TourCountainer extends Component {
  state = {
    tour: [],
    loading: false,
  };

  componentDidMount() {
    this.getUserTour();
  }

  getUserTour = () => {
    const userId = getUid.getUid();
    gearData.getAllUserTours(userId).then((response) => {
      this.setState({
        tour: response,
      });
    });
  };

  render() {
    const { loading, tour } = this.state;
    const showTour = () => (
      tour.length
        ? tour.map((allTours) => <TourCard key={allTours.firebaseKey} allGear={allTours} />)
        : (
          <h2>No Tours</h2>
        )
    );
    return (
      <div className='tour-container'>
      <h1>Your Tours</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
          <AppModal title={'Add a tour'} buttonLabel={'Add Tour'}>
            {Object.keys(tour).length && (
              <TourForm key={tour.firebaseKey} tour={tour} onUpdate={this.getUserTour} />
            )}
          </AppModal>
            <div className='d-flex flex-wrap container'>{showTour()}</div>
          </>
        )}
          </div>
    );
  }
}
