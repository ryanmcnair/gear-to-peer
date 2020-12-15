import React, { Component } from 'react';
import gearData from '../helpers/data/gearData';
// import SmallCard from './SmallCard';

export default class TourForm extends Component {
  state = {
    gear: [],
  }

  getAllGear = () => {
    gearData.getAllGear().then((response) => {
      this.setState({
        gear: response,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggle();
  }

  render() {
    const { gear } = this.state;
    return (
      <>
        <form className='tour-form'>
          <input
            type='text'
            className='form-control form-control-lg m-1'
            placeholder='Name'
          />
          <input type='checkbox' id='' value={gear.firebaseKey} />
          <label htmlFor=''>{gear.name}</label>
          <p>{gear.name}</p>
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
