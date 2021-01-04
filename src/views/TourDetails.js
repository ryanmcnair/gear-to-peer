import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gearData from '../helpers/data/gearData';
// import getUid from '../helpers/data/authData';
// import AppModal from '../components/AppModal';
// import TourForm from '../components/TourForm';

export default class TourDetails extends Component {
  state = {
    tour: [],
    notes: '',
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  removeTour = () => {
    gearData.deleteTour(this.state.tour.firebaseKey).then(() => {
      this.props.history.goBack();
    });
  };

  getTour = (tourId) => {
    gearData.getSingleTour(tourId).then((response) => {
      this.setState({
        tour: response,
      });
    });
  }

  updateTour = () => {
    gearData.updateTour(this.state)
      .then(() => {
        this.getTour(this.state.tour.firebaseKey);
      });
  }

  render() {
    const { tour, tourGear } = this.state;
    return (
      <>
        <div className='tour-details'>
        <div className='tour-description'>
        <h1>{tour.name}</h1>
        <h1>{tour.description}</h1>
        <div className='tour-details-container'>
        <div className='used-left'>
        <h3>Gear used: </h3>
        </div>
        <div className='used-right'></div>
        <ul>
          <span className='tour-box'>
            {tourGear && tourGear.map(({ label, value }) => (
                <Link key={value} to={`/gear/${value}`} className='tour-list'>{label}</Link>
            ))}
          </span>
        </ul>
        </div>
        <h3>Notes: {tour.notes}</h3>
            <input
              type='text'
              name='notes'
              value={this.state.notes}
              onChange={this.handleChange}
              className='form-control form-control-lg'
              placeholder='Add notes'
            />
        {/* <textarea rows="4" cols="50" placeholder='Add notes' name='notes' >
        </textarea> */}
        <button onClick={this.updateTour}>Save</button>
        <div>
          <button className='btn btn-danger m-2' onClick={this.removeTour}>
            Delete
          </button>
          {/* {this.props.user.uid === this.state.tour.userId && (
            <AppModal title={'Update Tour'} buttonLabel={'Update'}>
              {Object.keys(tour).length && (
                <TourForm tour={tour} onUpdate={this.getSingleTour} />
              )}
            </AppModal>
          )} */}
        </div>
          </div>
        </div>
      </>
    );
  }
}
