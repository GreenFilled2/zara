'use client';

import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';

import "./form.css"
import axios from 'axios';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = {
      email,
      password,
    }
    const res = await axios.post("http://localhost:3001/auth/login", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    window.localStorage.setItem("currentUser", JSON.stringify(res.data))
  }
  return (
    <MDBContainer id="login-container">
      <MDBRow className='g-0 d-flex'>
        <MDBCard id="login-card">
          <h1 style={{marginBottom: "2rem"}}>Log in to your account</h1>


        <MDBCol md='6'>

          <MDBCardBody id="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
            <MDBInput wrapperClass='mb-4' placeholder='E-MAIL' id='form1' type="email" onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' placeholder='PASSWORD' id='form2' type='password' onChange={(e) => setPassword(e.target.value)}/>

            <MDBBtn className="mb-4 login-btn">Log in</MDBBtn>
            </form>

            <div className="d-flex justify-content-between mb-4">
              <a href="!#">Have you forgotten your password?</a>
            </div>
          </MDBCardBody>

        </MDBCol>

        </MDBCard>
        <MDBCol md={6} id="need-account">
          <h3>Need an Account?</h3>
          <Link href={"/signup"}><MDBBtn className="mb-4" id="register-btn"> Register </MDBBtn></Link>
          
        </MDBCol>
      </MDBRow>

  </MDBContainer>
  );
}