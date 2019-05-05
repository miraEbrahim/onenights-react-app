import React, { Component } from 'react';
import PlacesList from './components/Places/PlacesList';
import { placesDB } from './components/Places/PlacesDB';
import Map from './components/Map/Map';

class App extends Component {
  state = {
    places: placesDB
  }

  render() {
    return (
      <div>
        <PlacesList places={this.state.places} />
        <Map />
      </div>
    );
  }
}

export default App;
