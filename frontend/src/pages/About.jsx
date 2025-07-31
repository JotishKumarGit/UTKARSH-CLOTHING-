import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '/baner-4.webp'; // Add image to public or src folder
import missionImg from '/img1.webp';
import visionImg from '/baner-4.webp';
import BackgroundImage from './BackgroundImage';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <>
            <div className="container-fluid">
                {/* <BackgroundImage /> */}
                <div className="background-image d-flex align-items-center justify-content-center text-white text-center">
                    <div className="overlay-content p-4 rounded">
                        <h2 className="display-5 fw-bold">Handcrafted for Your Everyday Moments</h2>
                        <div className="lead">
                            We believe that everyday items should tell a story.
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    {/* About Section */}

                    <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-md-6">
                            <img src={aboutImg} alt="About Us" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-3">About Us</h2>
                            <p>
                                We are a passionate team dedicated to delivering the best digital solutions.
                                With years of experience in web development, we focus on quality, innovation,
                                and user experience. Our goal is to bring your ideas to life with precision and style.
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-up">
                        <div className="col-md-6">
                            <img src={missionImg} alt="Our Mission" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-3">Our Mission</h2>
                            <p>
                                Our mission is to empower businesses through cutting-edge technology,
                                providing scalable and sustainable digital solutions. We aim to simplify
                                complex processes and enhance productivity through automation and innovation.
                            </p>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-md-6">
                            <img src={visionImg} alt="Our Vision" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-3">Our Vision</h2>
                            <p>
                                Our vision is to be a global leader in technology services, recognized for
                                our creative approach, integrity, and outstanding client satisfaction.
                                We envision a digital future where possibilities are limitless.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
