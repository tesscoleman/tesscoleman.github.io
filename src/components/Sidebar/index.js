import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        {/* react router dom Link to homepage*/}
        <Link className='logo' to='/'>
            <img src='' alt="logo" />
            <img className = 'sub-logo' src='' alt="" />

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope}  />
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://google.com/' >
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://google.com/' >
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul> */}
    </div>
)

export default Sidebar;