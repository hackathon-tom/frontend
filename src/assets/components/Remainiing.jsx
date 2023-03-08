import React from 'react'
import Stations from './Stations'

export default function Remainiing() {
  return (
    <div className='remaining'>
        <h4># Remaining Steps</h4>

        <Stations name={"Station Sntf"} type={"Dans le bus"} km={7} min={5} />
        <Stations name={"Station Sntf"} type={"Dans le bus"} km={7} min={5} />
        <Stations name={"Station Sntf"} type={"Dans le bus"} km={7} min={5} />
        <Stations name={"Station Sntf"} type={"Dans le bus"} km={7} min={5} />

    </div>
  )
}
