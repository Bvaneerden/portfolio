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
          src={images.other[2].image}
          alt="First slide"
        />
        </div>
        <h3>SPA designed to collate information for quick reference tracking time sensitive information</h3>
        <p>Tech stack: HTML, CSS, JavaScript, React, Express</p>
        <Carousel.Caption>
          {/* <h3 className='carousel-inner' >Jobs Tracker App</h3>
          <p className='carousel-inner'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3>Coding Resources App</h3>
      <div className='carousel-inner'>
        <img
          className="d-block w-100"
          src={images.other[0].image}
          alt="First slide"
        />
        </div>
        <h3>Full stack CRUD app for collating resources to assist learning, includes a carousel filter and animations</h3>
        <p>Tech stack: HTML, CSS, JavaScript, Bootstrap, Ruby</p>
        <Carousel.Caption>
          {/* <h3 className='carousel-inner' >Jobs Tracker App</h3>
          <p className='carousel-inner'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3>Tic Tac Toe</h3>
      <h3>Easter egg filled game, can you find them all</h3>
        <p>Tech stack: HTML, CSS, JavaScript</p>
      <div className='carousel-inner'>
        <img
          className="d-block w-100"
          src={images.other[1].image}
          alt="First slide"
        />
        </div>

        <Carousel.Caption>
          {/* <h3 className='carousel-inner' >Jobs Tracker App</h3>
          <p className='carousel-inner'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    </div>



    </div>
  )
}

export default Projects
