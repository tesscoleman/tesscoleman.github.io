import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import noise from '../../assets/images/noise.png'
import testText from '../../assets/images/test-text.png'
import computer from '../../assets/images/computer-cropped.png'
import star from '../../assets/images/star.png'
import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Projects from '../Projects'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['T', 'E', 'S', 'S', ' ', 'C', 'O', 'L', 'E', 'M', 'A', 'N']
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        {/* <img className="testText" src={testText} alt="test" /> */}

        <div
          className="noise"
          style={{
            backgroundImage: `url(${noise})`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <Parallax
          pages={2}
          style={{ top: '0', left: '0', overflow: 'hidden auto' }}
        >
          {/* <ParallaxLayer
            offset={0}
            speed={1}
            style={{ backgroundColor: 'rgba(138, 134, 53, 0.5)', scale:"300%"}}
          /> */}
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="landing-box-outer">
              <div className="landing-box" style={{}}>
                <h1 style={{ margin: '0' }}>Tess Coleman</h1>
                <h2>software developer</h2>
              </div>
            </div>
          </ParallaxLayer>
          {/* <ParallaxLayer
            offset={0.4}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </ParallaxLayer> */}
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <h1>Projects</h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.2}
            speed={2.6}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                height: '50%',
                width: '70%',
                borderRadius: '10px',
                background:
                  'linear-gradient(0deg, rgba(255,212,251,1) 0%, rgba(209,41,185,1) 100%)',
                textAlign: 'center',
              }}
            >
              <Projects />
            </div>
          </ParallaxLayer>
        </Parallax>

        {/* <div className="text-zone">
          <div className="title">
            <img className="star" src={star} alt="star" />
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
            <img className="star" src={star} alt="star" />
          </div>
          <h2 onMouseOver={handleClick}>
            Software Developer
            <img className="computerImg" src={computer} alt="computer" />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

          <br />
          <div className="contents"></div>
        </div> */}
      </div>
    </>
  )
}

export default Home
