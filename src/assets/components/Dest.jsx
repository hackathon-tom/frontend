import React from 'react'

import { faMapMarkerAlt, faEllipsisVertical, faCircleDot, faLocationCrosshairs, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getShortestPath from '../../api/getShortestPath'

import '../CSS/Dest.css'

const center = {
  lat: 35.723533,
  lng: -0.569790
};



export default function Dest() {
  
  const [inputWinrah, setInputWinRah] = React.useState();
  const [data, setData] = React.useState([]);

  React.useEffect(()=> {setInputWinRah(document.getElementById('winrah'))}, [])
  React.useEffect(()=> {console.log(data)}, [data])

  
  let winRah = {lat:'', lng:''}

  function setValueInputDest () {

    let val = winRah.lat + ' / ' + winRah.lng;
    return val;
  }

  function getLocation (e) {
    const successCallback = (position) => {
      winRah.lat = position.coords.latitude;
      winRah.lng = position.coords.longitude;
      let jsp = setValueInputDest();
      getShortestPath({ 
        lat1: winRah.lat,
        long1: winRah.lng,
        lat2: center.lat,
        long2: center.lng
      } ).then(setData)
      console.log(jsp)
      console.log(inputWinrah)
      inputWinrah.value = jsp;
    };
    
    const errorCallback = (error) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  }

  
  

  return (
    <div className='Dest'>
        <div className="dest-destination">
            <FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon>
            <input id='winrah' type="text" placeholder='choose your location' />
            <button className='gps' onClick={getLocation}> <FontAwesomeIcon icon={faLocationCrosshairs}></FontAwesomeIcon> </button>
        </div>
        <div className="separi">
            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
        </div>
        <div className="dest-arrive">
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
            <input type="text" placeholder='choose your destination'/>
            <button className='gps' > <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> </button>
        </div>
    </div>
  )
}
