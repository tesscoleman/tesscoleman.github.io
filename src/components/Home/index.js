import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['T','E','S','S',' ','C','O','L','E','M','A','N']
  const jobArray = [
    's','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r'
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
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          {/* <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />{' '} */}
        </h1>
        <h2>Frontend Developer / Swag </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <div className='contents'></div>
      </div>
    </div>
    {/* <Loader type='pacman'/> */}
    </>
  )
}

export default Home
