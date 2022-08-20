import { images, imageNames } from '../Images'
import Wheel from './Wheel'

function Skills() {

  return (
    <div className="skillspage">
      <h1>Skills</h1>

      {/* <Wheel></Wheel> */}
      <div className="skillsBoxAll">

      {images.skills.map((skill, i) =>
      <div className="skillsBoxItem">
      <img key={i} className="skills" src={skill.image} />
      <p className="skillsName">{skill.title}</p>
      </div>
          )}
          </div>
       

      {/* <img className="skills" src={images.skills[0].image} alt="HTML5" />
      <img className="skills" src={images.skills[1].image} alt="CSS" />
      <img className="skills" src={images.skills[2].image} alt="JavaScript" />
      <img className="skills" src={images.skills[3].image} alt="bootstrap" />
      <img className="skills" src={images.skills[4].image} alt="node" />
      <img className="skills" src={images.skills[5].image} alt="ruby" />
      <img className="skills" src={images.skills[6].image} alt="sinatra" />
      <img className="skills" src={images.skills[7].image} alt="mySQL" />
      <img className="skills" src={images.skills[8].image} alt="postgresql" />
      <img className="skills" src={images.skills[9].image} alt="react" />
      <img className="skills" src={images.skills[10].image} alt="github" />
       */}


    </div>
  )
}

export default Skills