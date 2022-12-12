import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function GlobalNav() {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Movie Layout</Nav.Link>
                    <Nav.Link href="#home">Blog</Nav.Link>
                    <Nav.Link href="#home">Pages</Nav.Link>
                    <Nav.Link href="#home">Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}
export default GlobalNav;
