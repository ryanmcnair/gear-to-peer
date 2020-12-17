import React, { Component } from 'react';
import gearData from '../helpers/data/gearData';
import getUser from '../helpers/data/authData';
import { CheckBox } from './CheckBox';
// import SmallCard from './SmallCard';

export default class TourForm extends Component {
  state = {
    gear: [],
    firebaseKey: this.props.tour?.firebaseKey || '',
    name: this.props.tour?.name || '',
    checked: false,
    tourGear: [],
  };

  componentDidMount() {
    const userId = getUser.getUid();
    this.setState({
      userId,
    });
    this.getAllGear();
  }

  getAllGear = () => {
    gearData.getAllGear().then((response) => {
      this.setState({
        gear: response,
      });
    });
  };

  handleCheckEvent = (e) => {
    const isChecked = !this.state.checked;
    this.setState({
      checked: isChecked,
      tourGear: isChecked ? this.state.gear : this.state.tourGear,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firebaseKey === '') {
      gearData.createTour(this.state).then(() => {
        this.props.onUpdate();
      });
    }
    this.props.toggle();
  };

  render() {
    const { gear } = this.state;
    return (
      <>
        <form className='tour-form'>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            className='form-control form-control-lg m-1'
            placeholder='Name'
            required
          />
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            className='form-control form-control-lg m-1'
            placeholder='Description'
            required
          />
          <h3>Select items to add:</h3>
          <ul>
            {gear.map((item) => (
              <CheckBox onChange={this.handleChange} {...item} />
            ))}
          </ul>
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
