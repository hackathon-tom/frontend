import { faCircle, faListDots, faMapMarkerAlt, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Dest() {
  return (
    <div className='Dest'>
        <div className="dest-destination">
            <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
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
