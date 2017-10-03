import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingScreen from '../LandingScreen/LandingScreen';
import PlaylistsScreen from '../PlaylistsScreen/PlaylistsScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={LandingScreen}/>
          <Route exact path='/playlists' component={PlaylistsScreen}/>
        </div>
      </Router>
    );
  }
}

export default App;