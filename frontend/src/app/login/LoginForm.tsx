'use client';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import "./form.css"

export default function LoginForm() {
  return (
    <MDBContainer className='' id="login-container">
    <MDBCard id="login-card">

      <MDBRow className='g-0 d-flex'>

        <MDBCol md='8'>

          <MDBCardBody id="card-body">

            <MDBInput wrapperClass='mb-4' placeholder='E-MAIL' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' placeholder='PASSWORD' id='form2' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100">Log in</MDBBtn>

          </MDBCardBody>

        </MDBCol>

      </MDBRow>

    </MDBCard>
  </MDBContainer>
  );
}