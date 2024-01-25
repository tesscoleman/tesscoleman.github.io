import './index.scss'
import { useState } from 'react'
import ProjectCard from '../ProjectCard'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

const Projects = () => {
  const [selected, setSelected] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const transition = useTransition(isOpen, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  })




function handleClick (index) {
    setSelected(index)
    if (index === selected) {
      setIsOpen(false)
      setSelected(null)
  
    } else {
      setIsOpen(true)

    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <animated.div className="project-container" style={{flex: 2}}>
        <div
          className={'project-card ' + (selected === 0 ? 'selected' : '')}
          onClick={() => handleClick(0)}
        >
          <h2 className="project-title">Michigan Bryophytes</h2>
          {isOpen ? null : <>
            <h3 className="project-desc">
            A website displaying the various species of moss native to Michigan.
          </h3>
          <h3 className="project-desc">React, Typescript, MongoDB, Node.js</h3> </>}

        </div>
        <div
          className={'project-card ' + (selected === 1 ? 'selected' : '')}
          onClick={() => handleClick(1)}
        >
          <h2 className="project-title">MI Diaries App-Builder</h2>
          {isOpen ? null : <>
            <h3 className="project-desc">
            An App-Builder for researchers to customize an audio-recording mobile
            application.
          </h3>
          <h3 className="project-desc">Angular, Typescript, Flutter</h3>
          </>}

        </div>
        <div
          className={'project-card ' + (selected === 2 ? 'selected' : '')}
          onClick={() => handleClick(2)}
        >
          <h2 className="project-title">Library Cataloging</h2>
          {isOpen ? null : <>
            <h3 className="project-desc">
            A desktop application for cataloging check-out materials in the
            Makerspace.
          </h3>
          <h3 className="project-desc">Electron, HTML/CSS, Python</h3>
          </>}

        </div>
      </animated.div>
      {transition((style, isOpen) => (
        <>
          {(isOpen && selected !== null) ? (
            <animated.div style={{...style, flex: "3", maxHeight: "500px", width: "500px"}}>
              <ProjectCard index={selected} style={style}/>
            </animated.div>
          ) : null}
        </>
      ))}
    </div>
  )
}

export default Projects
