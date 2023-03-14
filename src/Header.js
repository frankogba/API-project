import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    <>
    
<Navbar bg="secondary" variant="dark">
    <Container>
        <Navbar.Brand href="#home">
                <h1 style={{color: "Bisque"}}> Frank Ocean</h1>
        </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Register</Nav.Link>
                    <Nav.Link href="#">Contacts</Nav.Link>
                </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                     placeholder="Search"
                        className="me-2"
                        aria-label="Search"
             />
                <Button variant="outline-success">Search</Button>
            </Form>
          
    </Container>
</Navbar>
    </>
  );
}

export default ColorSchemesExample;