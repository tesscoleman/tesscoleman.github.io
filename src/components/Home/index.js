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

  // const [page, setPage] = useState(0);

  const parallax = useRef(Parallax)

  // useEffect(() => {
  //   parallax.current.scrollTo(page);
  //   console.log("changing page to:" + page)
  // }, [page])

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
        {/* <img className="testText" src={testText} alt="test" /> */}

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
          {/* <ParallaxLayer
            offset={0}
            style={{ backgroundColor: 'rgba(138, 134, 53, 0.5)' }}
          /> */}
          {/* <ParallaxLayer offset={1} style={{ backgroundColor: '#fdf1cf' }} /> */}
          {/* <ParallaxLayer offset={2} style={{ backgroundColor: 'magenta' }} /> */}
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="landing-box-outer">
              <div className="landing-box" style={{}}>
              <a style={{position: "absolute", zIndex:20, right: "100px"}} onClick={() => scrollToPage(2)} className="flat-button">
              CONTACT ME
            </a>
                <h1 style={{ margin: '0' }}>Tess Coleman</h1>
                <h2>software developer •</h2>
                <hr />
                <p style={{ textAlign: 'center', letterSpacing: '0.7rem' }}>
                  University:
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    textDecoration: 'underline',
                    fontSize: '2.3rem',
                    letterSpacing: '1rem',
                  }}
                >
                  MICHIGAN STATE UNIVERSITY
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    fontWeight: 300,
                    margin: '1rem 0',
                    fontSize: '1.4rem',
                  }}
                >
                  B.S. Computer Science, August 2023
                </p>
                <hr />
                <div
                  style={{
                    textAlign: 'center',
                    width: '400px',
                    margin: '0 auto',
                  }}
                >
                  <hr />
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: '1.5rem',
                      margin: '1rem 0',
                      letterSpacing: '0.4rem',
                      textDecoration: 'underline',
                    }}
                  >
                    Languages & Frameworks:
                  </p>
                  <p
                    style={{
                      fontSize: '2rem',
                      fontWeight: 300,
                      letterSpacing: '0rem',
                    }}
                  >
                    React, Typescript, Node.js, MongoDB, Angular, Java, C++, SQL
                  </p>
                  <hr />
                </div>
                <hr />
                <br />
                <p style={{ textAlign: 'center', letterSpacing: '1rem' }}>
                  Relevant Coursework:
                </p>
                <div style={{ textAlign: 'center' }}>
                  <ul style={{ display:"inline-block", textAlign: "left", padding:0, letterSpacing: "0.2rem", listStyle:"square"}}>
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
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.45}
            style={{ display: 'flex', justifyContent: 'center', zIndex: 20 }}
          >
            <h1 style={{ fontSize: '6rem', marginTop: '4rem' }}>Projects</h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            factor={1.1}
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
            offset={1.25}
            speed={0.5}
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
              <div className="contact-card" style={{margin: "0", fontSize:"2rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <p style={{}}>Email: colem391@msu.edu</p>
                <p style={{}}>Github: tesscoleman</p>
              </div>
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
