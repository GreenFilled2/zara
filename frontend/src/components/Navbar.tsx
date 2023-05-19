'use client'

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './sidebar';

const NavBar = () => {
    const [path, setPath] = useState("");
    return (
        <div>
            <Navbar bg="transparent" expand="lg" variant="light" className="navbar" fixed="top">

                <Sidebar />
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
                            style={{ marginLeft: "100px", width: "200px", height: "90px" }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link
                                href="/"
                                style={{
                                    fontSize: "15px",
                                    marginLeft: "20px",
                                }}
                            >

                            </Nav.Link>
                        </Nav>

                        <div>
                            <Nav.Link
                                href="/Search"
                                style={{
                                    color: "#212529",
                                    fontFamily: "Helvetica Neue",
                                    fontSize: "12px",
                                    marginRight: "20px",
                                    textDecoration: "underline",
                                }}
                            >
                                SEARCH
                            </Nav.Link>
                        </div>

                        <div>
                            <Nav.Link href="/login" style={{ color: "#212529", fontFamily: "Helvetica Neue", fontSize: "12px" }}>
                                LOG IN
                            </Nav.Link>
                        </div>

                        <div>
                            <Nav.Link
                                href="/help"
                                style={{
                                    color: "#212529",
                                    fontFamily: "Helvetica Neue",
                                    fontSize: "12px",
                                    marginLeft: "20px",
                                }}
                            >
                                HELP
                            </Nav.Link>
                        </div>

                        <svg className="layout-header-shop-cart-link__icon" style={{ marginRight: "20px" }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit"><path fillRule="evenodd" clipRule="evenodd" d="M9.708 5a2.5 2.5 0 0 1 4.584 0H9.708zM8.645 5a3.502 3.502 0 0 1 6.71 0H19v15H5V5h3.645zM6 6v13h12V6H6z"></path></svg>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
