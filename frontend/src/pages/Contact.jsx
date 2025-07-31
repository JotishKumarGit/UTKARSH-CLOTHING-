import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // for send data on whatsapp
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Craft the whatsapp url
    const phone = '+918149327892';
    const text = `name : ${data.name}%OAEmail: ${data.email}%OAMessage: ${data.message}`;
    const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // open whatsapp in a new tab
    window.open(WaLink, "_blank");
    console.log("data is passed to WhatsApp");
  }

  return (
    <>
      <div className='container-fluid'>
        {/* For background image */}
        <div className="background-image-contact d-flex align-items-center justify-content-center text-white text-center">
          <div className="overlay-content-contact p-4 rounded">
            <h2 className="display-4 fw-bold">Contact Us</h2>
            <div className="lead">Let me know if you'd like a version tailored for a specific industry (e.g., e-commerce, real estate, healthcare, etc.) or platform (website, email, social media).</div>
          </div>
        </div>

        <div className="container shadow-lg p-5 justify-content-center rounded" data-aos="fade-up">
          <div className="row g-4">
            {/* Left Side: Map */}
            <div className="col-md-6 mt-5">
              <div className="shadow rounded overflow-hidden">
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5081395609856!2d-122.4206799846819!3d37.77492977975954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1c5e35d95d%3A0x8201df9ed2ed5c3d!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1629648504213!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy"></iframe>
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
    </>
  );
};

export default Contact;
