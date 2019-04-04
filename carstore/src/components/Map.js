import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 42.007496, lng: 21.425708 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%', paddingTop: "20px" }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;