import React from 'react'; 

const BackgroundImage = () => {
  return (
    <div className="background-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="overlay-content p-4">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">We offer the best services to boost your business.</p>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div>
    </div>
  );
};

export default BackgroundImage;
