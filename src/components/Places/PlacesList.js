import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class PlacesList extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired
  };

  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { places } = this.props;
    const { query } = this.state;

    let showingPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingPlaces = places.filter(place => match.test(place.name));
    } else {
      showingPlaces = places;
    }

    showingPlaces.sort(sortBy('name'));
    return (
      <div className="list-places">
        {/* {JSON.stringify(this.state)} to view the searched query on UI*/}
        <div className="list-places-top">
          <input
            className="search-places"
            type="text"
            placeholder="search places"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>

        {showingPlaces.length !== places.length && (
          <div className="showing-places">
            <span>
              Now Showing {showingPlaces.length} of {places.length} total
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ol className="place-list">
          {showingPlaces.map(place => (
            <li key={place.id} className="place-list-item">
              <div
                className="place-avatar"
                style={{
                  backgroundImage: `url(${place.url})`
                }}
              />
              <div className="place-details">
                <p> {place.name}</p>
                <p>{place.vicinity}</p>
                <p>{place.price_leve}</p>
                <p>{place.rating}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.array.isRequired
};

export default PlacesList;
