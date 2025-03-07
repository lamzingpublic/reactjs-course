import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">My Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

            <Nav.Link as={Link} to="/About">About</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;