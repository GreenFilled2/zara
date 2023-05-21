"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ProductDocument } from "../../../../../backend/models/Product";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CartItem from "./CartItem";

import './cart.css'

export default function CartList() {
  let currentUser = window.localStorage.getItem("currentUser") || null;
  if (currentUser) currentUser = JSON.parse(currentUser);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3002/cart/${currentUser._id}`)
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <MDBContainer style={{ marginTop: "12rem" }}>
      <MDBRow className="flex-wrap">
        <MDBCol md={8} className="mr-0">
          {cart.map((e: ProductDocument, i) => (
            <CartItem key={i} product={e} />
          ))}
        </MDBCol>
        <MDBCol md={4}></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
