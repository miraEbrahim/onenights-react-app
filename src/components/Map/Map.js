import React from 'react';
import scriptLoader from 'react-async-script-loader';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faTimes, faDirections, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { G_API, harrods } from './MapData';
import './mapstyle.css'
import { mapDarkStyle } from './MapStyle';


library.add( fab, faSearch, faBars, faTimes , faDirections, faMoneyBill );

class Map extends React.Component {
  constructor(props) {
    super();
    this.state = {
        map:""
    };
  }

  componentWillReceiveProps({isScriptLoadSucceed}){
    if (isScriptLoadSucceed) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: harrods,
          styles: mapDarkStyle 
      });
      this.setState({map:map});

   
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