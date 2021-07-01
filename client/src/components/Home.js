import React from 'react';
import '../css/main.css';
import workingimage from '../images/working-girl.png';

const Home = () => {
  return (
    <div>
      <section className="hero hero-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                <h1 className="text-white" data-aos="fade-up">
                  We are ready for MERN stack web development
                </h1>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div
                className="hero-image"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src={workingimage}
                  className="img-fluid"
                  alt="working girl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
