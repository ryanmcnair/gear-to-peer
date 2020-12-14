import React, { Component } from 'react';
import Loader from './Loader';
import gearData from '../helpers/data/gearData';
import TourCard from './TourCard';
import getUid from '../helpers/data/authData';

export default class TourCountainer extends Component {
  state = {
    tour: [],
    loading: true,
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
      this.setLoading();
    });
  };

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading, tour } = this.state;
    const showTour = () => tour.map((allTours) => <TourCard key={allTours.id} allGear={allTours} />);
    return (
      <>
      <h1>Tours</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='d-flex flex-wrap container'>{showTour()}</div>
          </>
        )}
      </>
    );
  }
}
