import './index.scss'
import michiganBryophytesImg from '../../assets/images/michigan-bryophytes-page.PNG'
import miDiariesImg from '../../assets/images/mi-diaries-page.PNG'

const ProjectCard = (props) => {
  const imgMap = {
    0: michiganBryophytesImg,
    1: miDiariesImg,
  }
  return (
    <>
      <div className="project-open">
        <div className="project-card-image">
          <img
            src={imgMap[props.index]}
            style={{ width: '100%', maxHeight: '50%', objectFit: "cover" }}
          />
        </div>
        <div className="project-card-links">
          <p style={{ fontSize: '2rem' }}>
            A collection of the species of moss native to Michigan. Created
            using React, Typescript, MongoDB and Node.js.
          </p>
          <p style={{ fontSize: '2rem' }}>
            <a href="https://michigan-bryophytes.onrender.com/" target="_blank">
              https://michigan-bryophytes.onrender.com/
            </a>
          </p>
          <p style={{ fontSize: '2rem' }}>
            <a
              href="https://github.com/tesscoleman/michigan-bryophytes"
              target="_blank"
            >
              https://github.com/tesscoleman/michigan-bryophytes/
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
