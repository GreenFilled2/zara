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
import Product from "./Product";

function App() {
    const [category, setCategory] = useState<String>("")
    const [products, setProducts] = useState<Array<Object>>([])

    useEffect(() => {
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
                {/* <Variants /> */}
                {products.map((e, i) => (
                    <Product product={e} key={i} />
                ))}


            </MDBContainer>

        );
}

export default App;