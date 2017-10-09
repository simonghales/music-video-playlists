import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import classNames from 'classnames';
import './PlaylistsFilterSection.css';
import Playlists from '../Playlists/Playlists';

class PlaylistsFilterSection extends Component {

  props: {
    setPlaylistSelected(): void,
  };

  state: {
    searchFocused: boolean,
    searchFilterInput: string,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchFocused: false,
      searchFilterInput: '',
    };
    this.handleSearchFocused = this.handleSearchFocused.bind(this);
    this.handleSearchUnfocused = this.handleSearchUnfocused.bind(this);
    this.updateSearchFilterInput = this.updateSearchFilterInput.bind(this);
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

  updateSearchFilterInput(event: any) {
    this.setState({
      searchFilterInput: event.target.value,
    });
  }

  render() {
    const {searchFocused, searchFilterInput} = this.state;
    const {setPlaylistSelected} = this.props;
    return (
      <div className='PlaylistsFilterSection'>
        <header className='PlaylistsFilterSection__header'>
          <div className={classNames([
            'PlaylistsFilterSection__searchWrapper',
            {
              'PlaylistsFilterSection__searchWrapper--focused': searchFocused
            }
          ])}>
            <input type='text' placeholder='SEARCH PLAYLISTS' className='PlaylistsFilterSection__search'
                   value={searchFilterInput}
                   onFocus={this.handleSearchFocused} onBlur={this.handleSearchUnfocused}
                   onChange={this.updateSearchFilterInput}/>
          </div>
        </header>
        <Playlists searchFilterInput={searchFilterInput} setPlaylistSelected={setPlaylistSelected}/>
        <Link to={`/`}>
          <a>home</a>
        </Link>
        <div onClick={setPlaylistSelected}>toggle</div>
      </div>
    );
  }
}

export default PlaylistsFilterSection;