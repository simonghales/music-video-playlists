import React, {Component} from 'react';
import './Infographic.css';

class Infographic extends Component {
  render() {
    return (
      <div className='Infographic'>
        <div className='Infographic__side'>
          LEFT SIDE
        </div>
        <div className='Infographic__side'>
          RIGHT SIDE
        </div>
      </div>
    );
  }
}

export default Infographic;