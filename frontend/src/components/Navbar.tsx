"use client";

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

import "./nav.css";
import Categories from "./categories";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  let currentUser = window.localStorage.getItem("currentUser") || null;
  if (currentUser) currentUser = JSON.parse(currentUser);
  const [side, setSide] = useState(false);
  return (
    <div>
      <Navbar
        bg="transparent"
        expand="lg"
        variant="light"
        className="navbar max-h-[20vh]"
        fixed="top"
      >
        <button
          onClick={() => setSide(!side)}
          className="ml-4 fixed focus:outline-none"
        >
          {side ? (
            <svg
              className="layout-sidebar__close-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              stroke="inherit"
            >
              <path d="M12 12.707l6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707z"></path>
            </svg>
          ) : (
            <svg
              className="layout-header__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              stroke="inherit"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4 5.9H3.6v-1h16.8v1zm0 6.6H3.6v-1h16.8v1zm0 6.6H3.6v-1h16.8v1z"
              ></path>
            </svg>
          )}
        </button>
        {side && <Categories />}

        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
              style={{ marginLeft: "100px", width: "200px", height: "90px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="/"
                style={{
                  fontSize: "15px",
                  marginLeft: "20px",
                }}
              ></Nav.Link>
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

            {currentUser ? (
              <button
                onClick={() => {
                  localStorage.setItem("currentUser", "");
                  router.push("/");
                }}
                style={{
                  color: "#212529",
                  fontFamily: "Helvetica Neue",
                  fontSize: "12px",
                }}
              >
                LOGOUT
              </button>
            ) : (
              <div>
                <Nav.Link
                  href="/login"
                  style={{
                    color: "#212529",
                    fontFamily: "Helvetica Neue",
                    fontSize: "12px",
                  }}
                >
                  LOG IN
                </Nav.Link>
              </div>
            )}

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
            {currentUser && (
              <Link href={`/cart/${currentUser._id}`}>
                <svg
                  className="layout-header-shop-cart-link__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="inherit"
                  stroke="inherit"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.708 5a2.5 2.5 0 0 1 4.584 0H9.708zM8.645 5a3.502 3.502 0 0 1 6.71 0H19v15H5V5h3.645zM6 6v13h12V6H6z"
                  ></path>
                </svg>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
