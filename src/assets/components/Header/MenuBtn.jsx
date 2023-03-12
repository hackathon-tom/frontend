import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export default function MenuBtn(props) {

  // const [tolScreen, setTolScreen] = useState(window.innerWidth);
  const btnRef = useRef()

  // useEffect(() =>{
  //   if(tolScreen > 600) {
  //     btnRef.current.classList.add("hiddenBar")
  //   }else{
  //     btnRef.current.classList.remove("hiddenBar")
  //   }
  // }, [tolScreen])

  const [toggleOpen, setTogleOpen] = useState(false) ;

  const handleclick = () => {

    setTogleOpen(!toggleOpen);
    
  }

  return (
    <>
      <button ref={btnRef} className='menu-btn' onClick={handleclick}>
        <FontAwesomeIcon icon={faBarsStaggered}/>
      </button>
      {toggleOpen && props.children}
    </>
  )
}
