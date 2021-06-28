import React  from 'react'
import {Navbar, Nav,Container}  from 'react-boostrap'
 export const HeadBar = () => {
    return (
        <div className="col-sm-4">
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>)}
        export default NavBar;
