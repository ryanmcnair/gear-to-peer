import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import gearData from '../helpers/data/gearData';
import GearCard from './GearCard';
// import DropDown from './DropDown';

const buttons = [
  { name: 'All', value: 'All' },
  { name: 'Guitar', value: 'guitar' },
  { name: 'Bass', value: 'bass' },
  { name: 'Pedals', value: 'pedals' },
  { name: 'Amplifiers', value: 'amps' },
  { name: 'Other', value: 'other' },
];

export default class CollectionContainer extends Component {
  state = {
    gear: [],
    loading: false,
    filterGear: [],
  };

  componentDidMount() {
    this.getAllGear();
  }

  componentWillUnmount() {}

  handleClick = (e) => {
    let newGear;
    if (e.target.value === 'All') {
      newGear = this.state.gear;
    } else {
      newGear = this.state.gear.filter(
        (item) => item.category === e.target.value,
      );
    }
    this.setState({
      filterGear: newGear,
    });
  };

  handleChangeGear = (e) => {
    this.setState({ gear: e.target.value });
  };

  getAllGear = () => {
    gearData.getAllGear().then((response) => {
      this.setState({
        gear: response,
      });
    });
  };

  render() {
    const { loading, filterGear } = this.state;
    const showGear = () => filterGear.map((allGear) => (
        <GearCard key={allGear.firebaseKey} allGear={allGear} />
    ));
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='collection-buttons mt-2'>
              <Link className='btn btn-dark' to={'gear-form'}>
                Add Gear
              </Link>
            </div>
            <div className='filter-buttons mt-3'>
              {buttons.map(({ name, value }) => (
                <button className='btn btn-dark' key={name} value={value} onClick={this.handleClick}>
                  {name}
                </button>
              ))}
            </div>
            <div className='d-flex flex-wrap container'>{showGear()}</div>
          </>
        )}
      </>
    );
  }
}
