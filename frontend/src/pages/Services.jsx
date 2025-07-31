import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import customer_suport from '../assets/customer-suport-icons.webp';
import customized_order from '../assets/customized-orders.webp';
import prompt_delivery from '../assets/prompt-delivery.webp';

const services = [
    {
        icon: customer_suport,
        title: 'Customer Support',
        description: 'Our dedicated customer support team is hare to assit you with any question or concerns you may have.have enquery about our products or require assistance with returns or exchanges.',
    },
    {
        icon: customized_order,
        title: 'Customized Orders',
        description: 'We belive in delivery products that perfectly match your unique vision. Our Customized order services allow you to personalize our offering to meet your spesific needs',
    },
    {
        icon: prompt_delivery,
        title: 'Prompt Delivery',
        description: 'We understand that timely delivery is crucial to our customers . ensuring that your order arrived swiffly and efficiently , right when you need them.',
    },
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-down">
                <h2 className="fw-bold">Our Services</h2>
                <p className="text-muted">What we offer to help you grow</p>
            </div>

            <div className="row g-4">
                {services.map((service, index) => (
                    <div className="col-md-6 col-lg-4" key={index} data-aos="zoom-in">
                        <div className="card h-100 shadow-sm service-card p-4 text-center border-0">
                            <div className="icon-container mb-3">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="img-fluid"
                                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }}
                                />
                            </div>
                            <h5 className="fw-semibold">{service.title}</h5>
                            <p className="text-muted">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
