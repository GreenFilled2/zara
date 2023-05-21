"use client";

import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: object;
}
export default function Product({ product }: ProductProps) {
  const router = useRouter();
  let currentUser = localStorage.getItem("currentUser") || null;
  if (currentUser) currentUser = JSON.parse(currentUser);
  const addToCart = () => {
    console.log(currentUser);
    if (!currentUser) {
      alert("you are not logged in");
      router.push("/login");
    } else {
      axios
        .put(`http://localhost:3002/cart/${currentUser._id}`, {
          itemId: product._id,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  return (
    <MDBRow className="flex justify-center">
      <MDBCol md="12" lg="4" className="mb-4">
        <MDBCard id="product-card" className="h-[86vh]">
          <div className="image-container">
            <MDBCardImage src={product.images[0]} className="w-100" />
            <div className="image-overlay">
              <div className="overlay-content">
                <button onClick={addToCart}>
                  <MDBCardImage
                    src="https://res.cloudinary.com/dszx3pd6j/image/upload/v1684671895/add_1_sofkh8.png"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>
          <MDBCardBody className="flex flex-row justify-between p-0 pt-1.5">
            <span className="card-title mb-3 text-left details">
              {product.name}
            </span>
            <span className="mb-3 text-right details">TND {product.price}</span>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
