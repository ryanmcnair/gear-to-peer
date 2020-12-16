import React, { Component } from 'react';
import gearData from '../helpers/data/gearData';

export default class TourDetails extends Component {
  state = {
    tour: [],
  };

  componentDidMount() {
    const tourId = this.props.match.params.id;
    this.getSingleTour(tourId);
  }

  getSingleTour = (tourId) => {
    gearData.getSingleTour(tourId).then((response) => {
      this.setState({
        tour: response,
      });
    });
  };

  removeTour = () => {
    gearData.deleteTour(this.state.tour.firebaseKey).then(() => {
      this.props.history.goBack();
    });
  };

  render() {
    return (
      <>
        <h1>Tour Details</h1>
        <button className='btn btn-danger m-2' onClick={this.removeTour}>
          Delete
        </button>
      </>
    );
  }
}
