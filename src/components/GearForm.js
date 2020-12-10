import React, { Component } from 'react';
import firebase from 'firebase/app';
import getUser from '../helpers/data/authData';

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

  render() {
    return (
      <>
        <h1>Gear Form</h1>
      </>
    );
  }
}

export default GearForm;
