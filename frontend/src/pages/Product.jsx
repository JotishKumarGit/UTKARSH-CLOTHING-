

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
import img_7 from '../assets/img_1.jpeg';
import img_9 from '../assets/img_3.jpeg';
import img_11 from '../assets/img_6.jpeg';
import img_12 from '../assets/img_7.jpeg';
import img_13 from '../assets/img_8.jpeg';
import img_14 from '../assets/img_9.jpeg';
import img_15 from '../assets/img_10.jpeg';
import img_16 from '../assets/img_11.jpeg';
import img_17 from '../assets/img_12.jpeg';
import img_18 from '../assets/img_13.jpeg';
import img_19 from '../assets/img_14.jpeg';
import img_20 from '../assets/img_16.jpeg';
import img_21 from '../assets/img_17.jpeg';
import img_22 from '../assets/img_18.jpeg';
import img_23 from '../assets/img_19.jpeg';
import img_24 from '../assets/img_20.jpeg';
import img_25 from '../assets/img_22.jpeg';
import img_26 from '../assets/img_23.jpeg';
import img_27 from '../assets/img_24.jpeg';
import img from '../assets/img-21.jpeg'

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
        description: "Modern design top, perfect for pairing with jeans or skirts. Lightweight and fashion-forward.",
        img: img_4
    },
    {
        id: 5,
        title: "Maroon-Red Ethnic Wear",
        description: "Graceful ethnic wear designed for festive and traditional events. Made from quality fabric with elegant detailing.",
        img: img_5
    },
    {
        id: 6,
        title: "Blue Printed Cotton Dress",
        description: "Vibrant blue cotton dress, great for summer wear. Light, comfortable, and stylish.",
        img: img_6
    },
    {
        id: 7,
        title: "Casual Beige Top",
        description: "Minimalist beige top, a versatile pick for any casual day out.",
        img: img_7
    },
    {
        id: 9,
        title: "Black net crop top",
        description: "Flared polka dot skirt that brings a vintage vibe to modern fashion.",
        img: img_9
    },
    {
        id: 11,
        title: "Boho Floral Maxi",
        description: "Maxi dress with bohemian floral prints, ideal for daytime parties.",
        img: img_11
    },
    {
        id: 13,
        title: "Black net red top",
        description: "Elegant pink blouse with a sleeveless cut and soft fabric.",
        img: img_13
    },
    {
        id: 18,
        title: " Flare Dress",
        description: "Timeless black dress with a flattering fit-and-flare silhouette.",
        img: img_18
    },
    {
        id: 19,
        title: "Trendy Tie-Dye Tee",
        description: "Colorful tie-dye t-shirt, soft and breathable. Adds a pop to any outfit.",
        img: img_19
    },
    {
        id: 20,
        title: "Oversized Graphic Tee",
        description: "Bold graphic print on a comfy oversized fit. Streetwear essential.",
        img: img_20
    },
    {
        id: 21,
        title: "Dori net crop top",
        description: "Bold graphic print on a comfy oversized fit. Streetwear essential.",
        img: img
    },
    {
        id: 24,
        title: "Elegant White Blouse",
        description: "Chic white blouse that’s a wardrobe staple. Pairs with anything.",
        img: img_24
    },
    {
        id: 25,
        title: "Floral Printed Wrap Dress",
        description: "Soft wrap dress with an all-over floral print, perfect for brunch.",
        img: img_25
    },
    {
        id: 26,
        title: "Modern Crop top",
        description: "Stylish matching top and bottom set for trend-forward looks.",
        img: img_26
    },
    {
        id: 27,
        title: "Classic Fit Trousers",
        description: "Tailored trousers that go from work to weekend effortlessly.",
        img: img_27
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


