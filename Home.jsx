import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from './Common';
import Navbar from './Navbar';
import Footer from './Footer';
const Home = () => {
    return (
      <>
        <Navbar />
        <Common name="A Perfect Timetable don't CHANGE itself, It changes the person according to it!"
          imgsrc={web} />
        <Footer />
      </>
    )
}

export default Home;
