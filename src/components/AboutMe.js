import { images } from '../Images'
import Button from 'react-bootstrap/Button';
import Skills from './Skills'

function AboutMe() {

  return (
    <div>
      <h1>About me</h1>

      <h2>Software Engineer / Full Stack Developer / Osteopath</h2>
       <img src={images.other[8].image} alt="" />
       <h2>Currently for hire</h2>
       <Button href='/Contact' variant="outline-dark">Contact me here!</Button>
       <Skills></Skills>

    </div>
  )
}

export default AboutMe