import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gearData from '../helpers/data/gearData';
import AppModal from '../components/AppModal';
import TourForm from '../components/TourForm';

export default class TourDetails extends Component {
  state = {
    tour: [],
    tourGear: [{}],
  };

  componentDidMount() {
    const tourId = this.props.match.params.id;
    gearData.getSingleTour(tourId).then((response) => {
      this.setState({
        tour: response,
        tourGear: response.gears,
      });
    });
  }

  removeTour = () => {
    gearData.deleteTour(this.state.tour.firebaseKey).then(() => {
      this.props.history.goBack();
    });
  };

  render() {
    const { tour, tourGear } = this.state;
    return (
      <>
        <div>
          <button className='btn btn-danger m-2' onClick={this.removeTour}>
            Delete
          </button>
          {this.props.user.uid === this.state.tour.userId && (
            <AppModal title={'Update Tour'} buttonLabel={'Update'}>
              {Object.keys(tour).length && (
                <TourForm tour={tour} onUpdate={this.getSingleTour} />
              )}
            </AppModal>
          )}
        </div>
        <h1>{tour.name}</h1>
        <h2>{tour.description}</h2>
        <h2>Gear used: </h2>
        <ul>
          <span>
            {tourGear && tourGear.map(({ label, value }) => (
                <Link key={value} to={`/gear/${value}`}>{label}</Link>
            ))}
          </span>
        </ul>
      </>
    );
  }
}
