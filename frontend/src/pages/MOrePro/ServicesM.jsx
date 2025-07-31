import React from "react";
import Services from "../Services";

const ServicesM = () => {
    return (
        <>
            <div className="container-fluid">
                {/* For background image */}
                <div className="background-image-services d-flex align-items-center justify-content-center text-white text-center">
                    <div className="overlay-content-services p-4 rounded">
                        <h2 className="display-5 fw-bold">Personalized Gifts That Speak from the Heart</h2>
                        <div className="lead">
                            Inspired by life’s little details.
                        </div>
                    </div>
                </div>
                <Services />
            </div>
        </>
    )
}

export default ServicesM;













