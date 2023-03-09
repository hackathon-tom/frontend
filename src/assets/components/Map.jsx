import React from 'react';
import { useMemo } from 'react';

import { GoogleMap, useJsApiLoader, Marker, DirectionsService, DirectionsRenderer, } from '@react-google-maps/api';
import useRequests from '../../hooks/useRequests';
import getBuses from '../../api/getBuses';
import getStops from '../../api/getStops';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 35.70310713370488,
  lng: -0.5833646831049463
};


export default function Map() {

  const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: "" })

  const { data, error, loading } = useRequests([getStops(), getBuses()]);

  React.useState(() => {
    if (loading)
      console.log("data:", data);
    if (error)
      console.log("error", error);
  }, [loading]);

  return (
    <div className='map-container'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>

  )
}

