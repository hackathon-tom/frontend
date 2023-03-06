import React from 'react';
import { useMemo } from 'react';

import { GoogleMap,useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map() {
  // const google = window.google;
  const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: ""})



  return (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  
  )
}
