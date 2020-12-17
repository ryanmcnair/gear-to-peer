import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from 'reactstrap';

export default class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className='Auth'>
        <div className='auth-left'>
          <h1>Welcome to Gear to Peer</h1>
          <h2>Online database for musicians</h2>
        </div>
        <div className='auth-right'>
          <Button
            className='btn btn-secondary'
            size='lg'
            color='success'
            id='box'
            onClick={this.loginClickEvent}
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }
}
