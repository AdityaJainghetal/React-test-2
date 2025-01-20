import { Link, Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
        <>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyOnlineBooks</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="display">Display</Nav.Link>
    
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>


   
        
        </>
    )
}

export default Layout;