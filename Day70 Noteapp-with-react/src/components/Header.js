import React from "react";
import  {Link}  from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>    
        <Navbar.Brand>Notes Taking App</Navbar.Brand>
        <Navbar.Brand> <Link to={`/`}>
      New Notes
      </Link>
      </Navbar.Brand>
      </Container>
    </Navbar>

  );
}

export default Header;