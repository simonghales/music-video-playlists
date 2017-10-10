import React, {Component} from 'react';
import './PlaylistView.css';
import PlaylistsFilterSection from '../PlaylistsFilterSection/PlaylistsFilterSection';
import TrackPreview from '../TrackPreview/TrackPreview';

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
        <div className='PlaylistView__tracks'>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
          <TrackPreview/>
        </div>
      </div>
    );
  }
}

export default PlaylistView;