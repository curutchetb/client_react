//rfc
import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand as ={NavLink} to ={'/'}> React JAVA </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-menu'></Navbar.Toggle>
        <Navbar.Collapse id='main-menu'>
            <Nav className='mr-auto'>
                <Nav.Link>Create Post</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>Create Account</Nav.Link>
                <Nav.Link as={NavLink} to ={'/signin'}>Sign in</Nav.Link>
                <NavDropdown title='Bárbara Curutchet' id='menu-dropdown'>
                    <NavDropdown.Item>Posts</NavDropdown.Item>
                    <NavDropdown.Item>Sign out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
