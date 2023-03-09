import React from 'react'
import getBuses from '../../api/getBuses';
import getShortestPath from '../../api/getShortestPath';
import getStops from '../../api/getStops';
import useRequests from '../../hooks/useRequests';
import Map from '../components/Map'
import MapMenu from '../components/MapMenu'

import '../CSS/Map.css'

export default function MapPage() {

  const { data, error, loading } = useRequests([getBuses(), getStops()]);

  const start = {
    latitude: 35.64809257392494,
    longitude: -0.6490582056408923,
  };

  const end = {
    latitude: 35.675698363045456,
    longitude: -0.6584362721377178,
  };

  const getPath = (start, end) => {
    return getShortestPath({ lat1: start.latitude, long1: start.longitude, lat2: end.latitude, long2: end.longitude });
  }

  /*
  React.useEffect(() => {
    getShortestPath({ lat1: start.latitude, long1: start.longitude, lat2: end.latitude, long2: end.longitude })
      .then((data) => console.log("path:", data))
      .catch((err) => console.log("err:", err));
  }, [])
  */

  return (
    <div className="MapPage">
      <MapMenu />
      <Map />
    </div>
  )
}
