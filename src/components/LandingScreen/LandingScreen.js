import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './LandingScreen.css';
import Infographic from '../Infographic/Infographic';

class LandingScreen extends Component {
  render() {
    return (
      <div className='LandingScreen'>
        <div className='LandingScreen__content'>
          <h1 className='LandingScreen__title'>Music Video <span>Playlists</span></h1>
          <Infographic/>
          <div className='LandingScreen__actionWrapper'>
            <Link to={`/playlists`}>
              <a className='LandingScreen__action'>
                <span className='LandingScreen__action__text'>
                  Connect Spotify
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingScreen;