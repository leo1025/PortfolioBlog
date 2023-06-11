"use client"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

export default function NavBar()
{
    return (
        <div className='navbox'>
            <Navbar bg="none" expand="lg">
                <Navbar.Brand href="/">Leona DA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="">About</Nav.Link>
                        <Nav.Link href="">Contact</Nav.Link>
                        <Nav.Link href="">Blog</Nav.Link>
                        <Nav.Link href="portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}