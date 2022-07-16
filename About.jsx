// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import web from "../src/images/img2.jpg";
// import Common from './Common';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const About = () => {
//     return (
//       <>
//         <Navbar />
//         <Common name="Welcome to About Page" imgsrc={web} />
//         <Footer />
//       </>
//     )
// }

// export default About;

import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
      <>
        <Navbar />
        <div className="container-about">
          <div className="header-about">
              Our Team
          </div>
          <div className="sub-container-about">
            <div className="teams-about">
              <img src={logo} alt="Logo" />
              <div className="name-about">Mayuresh Prabhu</div>
              <div className="moodleid-about">19104051</div>
              <div className="about-about">Contribution: Login & Registration System</div>
              <div className="social-links-about">
                  <a href="https://github.com/mayuresh2905"><i className="fab fa-github fontawesome-style"></i></a>
                  <a href="mailto:mayureshprabhu29@gmail.com"><i className="fa fa-envelope"></i></a>
                  <a href="https://www.instagram.com/woh_shant_ladka_2905/"><i className="fab fa-instagram fontawesome-style"></i></a>
              </div>
            </div>

            <div className="teams-about">
              <img src={logo} alt="Logo" />
              <div className="name-about">Kiran Suryavanshi</div>
              <div className="moodleid-about">19104035</div>
              <div className="about-about">Contribution: Time-Table Maker</div>
              <div className="social-links-about">
                  <a href="https://github.com/Kiran571"><i className="fab fa-github fontawesome-style"></i></a>
                  <a href="mailto:kiranvsuryavanshi05@gmail.com"><i className="fa fa-envelope"></i></a>
                  <a href="https://www.instagram.com/kiran_ms10/"><i className="fab fa-instagram fontawesome-style"></i></a>
              </div>
            </div>

            <div className="teams-about">
              <img src={logo} alt="Logo" />
              <div className="name-about">Tanmay Doshi</div>
              <div className="moodleid-about">19104024</div>
              <div className="about-about">Contribution: Home Page</div>
              <div className="social-links-about">
                  <a href="https://github.com/TanmayD25"><i className="fab fa-github fontawesome-style"></i></a>
                  <a href="mailto:doshitanmay49@gmail.com"><i className="fa fa-envelope"></i></a>
                  <a href="https://www.instagram.com/tanmaymayy/"><i className="fab fa-instagram fontawesome-style"></i></a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}

export default About;

