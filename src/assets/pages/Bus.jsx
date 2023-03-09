import React from 'react'
import getBuses from '../../api/getBuses';
import getStops from '../../api/getStops';
import useRequest from '../../hooks/useRequest'
import useRequests from '../../hooks/useRequests';

import { useJsApiLoader, Marker, DirectionsService, DirectionsRenderer, } from '@react-google-maps/api';
//import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import LoadingLayout from '../layouts/LoadingLayout';
import ErrorLayout from '../layouts/ErrorLayout';


import { FaBus } from "react-icons/fa";

import "../CSS/Bus.css"

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 35.70310713370488,
  lng: -0.5833646831049463
};

const mapOptions = {
  "mapTypeControl": true,
  "fullscreenControl": false,
  "maxZoom": 20,
  "minZoom": 3,
  "rotateControl": true,
  "scaleControl": false,
  "streetViewControl": true,
  "mapTypeId": "roadmap",
  "zoomControl": true,
  "styles": [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e9e9e9"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dedede"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    }
  ]
};

export default function Bus() {
  const { data, error, loading } = useRequests([getBuses(), getStops()]);

  const [selectedStop, setSelectedStop] = React.useState(null);

  //if (!isLoaded) return <LoadingLayout />

  if (error) return <ErrorLayout />

  if (loading) return <LoadingLayout />

  const handleMouseEnter = () => {
    console.log("enter");
  }

  const handleMouseLeave = () => {
    console.log("leave");
  }


  const handleClick = () => {

  }

  return (
    <div>
      <GoogleMap
        apiKey=""
        defaultCenter={center}
        defaultZoom={14}
        options={mapOptions}
        mapMinHeight="600px"
      >
        {data[1].map(({ latitude, longitude }, index) => (
          <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index} lat={parseFloat(latitude)} lng={parseFloat(longitude)} className="arret-bus">
            <FaBus color='black' size={32} />
          </div>
        ))}
      </GoogleMap>
      {selectedStop !== null ? (
        <div>
          <div>{selectedStop.name}</div>
          <div>{selectedStop.latitude}</div>
          <div>{selectedStop.longitude}</div>
        </div>
      ) : null}
      <ul>
        {data[0].map((bus) => {
          return (
            <li key={bus.id}>{bus.name} : {bus.price}</li>
          )
        })}
      </ul>
      <br />
      <br />
      <br />
      <ul>
        {data[1].map((bus) => {
          return (
            <li key={bus.id}>{bus.name} : {bus.price}</li>
          )
        })}
      </ul>
    </div>
  )
}
