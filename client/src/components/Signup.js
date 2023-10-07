import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/main.css';

const Signup = () => {
  const History = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleImputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Registration Successful');
      History.push('/login');
    }
  };

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
                Hey there, Let's <strong>Register</strong> first for{' '}
                <strong>Atul</strong> Technical
              </h1>
            </div>

            <div className="col-lg-8 mx-auto col-md-10 col-12">
              <form method="POST" className="contact-form">
                <div className="row">
                  <div class="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={user.name}
                      onChange={handleImputs}
                      autoComplete="off"
                      placeholder="Name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={user.email}
                      onChange={handleImputs}
                      autoComplete="off"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      className="form-control"
                      name="phone"
                      value={user.phone}
                      onChange={handleImputs}
                      autoComplete="off"
                      placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      className="form-control"
                      name="work"
                      value={user.work}
                      onChange={handleImputs}
                      autoComplete="off"
                      placeholder="Your Profession"
                    ></input>
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      className="form-control"
                      name="password"
                      type="Password"
                      value={user.password}
                      onChange={handleImputs}
                      autoComplete="off"
                      placeholder="Password"
                    ></input>
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      className="form-control"
                      name="cpassword"
                      type="Password"
                      value={user.cpassword}
                      onChange={handleImputs}
                      autoComplete="off"
                      placeholder="Confirm Password"
                    ></input>
                  </div>

                  <div className="col-lg-5 mx-auto col-7">
                    <button
                      type="submit"
                      className="form-control"
                      id="submit-button"
                      name="signup"
                      onClick={PostData}
                    >
                      Register
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

export default Signup;
