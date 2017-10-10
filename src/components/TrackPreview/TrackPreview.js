import React, {Component} from 'react';
import './TrackPreview.css';
import PlaylistsFilterSection from '../PlaylistsFilterSection/PlaylistsFilterSection';

class TrackPreview extends Component {

  render() {
    return (
      <div className='TrackPreview'>
        <div className='TrackPreview__title'>
              <span className='TrackPreview__trackTitle'>
                Track Title
              </span>
        </div>
        <div className='TrackPreview__subtitle'>
          <span className='TrackPreview__duration'>3:45</span>
          <span className='TrackPreview__artist'>
                Artist Name
              </span>
        </div>
      </div>
    );
  }
}

export default TrackPreview;