'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Categories from './categories';

function Sidebar() {
    const [show, setShow] = useState(false)
    return (
        <>
            <button className="ml-9" onClick={() => setShow(!show)} aria-label="Open menu">
                {!show ? (<svg className="layout-header__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4 5.9H3.6v-1h16.8v1zm0 6.6H3.6v-1h16.8v1zm0 6.6H3.6v-1h16.8v1z"></path>
                </svg>
                ) : (
                    <svg className="layout-sidebar__close-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit">
                        <path d="M12 12.707l6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707z"></path>
                    </svg>
                )}
            </button>
            {
                show ? (
                    <Navbar bg="light" className={`mb-3 sidebar ${show ? 'sidebar-open' : ''}`} >
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar`}
                                aria-labelledby={`offcanvasNavbarLabel`}
                                placement="end"
                            >
                                <Offcanvas.Body>
                                    <Categories />
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ) : (<></>)
            }

        </>
    );
}

export default Sidebar;