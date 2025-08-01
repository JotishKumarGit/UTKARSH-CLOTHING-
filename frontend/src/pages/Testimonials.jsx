import React, { useEffect } from 'react';
import test_1 from '/images-1.jpg';
import test_2 from '/test-2.jpg';
import test_3 from '/test-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: "Nishan Row",
    role: "CEO, TechCorp",
    message: "Absolutely love the service! Highly professional and reliable.",
    image: test_1
  },
  {
    name: "Saman",
    role: "Marketing Head, MarketGiant",
    message: "They helped us grow our brand faster than ever imagined!",
    image: test_2
  },
  {
    name: "Alan ",
    role: "CTO, DevStart",
    message: "Great support and fantastic solutions. Highly recommend!",
    image: test_3
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="text-center fw-bold " data-aos="fade-up">What Our Clients Say</h2>
      <p className="text-center mb-5">Utkarsh Clothing is a good company</p>
      <div className="row g-4">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="col-md-4"
            data-aos="zoom-in"
            data-aos-delay={idx * 200}
          >
            <div className="card shadow-sm border-0 rounded-4 h-100 p-4 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover", border: "3px solid #0d6efd" }}
              />
              <h5 className="mb-0">{testimonial.name}</h5>
              <small className="text-muted">{testimonial.role}</small>
              <p className="mt-3 text-secondary">"{testimonial.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
