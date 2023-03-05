import React from 'react'
import { useParams } from 'react-router-dom';
import pagelogo from '../IMG/DigitalDialogue.svg'

export default function Page() {
  const { id } = useParams();
  return (
    <div className='page'>
      <img className='pagelogo' src={pagelogo} alt="pagelogo" />
      <h1>Wellcome to Page {id} </h1>
    </div>
  )
}
