import React, { useEffect, useState } from 'react';
import '../css/main.css';

const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
      });
    } catch (error) {}
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const contactFormClick = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;
    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (!data) {
          console.log('Message not sent');
        } else {
          alert('Message sent');
          setUserData({ name: '', email: '', message: '' });
        }
      } else {
        console.error('Failed to send the message. Status:', res.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  useEffect(() => {
    userContact();
  }, []);
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
              <form className="contact-form">
                <div className="row">
                  <div class="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={userData.name}
                      onChange={handleInput}
                      placeholder="Name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={userData.email}
                      onChange={handleInput}
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-lg-12 col-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      name="message"
                      value={userData.message}
                      onChange={handleInput}
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-5 mx-auto col-7">
                    <button
                      type="submit"
                      className="form-control"
                      id="submit-button"
                      onClick={contactFormClick}
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
