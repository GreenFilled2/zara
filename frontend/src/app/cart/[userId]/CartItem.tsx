"use client";

import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardFooter,
} from "mdb-react-ui-kit";

interface CartItemProps {
  product: object;
}
export default function CartItem({ product }: CartItemProps) {
  let currentUser = window.localStorage.getItem("currentUser") || null;
  if (currentUser) currentUser = JSON.parse(currentUser);
  const deleteFromCart = () => {
    axios
      .delete(`http://localhost:3002/cart/${currentUser._id}/${product._id}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <MDBCard
      id="cart-card"
      className="h-[86vh] w-[40%] mr-0"
      style={{ margin: "1rem" }}
    >
      <MDBCardImage src={product.images[0]} className="w-100" />

      <MDBCardBody className="flex flex-row justify-between p-0 pt-1.5">
        <span className="card-title mb-1 text-left details">
          {product.name}
        </span>
        <span className="mb-1 text-right details">TND {product.price}</span>
      </MDBCardBody>
      <div className="item-footer">
        <button className="delete-btn" onClick={deleteFromCart}>
          DELETE
        </button>
      </div>
    </MDBCard>
  );
}
