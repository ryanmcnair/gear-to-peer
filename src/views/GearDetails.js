import React, { Component } from 'react';
import gearData from '../helpers/data/gearData';

class GearDetails extends Component {
  state = {
    gear: {},
  }

  componentDidMount() {
    const gearId = this.props.match.params.id;
    this.getSingleGear(gearId);
  }

  getSingleGear = (gearId) => {
    gearData.getSingleGear(gearId).then((response) => {
      this.setState({
        gear: response,
      });
    });
  }

  removeGear = () => {
    gearData.deleteGear(this.state.gear.firebaseKey).then(() => {
      this.props.history.goBack();
    });
  }

  render() {
    const { gear } = this.state;
    return (
      <div className='single-gear-view'>
        <h1>{gear.brand}</h1>
        <button
          className='btn btn-danger m-2'
          onClick={this.removeGear}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default GearDetails;
