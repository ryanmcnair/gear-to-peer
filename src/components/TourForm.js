import React, { Component } from 'react';
import Select from 'react-select';
import gearData from '../helpers/data/gearData';
import getUser from '../helpers/data/authData';

export default class TourForm extends Component {
  state = {
    gear: [],
    firebaseKey: this.props.tour?.firebaseKey || '',
    name: this.props.tour?.name || '',
    checked: false,
    selectedOptions: [],
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
      const selectedOptions = response.map((item) => (
        {
          value: item.firebaseKey,
          label: item.model,
        }
      ));
      this.setState({
        gear: response,
        selectedOptions,
      });
    });
  };

  addSelectedOption = (name, options) => {
    this.setState(({ selectedOptions }) => ({
      selectedOptions: {
        ...selectedOptions,
        [name]: options,
      },
    }));
  };

  onChange = (e) => {
    this.setState({
      selected: e,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firebaseKey === '') {
      const object = {
        gear: this.state.selected,
        userId: this.state.userId,
        name: this.state.name,
        description: this.state.description,
      };
      gearData.createTour(object).then(() => {
        this.props.onUpdate();
      });
    }
    this.props.toggle();
  };

  render() {
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
          />
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            className='form-control form-control-lg m-1'
            placeholder='Description'
          />
          <h3>Select items to add:</h3>
          <Select options={this.state.selectedOptions}
          onChange={this.onChange}
          isMulti />
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
