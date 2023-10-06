import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']
  const jobArray = [
    'l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>{' '}
          {/* <img src={LogoTitle} alt="developer" /> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />{' '}
        </h1>
        <h2>Frontend Developer / Swag </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <Logo />
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
