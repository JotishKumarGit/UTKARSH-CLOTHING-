

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Common.css';

import { ProductPreviewModal, EnquiryModal } from '../components/modal/Modal';

import img_1 from '../assets/crop-top.jpg';
import img_2 from '../assets/women-brown.webp';
import img_3 from '../assets/lower.webp';
import img_4 from '../assets/ledis-top.webp';
import img_5 from '../assets/ladies-maroon-red.webp';
import img_6 from '../assets/girls-blue-printed-cotton.webp';

const productData = [
    {
        id: 1,
        title: "Trendy Crop Top",
        description: "Stylish and versatile crop top, perfect for casual outings or layering. Made with breathable fabric for all-day comfort.",
        img: img_1
    },
    {
        id: 2,
        title: "Elegant Brown Dress",
        description: "A chic brown outfit that adds elegance to your look. Suitable for both daily wear and special occasions.",
        img: img_2
    },
    {
        id: 3,
        title: "Comfort Fit Lowers",
        description: "Soft, stretchable lowers ideal for lounging or active wear. Combines comfort with a flattering fit.",
        img: img_3
    },
    {
        id: 4,
        title: "Stylish Ladies Top",
        description: "Modern design ladies' top, perfect for pairing with jeans or skirts. Lightweight and fashion-forward.",
        img: img_4
    },
    {
        id: 5,
        title: "Maroon-Red Ethnic Wear",
        description: "Graceful maroon-red attire designed for festive and traditional events. Made from quality fabric with elegant detailing.",
        img: img_5
    },
    {
        id: 6,
        title: "Blue Printed Cotton Dress",
        description: "Breathable and vibrant blue printed cotton dress, great for summer wear. Light, comfortable, and stylish.",
        img: img_6
    }
];


const Product = () => {

    const [showPreview, setShowPreview] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePreviewShow = (product) => {
        setSelectedProduct(product);
        setShowPreview(true);
    };

    const handlePreviewClose = () => {
        setShowPreview(false);
        setSelectedProduct(null);
    };

    const handleEnquiryOpen = (product = null) => {
        if (product) setSelectedProduct(product);
        setShowEnquiry(true);
    };

    const handleEnquiryClose = () => {
        setShowEnquiry(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const phone = '+918920803366';
        const text = `Product: ${selectedProduct?.title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(WaLink, "_blank");
        console.log("data is passed to WhatsApp");
    };


    return (
        <div className="container-fluid p-0 bg-light py-5">
            <Container className="my-5  ">
                <h4 className="text-center text-danger">Our Interior Finishing Range</h4>
                <h2 className="text-center fw-bold mb-4">Vinyl, Wooden & False Flooring | Ceilings | Carpets</h2>
                <Row className='justify-content-center'>
                    {productData.map((product) => (
                        <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                            <Card className="product-card ">
                                <div className="image-wrapper">
                                    <img src={product.img} alt="" className="base-image" style={{height:'200px'}} />
                                    <img src={product.img} alt="" className="slide-image" />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-semibold">{product.title}</Card.Title>
                                    <Button className="me-3" variant="dark" size="sm" onClick={() => handlePreviewShow(product)}>
                                        View Details</Button>
                                    <Button variant="dark" size="sm" onClick={() => handleEnquiryOpen(product)}>
                                        Enquiry
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Product Preview Modals */}
                <ProductPreviewModal
                    show={showPreview}
                    handleClose={handlePreviewClose}
                    product={selectedProduct}
                    onEnquiryClick={() => { handlePreviewClose(); handleEnquiryOpen(); }}
                />

                {/* Enquery modal */}
                <EnquiryModal
                    show={showEnquiry}
                    handleClose={handleEnquiryClose}
                    handleSubmit={handleSubmit}
                    name={name}
                    email={email}
                    message={message}
                    setName={setName}
                    setEmail={setEmail}
                    setMessage={setMessage}
                    product={selectedProduct}
                />
            </Container>
        </div>
    );
};

export default Product;