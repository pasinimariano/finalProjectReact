import React from 'react';
import logo from './Img/logo.png';
import { Navbar, Nav, NavDropdown, NavLink, Container } from 'react-bootstrap';


function NavBar () {

    return (
        <Navbar collapseOnSelect expand= 'lg' bg= 'dark' variant= 'dark'>  
            <Container>
                <Navbar.Brand>
                    <img
                        src= {logo}
                        width= '80'
                        height= '80'
                        className= 'd-inline-block align-top'
                        alt= 'Wham! Comics logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-aria-controls= 'responsive-navbar-nav' />
                <Navbar.Collapse id= 'responsive-navbar-nav' >
                    <Nav className= 'mr-auto'>
                        <NavLink href= '/' id= 'main-nav' className= 'text-danger'> HOME </NavLink>
                        <NavLink href= '/contact' id= 'main-nav' className= 'text-danger'> ABOUT US </NavLink>
                        <NavLink href= '/shop' id= 'main-nav' className= 'text-danger'> SHOP </NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title= { <span className= 'nav-drop text-danger'> ACCOUNT </span> }>
                            <NavDropdown.Item href= '/signup' id= 'main-nav' className= 'text-danger'> SIGN UP </NavDropdown.Item>
                            <NavDropdown.Item href= '/create' id= 'main-nav' className= 'text-danger'> CREATE  </NavDropdown.Item>             
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    );
}

export default NavBar;
