import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import icon from '../../assets/images/dancinbbi2.gif'

const NavBar = () => (
  <div className="nav-bar">
    {/* <img className='icon' src={icon} style={{width:'30px', position:'absolute', left:'0', padding:'8px', marginLeft:'40px', border:'solid 1px white', background:'white'}}/> */}
    {/* react router dom Link to homepage*/}
    {/* <Link className='logo' to='/'>
            <img src='' alt="logo" />
            <img className = 'sub-logo' src='' alt="" />

        </Link> */}
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </nav>
  </div>
)

export default NavBar
