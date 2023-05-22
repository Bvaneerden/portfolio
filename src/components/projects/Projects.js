import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../Images'

function Projects() {

  return (
    <div>
      <h1>Bootcamp Projects</h1>

      <div className='carousel'>

      <Carousel fade interval={null} >
      <Carousel.Item>
      <h3>Jobs Tracker App</h3>
      <h5>SPA designed to collate information for quick reference</h5>
      <div>Tech stack: HTML, CSS, JavaScript, React, Express</div>
      <div className='carousel-inner'>
        <img
          className="d-block w-100"
          src={images.other[2].image}
          alt="First slide"
        />
       
        </div>
        
        {/* <p>Tech stack: HTML, CSS, JavaScript, React, Express</p> */}
        <Carousel.Caption>
        {/* <h3>SPA designed to collate information for quick reference tracking time sensitive information</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3>Coding Resources App</h3>
      <h5>Full stack CRUD app, includes a carousel filter and animations</h5>
      <div>Tech stack: HTML, CSS, Ruby, Sinatra, JavaScript, Bootstrap</div>

      <div className='carousel-inner'>
        <img
          className="d-block w-100"
          src={images.other[0].image}
          alt="First slide"
        />
        </div>
        
        
        <Carousel.Caption>
          {/* <h3 className='carousel-inner' >Jobs Tracker App</h3>
          <p className='carousel-inner'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3>Tic Tac Toe</h3>
      <h5>Easter egg filled game, can you find them all</h5>
        <div>Tech stack: HTML, CSS, JavaScript</div>
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
