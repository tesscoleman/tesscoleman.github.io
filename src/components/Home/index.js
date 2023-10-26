import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'
import noise from '../../assets/images/noise.png'
import testText from '../../assets/images/test-text.png'
import computer from '../../assets/images/computer-cropped.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['T', 'E', 'S', 'S', ' ', 'C', 'O', 'L', 'E', 'M', 'A', 'N']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
      <img className="testText" src={testText} alt="test"/>
      <img className="computerImg" src={computer} alt="computer"/>
      <div
          className="noise"
          style={{
            backgroundImage: `url(${noise})`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="text-zone">

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            {/* <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />{' '} */}
          </h1>
          <h2>Software Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br />
          <div className="contents">
            
          </div>
        </div>
      </div>
      {/* <Loader type='pacman'/> */}
    </>
  )
}

export default Home
