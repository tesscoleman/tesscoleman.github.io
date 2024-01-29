
import './index.scss'
import { useRef } from 'react'
import noise from '../../assets/images/noise.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Projects from '../Projects'
import NavBar from '../NavBar'

const Home = () => {

  const parallax = useRef(Parallax)

  const scrollToPage = (page) => {
    parallax.current.scrollTo(page)
  }

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
                <button
                  style={{}}
                  onClick={() => scrollToPage(2)}
                  className="flat-button"
                >
                  CONTACT ME
                </button>
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
          {/* <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center', zIndex: 20 }}
          ></ParallaxLayer> */}
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
              <div className="project-box" style={{}}>
                <div style={{margin:"1rem 0 4rem"}}>
                <h1 style={{ fontSize: '5vh', marginBottom: "4rem", marginTop: "0"}}>Projects</h1>
                <Projects />
                </div>

              </div>
            </div>
          </ParallaxLayer>
          {/* <ParallaxLayer
            offset={1.25}
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

            </div>
          </ParallaxLayer> */}
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
                <p style={{}}>Email: tesscoleman123@gmail.com</p>
                <p style={{}}>
                  Github:{' '}
                  <a href="https://github.com/tesscoleman" target="_blank" rel="noreferrer">
                    tesscoleman
                  </a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/in/tess-c-786265165/"
                    target="_blank"
                    rel="noreferrer"
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
