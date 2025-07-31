import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about_img from '../assets/baner_2.avif';
import image_2 from '/images-2.jpg';
import Product from './Product';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Services from './Services';
import Baner from './Baner';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: about_img, alt: 'First slide' },
    { src: image_2, alt: 'Second slide' },
    { src: about_img, alt: 'Third slide' },
  ];


  // for send data on whatsapp
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Craft the whatsapp url
    const phone = '+918920803366';
    const text = `name : ${data.name}%OAEmail: ${data.email}%OAMessage: ${data.message}`;
    const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // open whatsapp in a new tab
    window.open(WaLink, "_blank");
    console.log("data is passed to WhatsApp");
  }


  return (
    <>
      <div className="container-fluid">
        <Baner />
      </ div>
      {/* About us */}
      <div className="about-page bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-down">About Us</h2>

          <div className="row align-items-center mb-5" data-aos="fade-right">
            <div className="col-md-6">
              <img src={about_img} className="img-fluid rounded shadow" alt="Our Team" />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h4 className="fw-bold text-primary">Who We Are</h4>
              <p className="text-muted">We specialize in high-quality laser cutting, engraving, and sublimation printing for ladies' garments.
             With over 14 years of experience, we have deep knowledge of the market, materials, and fashion trends—ensuring precision, style, and satisfaction in every piece we craft.</p>
              <ul className="list-unstyled">
                <li className='text-muted'>We Are Exporter </li>
                <li className='text-muted'>We Are Supplier</li>
                <li className='text-muted'> We Are Manufacture</li>
              </ul>
            </div>
          </div>
          <div className="row text-center py-5" data-aos="zoom-in">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h1 className="text-primary">14+</h1>
                <p className="text-muted">Years of Experience</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h1 className="text-primary">50+</h1>
                <p className="text-muted">Projects Delivered</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h1 className="text-primary">100%</h1>
                <p className="text-muted">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <Product />
          {/* <Popular /> */}
          <Services />
          <Testimonials />
          <div className='container-fluid'>
            <div className="container shadow-lg p-5 justify-content-center rounded" data-aos="fade-up">
              <div className="row g-4 ">
                {/* Left Side: Map */}
                <div className="col-md-6 mt-5">
                  <div className="shadow rounded overflow-hidden">
                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28050.833890166876!2d77.29319042882383!3d28.498988162847855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sG%2FF%20D%20-19%20Gali%20Number%20Molarband%20%2CNew%20Delhi%20-44%20!5e0!3m2!1sen!2sin!4v1753959102760!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                </div>
                {/* Right Side: Contact Form */}
                <div className="col-md-6">
                  <div className="card p-4 shadow-lg">
                    <h3 className="text-primary fw-bold mb-3">Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input type="text" name='name' value={data.name} className="form-control" placeholder="Your name" onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input type="email" name='email' value={data.email} className="form-control" placeholder="name@example.com" onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                        <textarea className="form-control" value={data.message} name='message' rows="4" placeholder="Your message..." onChange={handleChange} required></textarea>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
