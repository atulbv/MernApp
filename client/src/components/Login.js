import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../css/main.css';
import SigninImage from '../images/signin.jpg';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginuser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert('Invalid Credential');
    } else {
      window.alert('Login Successfully');
      history.push('/');
    }
  };
  return (
    <div>
      <section class="blog section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 py-5 mt-5 mb-3 text-center">
              <h1 class="mb-4" data-aos="fade-up">
                Sign In
              </h1>
            </div>

            <div class="col-lg-7 col-md-7 col-12 mb-4">
              <div class="blog-header" data-aos="fade-up" data-aos-delay="100">
                <img src={SigninImage} class="img-fluid" alt="blog header" />

                <div class="blog-header-info">
                  <h4 class="blog-category text-info">Atul Technical</h4>

                  <h3>
                    <NavLink to="/Signup">Create My Account</NavLink>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-5 mr-auto col-md-6 col-12 newsletter-form">
              <h4 data-aos="fade-up" data-aos-delay="200">
                Sign In
              </h4>

              <form method="POST">
                <div
                  class="form-group mt-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter your email"
                    required
                  />
                  <input
                    name="password"
                    type="Password"
                    class="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please enter your password"
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll NOT share your email address to anyone else.
                  </small>
                </div>

                <button
                  type="submit"
                  id="submit-button"
                  name="login"
                  class="btn w-100 mt-3"
                  onClick={loginuser}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
