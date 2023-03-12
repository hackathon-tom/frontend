import {React} from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

import LanguagePicker from './LanguagePicker'


export default function NavBar() {
    
  return (
    <div className='header-rightbar'>
        <div className="header-navbar">
            <ul>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={"/bus"} >Bus</Link></li>
                <li><Link to={"/information"} >Information</Link></li>
            </ul>
        </div>
        <div className="header-right">
            <LanguagePicker />
            <Link to="/login"><button className="signin"><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon> Login</button></Link>
        </div>

    </div>
   
  )
}
