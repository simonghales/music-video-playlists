import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import classNames from 'classnames';
import './PlaylistsScreen.css';
import Playlists from '../Playlists/Playlists';

class PlaylistsScreen extends Component {

  state: {
    searchFocused: boolean,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchFocused: false
    };
    this.handleSearchFocused = this.handleSearchFocused.bind(this);
    this.handleSearchUnfocused = this.handleSearchUnfocused.bind(this);
  }

  handleSearchFocused() {
    this.setState({
      searchFocused: true
    });
  }

  handleSearchUnfocused() {
    this.setState({
      searchFocused: false
    });
  }

  render() {
    const {searchFocused} = this.state;
    return (
      <div className='PlaylistsScreen'>
        <div className='PlaylistsScreen__content'>
          <header className='PlaylistsScreen__header'>
            <div className={classNames([
              'PlaylistsScreen__searchWrapper',
              {
                'PlaylistsScreen__searchWrapper--focused': searchFocused
              }
            ])}>
              <input type='text' placeholder='search playlists' className='PlaylistsScreen__search'
                     onFocus={this.handleSearchFocused} onBlur={this.handleSearchUnfocused}/>
            </div>
          </header>
          <Playlists/>
          <Link to={`/`}>
            <a>home</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default PlaylistsScreen;