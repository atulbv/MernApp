import React, { useEffect } from 'react';
import MaleAvatar from '../images/male-avatar.png';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch('./about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const err = new Error(res.error);
        throw err;
      }
    } catch (error) {
      console.log(error);
      history.push('/login');
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>
      <section class="project-detail section-padding-half">
        <div class="container">
          <form method="GET">
            <div class="row">
              <div
                class="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center"
                data-aos="fade-up"
              >
                <h4 class="blog-category text-info">Atul Technical</h4>

                <h1>MERN stack and Vue developer</h1>

                <div class="client-info">
                  <div class="d-flex justify-content-center align-items-center mt-3">
                    <img src={MaleAvatar} class="img-fluid" alt="male avatar" />

                    <p>Atul Vernekar</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
