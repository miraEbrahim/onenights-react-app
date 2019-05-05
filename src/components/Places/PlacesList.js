import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import './placeslist.css';

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
  //PlacesList.js-To-DO-LINE-37*** limit places result to fit page height
    return (
       
            <div className="row vertical-align">
                <div className="col-xs-8">
                <form class="form-inline mt-2 mt-md-0">
                    
                        {/* {JSON.stringify(this.state)} to view the searched query on UI*/}
                        <input
                            className="search form-control"
                            type="text"
                            placeholder="search places"
                            value={this.state.query}
                            onChange={event => this.updateQuery(event.target.value)}
                        />

                        {/* PlacesList.js-To-DO-LINE-50*** connect the search button below to search bar */}
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    
                    
                        {showingPlaces.length !== places.length && (
                            <div className="showing-places">
                                <span>
                                    Now Showing {showingPlaces.length} of {places.length} total
                                </span>
                                <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={this.clearQuery}>Show All</button>
                            </div>
                        )}
                    
                </form>
                </div>
            
            <ol className="place-list">
                {showingPlaces.map(place => (
                    <li key={place.id} className="place-list-item">
                        <div className="card w-75">
                            <div className="card-body">
                                <h5 className="card-title">{place.name}</h5>
                                <p className="card-text">{place.vicinity}</p>
                                <p className="card-text"><small class="text-muted">{place.rating}</small></p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
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
