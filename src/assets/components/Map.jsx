import React from 'react';
import { useMemo } from 'react';

import { GoogleMap,useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 35.70310713370488,
  lng: -0.5833646831049463
};

export default function Map() {
  // const google = window.google;
  const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: ""})



  return (
    <div className='map-container'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  
  )
}
