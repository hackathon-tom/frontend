import React from 'react'
import { useParams } from 'react-router-dom';

export default function Page() {
  const { id } = useParams();
  return (
    <div className='page'>
      <img className='pagelogo' src={""} alt="pagelogo" />
      <h1>Wellcome to Page {id} </h1>
    </div>
  )
}
