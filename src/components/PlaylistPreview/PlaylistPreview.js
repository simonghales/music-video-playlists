import React, {Component} from 'react';
import classNames from 'classnames';
import './PlaylistPreview.css';

class PlaylistPreview extends Component {

  render() {
    return (
      <div className='PlaylistPreview'>
        <div className='PlaylistPreview__thumb'></div>
        <div className='PlaylistPreview__info'>
          <div className='PlaylistPreview__name'>Playlist Name</div>
          <div className='PlaylistPreview__details'>
            <span>12 songs</span>, <span>46min</span>
          </div>
        </div>
      </div>
    );
  }

}

export default PlaylistPreview;