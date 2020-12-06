import React, { Component } from 'react';
import Loader from './Loader';
import gearData from '../helpers/data/gearData';
import GearCard from './GearCard';

class HomeComponent extends Component {
  state = {
    gear: [],
    loading: true,
  }

  componentDidMount() {
    this.getAllGear();
  }

  getAllGear = () => {
    gearData.getAllGear().then((response) => {
      this.setState({
        gear: response,
      }, this.setLoading);
    });
  }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { loading, gear } = this.state;
    const showGear = () => (
      gear.map((allGear) => <GearCard key={allGear.id} allGear={allGear}/>)
    );
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='d-flex flex-wrap container'>{showGear()}</div>
          </>
        )}
      </>
    );
  }
}

export default HomeComponent;
