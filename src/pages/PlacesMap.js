import React, { Component } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { placesDB } from '../components/Places/PlacesDB';
import Map from '../components/Map/Map';
import './placesmap.css';

class PlacesMap extends Component {
  state = {
    places: placesDB
  }

  render() {
    return (
      <div className="places-map-container">
      <div className="row">
        <div className="col-4">
        <PlacesList places={this.state.places} />
        </div>
        <div className="col-8">
        <Map />
        </div>
      </div>
    </div>
    );
  }
}

export default PlacesMap;
