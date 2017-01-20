import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const GoogleMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  />
));
const GoogleMaps = props => {
  return (
    <GoogleMapComponent
      lat={props.lat}
      lon={props.lon}
      containerElement={
        <div style={{ height: '100%' }} />
      }
      mapElement={
        <div style={{ height: '100%' }} />
      }
      onMapLoad={_.noop}
      onMapClick={_.noop}
    />
  );
};

export default GoogleMaps;
