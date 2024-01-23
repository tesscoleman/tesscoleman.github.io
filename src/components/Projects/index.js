import './index.scss'
import { useState } from 'react';

const Projects = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="project-container">
      <div className={"project-card " + (selected === 0 ? "selected" : "")} onClick={() => setSelected(0)}>
        <h2 className="project-title">Michigan Bryophytes</h2>
        <h3 className="project-desc">A website displaying the various species of moss native to Michigan.</h3>
        <h3 className="project-desc">React, Typescript, MongoDB, Node.js</h3>
      </div>
      <div className={"project-card " + (selected === 1 ? "selected" : "")} onClick={() => setSelected(1)}>
        <h2 className="project-title">MI Diaries App-Builder</h2>
        <h3 className="project-desc">An App-Builder for researchers to customize an audio-recoding mobile app.</h3>
        <h3 className="project-desc">Angular, Typescript, Flutter</h3>
      </div>
      <div className={"project-card " + (selected === 2 ? "selected" : "")} onClick={() => setSelected(2)}>
        <h2 className="project-title">Library Cataloging</h2>
        <h3 className="project-desc">A desktop application for cataloging check-out materials in the Makerspace.</h3>
        <h3 className="project-desc">Electron, HTML/CSS, Python</h3>
      </div>
    </div>
  )
}

export default Projects
