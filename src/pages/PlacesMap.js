import React, { Component } from 'react';
import PlacesList from './ListPlaces';
import { placesDB } from '../components/Places/PlacesDB';


class PlacesMap extends Component {
  state = {
    places: placesDB
  }

  render() {
    return (
      <div>
        <PlacesList places={this.state.places} />
      </div>
    );
  }
}

export default PlacesMap;
