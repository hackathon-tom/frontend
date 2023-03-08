import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Dest from './Dest'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Remainiing from './Remainiing'

export default function MapMenu() {
  return (
    <div className="map-menu">
        <div className="exit-menu">
            <button className="exit-btn"><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
            <h2>Trolli</h2>
        </div>
        <div className="dest-onmenu">
            <h4># Where To Go</h4>
            <Dest/>
            <Remainiing/>
        </div>
    </div>
  )
}
