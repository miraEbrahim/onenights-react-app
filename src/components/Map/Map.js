import React from 'react';
import scriptLoader from 'react-async-script-loader';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faTimes, faDirections, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { G_API, harrods } from './MapData';
import './mapstyle.css'
import { mapDarkStyle } from './MapStyle';
import { placesDB } from '../Places/PlacesDB';


library.add( fab, faSearch, faBars, faTimes , faDirections, faMoneyBill );

class Map extends React.Component {
    
  constructor(props) {
    super();
    this.state = {
        map: ""
    };
  }

  componentWillReceiveProps({isScriptLoadSucceed}){
    if (isScriptLoadSucceed) {
        let json = placesDB;
      const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: harrods,
          styles: mapDarkStyle 
      });
      this.setState({map:map});

  // Looping through all the entries from the JSON data
  for(var i = 0; i < json.length; i++) {
    
    // Current object
    var obj = json[i];

    // Adding a new marker for the object
    let marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(obj.geometry.location.lat,obj.geometry.location.lng),
      map: map,
      title: obj.name // this works, giving the marker a title with the correct title
    });
    
    // Adding a new info window for the object
    var clicker = addClicker(marker, obj.name);

  } // end loop
  
  // Adding a new click event listener for the object
  function addClicker(marker, content) {
    window.google.maps.event.addListener(marker, 'click', function() {
      let infowindow;
      if (infowindow) {window.infowindow.close();}
      infowindow = new window.google.maps.InfoWindow({content: content});
      infowindow.open(map, marker);
      
    });
  }

  //Map.js-To-DO-LINE-65*** add infowindow content as seperate entity 
 
    }
    else {
      //logging Map Error handeling 
      alert("Opps,,, Cann't Load Google Map!");
      console.log("Opps,,, Cann't Load Google Map!");
      this.setState({requestWasSuccessful: false});

    }
  }

  //handel map error
  componentDidMount() {
    window.gm_authFailure = function() {
      alert("Google MAPS failed to load")
      console.log("Google MAPS failed to load")
    }
  };

  render(){
    return (
      <div className="App">
       
          <main role="main" className="map-body">
            <div id="map" role="application"></div>
          </main>
        </div>
        
    );
}
    
}

export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=${G_API}`]
)(Map)