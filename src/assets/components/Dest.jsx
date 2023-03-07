import React from 'react'

import { faMapMarkerAlt, faEllipsisVertical, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../CSS/Dest.css'

export default function Dest() {
  return (
    <div className='Dest'>
        <div className="dest-destination">
            <FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon>
            <input type="text" placeholder='choose your location'/>
        </div>
        <div className="separi">
            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
        </div>
        <div className="dest-arrive">
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
            <input type="text" placeholder='choose your destination'/>
        </div>
    </div>
  )
}
