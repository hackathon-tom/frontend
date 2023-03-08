import React from 'react'
import Map from '../components/Map'
import MapMenu from '../components/MapMenu'

import '../CSS/Map.css'

export default function MapPage() {
  return (
    <div className="MapPage">
        <MapMenu/>
        <Map/>
    </div>
  )
}
