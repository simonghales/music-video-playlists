import React, {Component} from 'react';
import './PlaylistView.css';
import PlaylistsFilterSection from '../PlaylistsFilterSection/PlaylistsFilterSection';

class PlaylistView extends Component {

  render() {
    return (
      <div className='PlaylistView'>
        <header className='PlaylistView__header'>
          <div className='PlaylistView__thumb'></div>
          <div className='PlaylistView__info'>
            <div className='PlaylistView__name'>Playlist Name</div>
            <div className='PlaylistView__details'>
              <span>12 songs</span>, <span>46min</span>
            </div>
          </div>
          <div className='PlaylistView__generateWrapper'>
            <a className='PlaylistView__generate'>
              <span>Generate YouTube Playlist</span>
            </a>
          </div>
        </header>
        <div>
          <div>
            Title Artist Album Added Length
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistView;