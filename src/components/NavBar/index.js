import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import icon from '../../assets/images/dancinbbi2.gif'


const NavBar = ({handleClick}) => {

  return (
    <div className="nav-bar">
    {/* <img className='icon' src={icon} style={{width:'30px', position:'absolute', left:'0', padding:'8px', marginLeft:'40px', border:'solid 1px white', background:'white'}}/> */}
    {/* react router dom Link to homepage*/}
    {/* <Link className='logo' to='/'>
            <img src='' alt="logo" />
            <img className = 'sub-logo' src='' alt="" />

        </Link> */}
    <nav>
      <a exact="true" activeclassname="active" onClick={()=>{handleClick(0);}}>
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a
        exact="true"
        activeclassname="active"
        className="about-link"
        onClick={()=>{handleClick(1);}}
      >
        <FontAwesomeIcon icon={faFileCode} />
      </a>
      <a
        exact="true"
        activeclassname="active"
        className="contact-link"
        onClick={()=>{handleClick(2);}}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </nav>
  </div>
  )

      }

export default NavBar
