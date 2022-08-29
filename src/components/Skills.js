import { images, imageNames } from '../Images'
// import Wheel from './tools/TestingFolder/Wheel'

function Skills() {

  function cantTouchThis(e) {
    console.log(e.target)

    e.target.style.top = "" + (Number(Math.random() * (1 - 400) + 1)) + "px"

    e.target.style.right = "" + Number(Math.random() * (1 - 310) + 1) + "px"
}

  return (
    <div className="skillspage">
      <h1>Skills</h1>

      {/* <Wheel></Wheel> */}
      <div className="skillsBoxAll">

      {images.skills.map((skill, i) =>
      <div className="skillsBoxItem" key={i}>
      <img key={i} className="skills cant_touch_this" src={skill.image} onMouseOver={cantTouchThis} />
      <p className="skillsName">{skill.title}</p>
      </div>
          )}
          </div>
    </div>
  )
}

export default Skills