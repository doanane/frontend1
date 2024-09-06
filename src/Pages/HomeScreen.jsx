import React from 'react';
import { Link } from 'react-router-dom';
import donationEvent from '../Assets/about1.jpeg';
import communityGathering from '../Assets/aboutt.jpeg';
import CauseSection from '../Components/CauseSection';
import CharitySection from '../Components/CharitySection';
import FunFacts from '../Components/FunFacts';
import Navbar from '../Components/Navbar';
import '../Styles/HomeScreen.css';
import LatestNews from '../Components/News';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>Helping Each Other Can Make The World Better</h1>
          <p>
            We Seek Out World Changers And <br />Difference Makers Around The Globe<br />
            And Equip Them To Fulfill Their Unique Purpose.
          </p>
          <div className="hero-buttons">
            <Link to="/donate">
              <button>Donate Now</button>
            </Link>
            <Link to="/volunteer">
              <button>Volunteer With Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="support-section">
        <div className="images">
          <img
            src={communityGathering}
            alt="Community gathering under trees"
            className="image image1"
          />
          <img
            src={donationEvent}
            alt="People receiving awards"
            className="image image2"
          />
        </div>
        <div className="content">
          <h2>About Us</h2>
          <h1>Your Support Is Really Powerful.</h1>
          <p>
            Working Towards A World Where Young People, Irrespective Of Gender,
            Unlock Their Full Potential Through Youth Leadership, Mentorship,
            And Empowerment, Contributing To A Brighter Future For All.
          </p>
          <Link to="/about">
            <button className="read-more">Read More</button>
          </Link>
        </div>
      </div>

      <CharitySection />
      <FunFacts />
      <CauseSection />
      <LatestNews/>
    </div>
  );
};

export default HomeScreen;
