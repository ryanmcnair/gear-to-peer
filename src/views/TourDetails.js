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
    const { tour } = this.state;
    return (
      <>
        <h1>{tour.name}</h1>
        <button className='btn btn-danger m-2' onClick={this.removeTour}>
          Delete
        </button>
      </>
    );
  }
}
