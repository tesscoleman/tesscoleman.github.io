import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import noise from '../../assets/images/noise.png'
import testText from '../../assets/images/test-text.png'
import computer from '../../assets/images/computer-cropped.png'
import star from '../../assets/images/star.png'
import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Projects from '../Projects'
import NavBar from '../NavBar'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['T', 'E', 'S', 'S', ' ', 'C', 'O', 'L', 'E', 'M', 'A', 'N']

  const parallax = useRef(Parallax)

  const scrollToPage = (page) => {
    parallax.current.scrollTo(page)
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <NavBar handleClick={scrollToPage} />
      <div className="container home-page">
        <div
          className="noise"
          style={{
            backgroundImage: `url(${noise})`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <Parallax
          ref={parallax}
          pages={3}
          style={{ top: '0', left: '0', overflow: 'hidden auto' }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="landing-box-outer">
              <div className="landing-box" style={{}}>
                <a
                  style={{  }}
                  onClick={() => scrollToPage(2)}
                  className="flat-button"
                >
                  CONTACT ME
                </a>
                <h1 className="heading-1">Tess Coleman</h1>
                <h2>software developer •</h2>
                <hr />
                <div className="text-center">
                  <p className="university-text">University:</p>
                  <p className="university-text-2">MICHIGAN STATE UNIVERSITY</p>

                  <p className="university-text-3">
                    B.S. Computer Science, August 2023
                  </p>
                  <div className="double-hr" />
                  <div className="languages-container">
                    <p className="languages-heading">LANGUAGES & FRAMEWORKS:</p>
                    <p className="languages-text">
                      React, Typescript, Node.js, MongoDB, Angular, Java, C++,
                      SQL
                    </p>
                    {/* <hr /> */}
                  </div>
                  <br />
                  <p className="coursework-heading">RELEVANT COURSEWORK:</p>

                  <ul className="coursework-list">
                    <li>Computer Graphics (OpenGL, C++, WebGL)</li>
                    <li>Media Processing & Computing (C++)</li>
                    <li>Collaborative Design (Capstone Project)</li>
                    <li>Database Systems (SQL)</li>
                    <li>Mobile Application Development (Java)</li>
                    <li>Object-Oriented Software Development (C++)</li>
                    <li>Algorithm Engineering</li>
                    <li>Algorithms and Data Structures</li>
                  </ul>
                </div>

                <div className="double-hr" />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center', zIndex: 20 }}
          >
            <h1 style={{ fontSize: '6rem', marginTop: '4rem' }}>Projects</h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            factor={1}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className="project-box-outer">
              <div className="project-box" style={{}}></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.2}
            speed={0.6}
            style={{ display: 'flex', justifyContent: 'center', zIndex: 20 }}
          >
            <div
              style={{
                position: 'relative',
                height: '60%',
                width: '70%',
                textAlign: 'center',
              }}
            >
              <Projects />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className="contact-card-outer">
              <div
                className="contact-card"
                style={{
                  position: 'absolute',
                  zIndex: '100',
                  margin: '0',
                  fontSize: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <p style={{ textDecoration: 'underline' }}>Tess Coleman</p>
                <p style={{}}>Email: colem391@msu.edu</p>
                <p style={{}}>
                  Github:{' '}
                  <a href="https://github.com/tesscoleman" target="_blank">
                    tesscoleman
                  </a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/in/tess-c-786265165/"
                    target="_blank"
                  >
                    linkedin.com/in/tess-c-786265165
                  </a>
                </p>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default Home
