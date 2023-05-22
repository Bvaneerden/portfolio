import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../App.css';


import Container from 'react-bootstrap/Container'

function NavbarRender () {
  return  (
    <div>
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Bree Van Eerden</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/AboutMe">About Me</Nav.Link>
      <Nav.Link href='/Skills'>Skills</Nav.Link>
      <Nav.Link href="/Tools">Tools</Nav.Link>
      <Nav.Link href="/Games">Games</Nav.Link>
      

      {/* <Nav.Link href='/projects/Projects'>Projects</Nav.Link> */}
      <NavDropdown id="collasible-nav-dropdown" title='Projects'>
      <NavDropdown.Item href="http://auslan-practise.surge.sh/" target="_blank">Auslan Practise App</NavDropdown.Item>
      <NavDropdown.Item href="/RubberDuck" target="_blank">Rubber Duck Chatbot</NavDropdown.Item>
      {/* <NavDropdown.Item href="https://jobs-app-tracker.herokuapp.com/" target="_blank">Job Tracker App</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="https://coding-resources-sei53.herokuapp.com/" target="_blank">Coding Resources</NavDropdown.Item> */}
        <NavDropdown.Item href="https://bvaneerden.github.io/TicTacToe/" target="_blank">Tic Tac Toe</NavDropdown.Item>
        <NavDropdown.Item href='/projects/Projects' target="_blank">Bootcamp Projects</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

      </NavDropdown>

      <Nav.Link href="https://www.linkedin.com/in/breevaneerden/" target="_blank">Linkedin</Nav.Link>
      <Nav.Link href="https://github.com/Bvaneerden" target="_blank">Github</Nav.Link>
      {/* <Nav.Link href='/Resume'>Resume</Nav.Link> */}
    </Nav>
    

    
    <Nav>

      <Nav.Link href="/Resume">Resume</Nav.Link>
      <Nav.Link href='/Contact'>Contact Me</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    </div>

  )
  }

export default NavbarRender