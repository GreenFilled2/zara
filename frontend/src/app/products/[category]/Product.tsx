'use client';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from "mdb-react-ui-kit";

interface ProductProps {
    product: object;
}
export default function Product({ product }: ProductProps) {
    return (
        <MDBRow className="flex justify-center">

            <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard id="product-card" className="h-[86vh]">
                    <MDBCardImage
                        src={product.images[0]}
                        className="w-100"
                    />
                    <MDBCardBody className="flex flex-row justify-between p-0 pt-1.5">
                        <span className="card-title mb-3 text-left details">{product.name}</span>
                        <span className="mb-3 text-right details">${product.price}</span>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>
    );
}