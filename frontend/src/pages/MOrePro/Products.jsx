import React from "react";
import Services from "../Services";
import Product from "../Product";

const Products = () => {
    return (
        <>
            <div className="container-fluid">
                {/* For background image */}
                <div className="background-image-product d-flex align-items-center justify-content-center text-white text-center">
                    <div className="overlay-content-product p-4 rounded">
                        <h2 className="display-5 fw-bold">Detail Matters: Quality in Every Piece</h2>
                        <div className="lead">
                            From the elegance of our metal photo frames to the comfort of a morning sip from our custom coffee mugs.
                        </div>
                    </div>
                </div>
                <Product />
            </div>
        </>
    )
}

export default Products;













