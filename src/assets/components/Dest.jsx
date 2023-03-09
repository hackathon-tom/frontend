import React from 'react'

import { faMapMarkerAlt, faEllipsisVertical, faCircleDot, faLocationCrosshairs, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../CSS/Dest.css'




export default function Dest() {
  
  const [inputWinrah, setInputWinRah] = React.useState();

  React.useEffect(()=> {setInputWinRah(document.getElementById('winrah'))}, [])

  
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
