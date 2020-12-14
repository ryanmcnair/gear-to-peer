import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import gearData from '../helpers/data/gearData';
import GearCard from './GearCard';

export default class CollectionContainer extends Component {
  state = {
    gear: [],
    loading: true,
  };

  componentDidMount() {
    this.getAllGear();
  }

  componentWillUnmount() {
  }

  getAllGear = () => {
    gearData.getAllGear().then((response) => {
      this.setState(
        {
          gear: response,
        },
        this.setLoading,
      );
    });
  };

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading, gear } = this.state;
    const showGear = () => gear.map((allGear) => <GearCard key={allGear.firebaseKey} allGear={allGear} />);
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Link
              className='btn btn-primary'
              to={'gear-form'}
            >
              Add Gear
            </Link>
            <div className='d-flex flex-wrap container'>{showGear()}</div>
          </>
        )}
      </>
    );
  }
}
