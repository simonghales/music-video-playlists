import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import classNames from 'classnames';
import './LandingScreen.css';
import Infographic from '../Infographic/Infographic';

class LandingScreen extends Component {

  props: {
    history: any,
  };

  state: {
    isLeavingNow: boolean,
    willBeLeaving: boolean,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLeavingNow: false,
      willBeLeaving: false,
    };
    this.connectSpotify = this.connectSpotify.bind(this);
  }

  connectSpotify() {
    this.setState({
      willBeLeaving: !this.state.willBeLeaving, // temporary
    });
    setTimeout(() => {
      this.setState({
        isLeavingNow: true,
      });
      setTimeout(() => {
        this.props.history.push('/playlists');
      }, 500);
    }, 1500);
  }

  render() {
    const {isLeavingNow, willBeLeaving} = this.state;
    return (
      <div className={
        classNames([
          'LandingScreen',
          {
            'LandingScreen--isLeavingNow': isLeavingNow,
            'LandingScreen--willBeLeaving': willBeLeaving,
          }
        ])
      }>
        <div className='LandingScreen__content'>
          <h1 className='LandingScreen__title'>Music Video <span>Playlists</span></h1>
          <Infographic/>
          <div className='LandingScreen__actionWrapper'>
            {/*<Link to={`/playlists`}>*/}
            <span className='LandingScreen__action' onClick={this.connectSpotify}>
                <span className='LandingScreen__action__text'>
                  Connect Spotify
                </span>
              </span>
            {/*</Link>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingScreen;