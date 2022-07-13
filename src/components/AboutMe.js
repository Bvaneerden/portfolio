import { images, imageNames } from '../Images'
import Button from 'react-bootstrap/Button';

function AboutMe() {

  return (
    <div>
      <h1>About me</h1>

      <h2>Software Engineer / Full Stack Developer / Osteopath</h2>
       <img src={images.profilepic} alt="" />
       <h2>Currently for hire</h2>
       <Button href='/Contact' variant="outline-dark">Contact me here!</Button>

    </div>
  )
}

export default AboutMe