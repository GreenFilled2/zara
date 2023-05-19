'use client'
import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from "mdb-react-ui-kit";
import Variants from "./Variants";

import './prods.css'
import axios from "axios";

function App() {
    const [category, setCategory] = useState<String>("")
    const [products, setProducts] = useState<Array<Object>>([])

    useEffect(() => {
        console.log("gg")
        setCategory(window.location.pathname.split("/")[2])
        if (category) {
            axios.get(`http://localhost:3002/products/${category}`)
                .then((res) => setProducts(res.data))
                .catch((err) => console.log(err))
        }
    }, [category])

    if (products.length > 0)
        return (

            <MDBContainer className="my-5">
                <Variants />

                <MDBRow className="flex justify-center">

                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard id="product-card" className="h-[86vh]">
                            <MDBCardImage
                                src={products[0].images[0]}
                                className="w-100"
                            />
                            <MDBCardBody className="flex flex-row justify-between p-0 pt-1.5">
                                <span className="card-title mb-3 text-left details">{products[0].name}</span>
                                <span className="mb-3 text-right details">${products[0].price}</span>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        );
}

export default App;