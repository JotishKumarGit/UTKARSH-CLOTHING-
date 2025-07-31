import React from 'react';
import img_1 from '../assets/baner_1.jpg';
import img_2 from '../assets/baner_2.avif';
import img_3 from '../assets/baner_3.avif';


const BannerPage = () => {
const images = [
  { src: img_1,},
  { src: img_2, },
  { src: img_3, },
];

  return (
    <div className="container-fluid p-0">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} style={{ height: '600px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h3 className='text-success'>{image.alt}</h3>
      {/* <p className='text-white display-5 fw-bold'>
  Discover timeless elegance and everyday comfort with our exclusive range of ladies' garments. Perfect for casual outings, festive occasions, or daily wear – crafted to fit your lifestyle beautifully.
</p> */}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BannerPage;
