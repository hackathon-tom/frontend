import React from 'react'
import { Link } from 'react-router-dom'

export default function Choose() {
  return (
    <div className='choose'>
        <h1>where do you wanna go</h1>
        <input type="text" placeholder='Your Location'/>
        <Link to='/choose/map'><button>Choose on Map</button></Link>
        <hr />
        <input type="text" placeholder='Your Destination'/>
        <Link to='/choose/map'><button>Choose on Map</button></Link>
    </div>
  )
}
