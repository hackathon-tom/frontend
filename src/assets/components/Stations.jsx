import React from 'react'

export default function Stations (props) {
  return (
    <div className="station">
        <div className="station-left">
          <div className="station-icon">ico</div>
          <div className="nametype-station">
            <h4>{props.name}</h4>
            <p>{props.type}</p>
          </div>
        </div>
        <div className="kmmin-stations">
            <p>{props.min} mins</p>
            <p>{props.km} kms</p>
        </div>
    </div>
  )
}
