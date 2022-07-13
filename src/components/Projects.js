import Carousel from 'react-bootstrap/Carousel';
import { images } from '../Images'

function Projects() {

  return (
    <div>
      <h1>Projects</h1>

      <div className='carousel'>

      <Carousel fade interval={null} >
      <Carousel.Item>
      <h3>Jobs Tracker App</h3>
      <div className='carousel-inner'>
        <img
          className="d-block w-100"
          src={images.JobsTrackerApp}
          alt="First slide"
        />
        </div>
        <h3>First slide label</h3>
        <p>Tech stack: </p>
        <Carousel.Caption>
          <h3 className='carousel-inner' >Jobs Tracker App</h3>
          <p className='carousel-inner'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.CodingResources}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.TicTacToe}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>



    </div>
  )
}

export default Projects
