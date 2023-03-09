import React from 'react'

import { faMapMarkerAlt, faEllipsisVertical, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Input from './Input'

import { FaMapMarkerAlt, FaDotCircle, FaEllipsisV } from "react-icons/fa"

import '../CSS/Dest.css'

export default function Picker() {

  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  return (
    <div className='position-picker'>
      <Input
        inputType={"text"}
        leftIcon={<FaMapMarkerAlt />}
        placeholder={"Choose your starting point"}
        value={start}
        setValue={setStart}
      />
      <FaEllipsisV size={20} opacity={0.9} />
      <Input
        inputType={"text"}
        leftIcon={<FaDotCircle />}
        placeholder={"Choose your destination"}
        value={end}
        setValue={setEnd}
      />
    </div>
  )
}
