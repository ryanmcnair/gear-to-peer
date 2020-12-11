import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Button } from 'reactstrap';
import getUser from '../helpers/data/authData';
import gearData from '../helpers/data/gearData';

class GearForm extends Component {
  state = {
    brand: this.props.pin?.brand || '',
    category: this.props.pin?.category || '',
    firebaseKey: this.props.pin?.firebaseKey || '',
    id: this.props.pin?.id || '',
    image: this.props.pin?.image || '',
    main_notes: this.props.pin?.main_notes || '',
    model: this.props.pin?.model || '',
    other_notes: this.props.pin?.other_notes || '',
    serial_number: this.props.pin?.serial_number || '',
    year: this.props.pin?.year || '',
  };

  componentDidMount() {
    const userId = getUser.getUid();
    this.setState({
      userId,
    });
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

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ imageUrl: '' });
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(
        `gear/${this.state.userId}/${Date.now()}${e.target.files[0].name}`,
      );
      imageRef.put(e.target.files[0]).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((imageUrl) => {
          this.setState({ imageUrl });
        });
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  addGearId = (gearId) => {
    this.setState({
      firebaseKey: gearId,
    });
  };

  hanleSubmit = (e) => {
    e.preventDefault();
    gearData.createGear(this.state)
      .then((response) => {
        this.getAllGear();
        this.addGearId(response.data.name);
      });
  };

  render() {
    return (
      <form className='form-page'>
        <h1>Gear Form</h1>
        <div className='form-container'>
          <div className='left-container'>Image Container</div>
          <div className='right-container'>
            <select
              name='dropdown'
              className='form-control form-control-lg m-1'
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value=''>Category</option>
              <option value='guitar'>Guitar</option>
              <option value='bass'>Bass</option>
              <option value='pedals'>Pedals</option>
              <option value='amps'>Amplifiers</option>
              <option value='other'>Other</option>
            </select>
            <div className='set1'>
              <input
                type='text'
                name='brand'
                value={this.state.brand}
                onChange={this.handleChange}
                placeholder='Brand'
                className='form-control form-control-lg m-1'
                required
              />
              <input
                type='text'
                name='model'
                value={this.state.model}
                onChange={this.handleChange}
                placeholder='Model'
                className='form-control form-control-lg m-1'
              />
            </div>
            <input
              type='text'
              name='year'
              value={this.state.year}
              onChange={this.handleChange}
              placeholder='Year'
              className='form-control form-control-lg m-1'
            />
            <input
              type='text'
              name='serial_number'
              value={this.state.serial_number}
              onChange={this.handleChange}
              placeholder='Serial Number'
              className='form-control form-control-lg m-1'
            />
            <input
              type='text'
              name='other_notes'
              value={this.state.other_notes}
              onChange={this.handleChange}
              placeholder='Notes'
              className='form-control form-control-lg m-1'
            />
            <input
              className='m-2'
              type='file'
              id='myFile'
              name='filename'
              accept='image/*'
              onChange={this.handleChange}
            />
            <Button color='secondary' size='lg' block>
              Submit
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default GearForm;
