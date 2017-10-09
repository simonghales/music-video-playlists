import React, {Component} from 'react';
import classNames from 'classnames';
import './PlaylistsScreen.css';
import PlaylistsFilterSection from '../PlaylistsFilterSection/PlaylistsFilterSection';
import PlaylistView from '../PlaylistView/PlaylistView';

class PlaylistsScreen extends Component {

  state: {
    playlistSelected: boolean,
  };

  constructor(props) {
    super(props);
    this.state = {
      playlistSelected: false,
    };
    this.setPlaylistSelected = this.setPlaylistSelected.bind(this);
  }

  setPlaylistSelected() {
    this.setState({
      playlistSelected: !this.state.playlistSelected,
    })
  }

  render() {
    const {playlistSelected} = this.state;
    return (
      <div className={classNames([
        'PlaylistsScreen',
        {
          'PlaylistsScreen--playlistSelected': playlistSelected,
        }
      ])}>
        <div className='PlaylistsScreen__content'>
          <PlaylistsFilterSection setPlaylistSelected={this.setPlaylistSelected}/>
          <div className='PlaylistsScreen__playlistViewWrapper'>
            <PlaylistView/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistsScreen;