import React from 'react';
import '../css/main.css';

const Contact = () => {
  return (
    <div>
      <section className="contact section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center"
              data-aos="fade-up"
            >
              <h1 className="mb-4">
                Hey there, Let's <strong>talk</strong> about{' '}
                <strong>Atul</strong> Technical
              </h1>

              <p>
                or email us at{' '}
                <a href="mailto:vernekaratul@gmail.com">
                  vernekaratul@gmail.com
                </a>
              </p>
              <p>
                Please follow our contact page to <strong>setup</strong> the
                contact form.
              </p>
            </div>

            <div className="col-lg-8 mx-auto col-md-10 col-12">
              <form method="post" className="contact-form">
                <div className="row">
                  <div class="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-lg-12 col-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-5 mx-auto col-7">
                    <button
                      type="submit"
                      className="form-control"
                      id="submit-button"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
