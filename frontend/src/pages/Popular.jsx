import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '/img1.webp';
import img2 from '/img2.webp';
import img3 from '/img-3.webp';
import img4 from '/baner-4.webp';
import img5 from '/baner-5.webp';

const Popular = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="bg-light py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold text-uppercase mb-4">Popular Destinations in India</h2>
          <p className="fst-italic fs-5 mb-3">
            India is a vibrant land of startling contrasts where both the traditional and modern worlds meet.
          </p>
          <p className="fst-italic fs-5 mb-4">
            The world's seventh-largest nation by area and the second-largest in terms of population, India boasts a rich heritage
            shaped by centuries of diverse cultures and religions.
          </p>

          {/* First Image Grid */}
          <div className="row g-3 align-items-stretch">
            <div className="col-md-6">
              <div className="image-card h-100" data-aos="zoom-in">
                <img src={img1} alt="Jallianwala Bagh" className="img-fluid w-100 rounded" />
                <div className="image-overlay">Jallianwala Bagh, Amritsar</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column h-100">
                <div className="mb-3 flex-fill image-card" data-aos="fade-left">
                  <img src={img2} alt="Gangtok" className="img-fluid w-100 rounded" />
                  <div className="image-overlay">Gangtok, Sikkim</div>
                </div>
                <div className="flex-fill image-card" data-aos="fade-left">
                  <img src={img3} alt="Taj Mahal" className="img-fluid w-100 rounded" />
                  <div className="image-overlay">Taj Mahal, Agra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Grid Section */}
      <section className="py-5 text-center" data-aos="fade-up">
        <div className="container">
          {/* Image Grid */}
          <div className="row g-3 align-items-stretch">
            <div className="col-md-6">
              <div className="image-card h-100" data-aos="zoom-in">
                <img src={img4} alt="Destination 1" className="img-fluid w-100 rounded" />
                <div className="image-overlay">Golden Temple, Amritsar</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column h-100">
                <div className="mb-3 flex-fill image-card" data-aos="fade-left">
                  <img src={img5} alt="Destination 2" className="img-fluid w-100 rounded" />
                  <div className="image-overlay">Kolkata, West Bengal</div>
                </div>
                <div className="flex-fill image-card" data-aos="fade-left">
                  <img src={img2} alt="Taj Mahal" className="img-fluid w-100 rounded" />
                  <div className="image-overlay">Jaipur, Rajasthan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4">
            <button className="btn btn-primary px-4 py-2 rounded-pill">All Documents</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
