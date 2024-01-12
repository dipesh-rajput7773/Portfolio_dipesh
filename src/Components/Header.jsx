import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
  
      <Container>

<Navbar expand="lg" className="bg-body-tertiary">

        <Navbar.Brand href="#"><img src="./Frame 8.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Portfolio</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
           
            <Button className='custom'>Download cv 👋</Button>
          </Form>
        </Navbar.Collapse>

        </Navbar>

      </Container>

  );
}

export default Header;