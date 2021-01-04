import React, { Component } from 'react';
import gearData from '../helpers/data/gearData';
import AppModal from '../components/AppModal';
import GearForm from '../components/GearForm';

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
        <div>
          <button className='btn btn-dark mt-4' onClick={() => window.print()}>
            PDF
          </button>
          <h1 style={{ color: '#d8d8d8' }}>
            {gear.year} {gear.brand} {gear.model}
          </h1>
          <img src={gear.imageUrl} alt='' className='gear-image' />
          <h3 style={{ color: '#d8d8d8' }}>Notes: {gear.other_notes}</h3>
          <h3 style={{ color: '#d8d8d8' }}>
            Serial Number: {gear.serial_number}
          </h3>
        </div>
        <button className='btn btn-danger m-2' onClick={this.removeGear}>
          Delete
        </button>
        {this.props.user.uid === gear.userId && (
          <AppModal title={'Update Gear'} buttonLabel={'Update Gear'}>
            {Object.keys(gear).length && (
              <GearForm gear={gear} onUpdate={this.getSingleGear} />
            )}
          </AppModal>
        )}
      </div>
    );
  }
}

export default GearDetails;
