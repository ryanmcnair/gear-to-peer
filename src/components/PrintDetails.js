import React from 'react';
import ReactToPrint from 'react-to-print';
import GearDetails from '../views/GearDetails';

class GearDetailsToPrint extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <button className='btn btn-dark mt-4'>Save as a PDF</button>
          )}
          content={() => this.componentRef}
        />
        <GearDetails
          user={this.props.user}
          {...this.props}
          ref={(el) => {
            this.componentRef = el;
          }}
        />
      </div>
    );
  }
}

export default GearDetailsToPrint;
