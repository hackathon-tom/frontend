import React, { useRef, useState } from 'react';

import { GoogleMap,useJsApiLoader, Marker, DirectionsService, DirectionsRenderer,  Autocomplete} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const buttonStyle = {
  position: 'absolute',
  right: '0',
  zIndex: '999'
}

const ese = {
  lat: 35.70310713370488,
  lng: -0.5833646831049463
};
const center = {
  lat: 35.723533,
  lng: -0.569790
};




export default function Map() {
  
  const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: ""})
  
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distence, setDistence] = useState('');
  const [duration, setDuration] = useState('');

  const originRef = useRef(ese);
  const destinationRef = useRef(center);

  async function calculateRoute() {
    if(originRef.current.value === '' || destinationRef.current.value === ''){
      return
    }
    const directionsService = new google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: ese,
      destination: center,
      travelMode: google.maps.TravelMode.DRIVING
    })

    

    setDirectionsResponse(result);
    setDistence(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.value);
  }

  return (
    <div className='map-container'>
      <button style={buttonStyle} className='oooooo' onClick={calculateRoute}>oooooo</button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        
        
      >
        <Marker position={center}/>
        <Marker position={ese}/>
        {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
      </GoogleMap>
    </div>
  
  )
}

