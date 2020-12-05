import React, { Component } from 'react';
import Loader from './Loader';

class HomeComponent extends Component {
  state = {
    loading: true,
  }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='d-flex flex-wrap container'>Collection goes here</div>
          </>
        )}
      </>
    );
  }
}

export default HomeComponent;
