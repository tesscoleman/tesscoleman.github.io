import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faFileCode } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({handleClick}) => {

  return (
    <div className="nav-bar">
    <nav>
      <a exact="true" activeclassname="active" onClick={()=>{handleClick(0);}}>
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a
        exact="true"
        activeclassname="active"
        className="project-link"
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
