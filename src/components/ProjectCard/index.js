import './index.scss'
import michiganBryophytesImg from '../../assets/images/michigan-bryophytes-page.PNG'
import miDiariesImg from '../../assets/images/mi-diaries-page-2.png'
import libraryImg from '../../assets/images/library-inventory-app.png'
import { useSpring, animated, useTransition } from '@react-spring/web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = (props) => {
  const map = {
    0: {
      image: michiganBryophytesImg,
      description:
        'A website I created to catalog the species of moss native to Michigan and data such as recorded occurrences, characterstics & more. Created using React, Typescript, MongoDB and Node.js.',
    },
    1: { image: miDiariesImg,
    description:
      'A web application and base mobile application created collaboratively within the CSE 498 Capstone Project for the MSU Department of Linguistics. I worked primarily on the front end of the web application using Angular and Typescript.' },
    2: { image: libraryImg,
      description: "A desktop application I created at my job at MSU's library to keep track of checked out Makerspace equipment. Created using Electron."}
  }

  const spring = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
  })

  const transition = useTransition(props.index, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
  })

  return (
    <>
      {transition((style, index) => (
        <>
          <animated.div className="project-open" style={{...style}}>
            <div className="project-card-image" style={{width: "auto", }}>
              <img
                src={map[props.index].image}
                style={{ maxWidth: props.index === 2 ? "400px" : "100%"}}
              />
            </div>
            <div className="project-card-links">
              <p className='description'>{map[props.index].description}</p>
              <div className="links">
                {props.index === 0 ? (
                  <>
                    <p className="link">
                    <FontAwesomeIcon icon={faGlobe} style={{verticalAlign: "middle", margin: "6px"}}/>
                      <a
                        href="https://michigan-bryophytes.onrender.com/"
                        target="_blank"
                      >
                        https://michigan-bryophytes.onrender.com/
                      </a>
                      {" "}(May be slow to load.)
                    </p>
                    <p className="link">
                    <FontAwesomeIcon icon={faGithub} style={{verticalAlign: "middle",  margin: "6px"}}/>
                      <a
                        href="https://github.com/tesscoleman/michigan-bryophytes"
                        target="_blank"
                      >
                        https://github.com/tesscoleman/michigan-bryophytes/
                      </a>
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          </animated.div>
        </>
      ))}
    </>
  )
}

export default ProjectCard
