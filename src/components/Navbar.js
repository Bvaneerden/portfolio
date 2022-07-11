import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Container from 'react-bootstrap/Container'

function Navbarr () {
  return  (
    <div>
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Bree Van Eerden</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#about-me">About Me</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
      <NavDropdown.Item href="https://jobs-app-tracker.herokuapp.com/">Job Tracker App</NavDropdown.Item>
        <NavDropdown.Item href="https://coding-resources-sei53.herokuapp.com/">Coding Resources</NavDropdown.Item>
        <NavDropdown.Item href="https://bvaneerden.github.io/TicTacToe/">Tic Tac Toe</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <Nav.Link href="https://www.linkedin.com/in/breevaneerden/">Linkedin</Nav.Link>
      <Nav.Link href="https://github.com/Bvaneerden">Github</Nav.Link>
    </Nav>
    
    <Nav>
      <Nav.Link href="#deets">Skills</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    </div>

  )
  }

export default Navbarr