import React, {Component} from 'react';
import classNames from 'classnames';
import './Playlists.css';
import PlaylistPreview from '../PlaylistPreview/PlaylistPreview';

class Playlists extends Component {

  props: {
    searchFilterInput: string,
    setPlaylistSelected(): void,
  };

  renderPlaylists() {
    const {searchFilterInput, setPlaylistSelected} = this.props;
    return Array.from({
      length: 18
    }).map((item, index) => (
      <PlaylistPreview key={index} setPlaylistSelected={setPlaylistSelected}/>
    ))
  }

  render() {
    return (
      <div className='Playlists'>
        {this.renderPlaylists()}
      </div>
    );
  }

}

export default Playlists;