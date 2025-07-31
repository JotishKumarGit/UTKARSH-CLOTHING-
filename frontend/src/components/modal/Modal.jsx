// src/components/Modals.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// This is product preview modal 
const ProductPreviewModal = ({ show, handleClose, product, onEnquiryClick }) => {
    if (!product) return null;

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <img src={product.img} alt={product.title} className="img-fluid mb-3" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                <p className="text-muted">{product.description}</p>
                <Button variant="outline-primary" onClick={onEnquiryClick}>Enquiry</Button>
            </Modal.Body>
        </Modal>
    );
};

// This is enquery modal
const EnquiryModal = ({ show, handleClose, handleSubmit, name, email, message, setName, setEmail, setMessage, product, }) => {

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Product Enquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="enquiryName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="enquiryEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="enquiryMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder={`I'm interested in ${product?.title}`} value={message} onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Send Enquiry</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export { ProductPreviewModal, EnquiryModal };


