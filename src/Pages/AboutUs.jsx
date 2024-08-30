
 import image1 from "../Assets/Gall1.png";
import image2 from "../Assets/gall2.png";
import image3 from "../Assets/gall3.png";
//import Gallery4 from "../Assets/gall4.png";
//import Gallery5 from "../Assets/gall5.png";
//import Gallery6 from "../Assets/gall6.png";
import React, { useEffect, useState } from "react";
import "../Styles/AboutUs.css";
import Navbar from "../Components/Navbar";
import hope from "../Assets/hope.png";
import mission from '../Assets/missionicon.png';
import vision from '../Assets/visionicon.png';
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import "../Styles/AboutUs.css";
import { fetchgallery } from "../api/ApiService";



const features = [
  {
    title: "Food & Homeless Charity",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
    ],
    icon: require('../Assets/houseicon.png'),
  },
  {
    title: "Make A Donation",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
      "Lorem Ipsum Dolor Sit Amet",
    ],
    icon: require('../Assets/dolldo.png'),
  },
  {
    title: "Non Profit NGO",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
      "Lorem Ipsum Dolor Sit Amet",
      "Children Where We Are Able To Fulfill All",
    ],
    icon: require('../Assets/shakeicon.png'),
  },
];



const AboutUs = () => {

  const [image, setImage] = useState([])

  useEffect(() => {
    fetchgallery()
    .then((response) => {
      console.log("Fetched data", response.data);
      setImage(response.data);
    }).catch((error) => {
      console.error("There was an error fetching images!", error);
    });
  }, []);




  return (
<div className="about-page">
  <header className="header">
    <Navbar />
    <div className="header-text">
      <h1>About Us</h1>
    </div>
  </header>

  <div className="container">
    <div className="image-content">
      <img src={image1} alt="Team Img 1" />
      <img src={image2} alt="Team Img 2" />
      <img src={image3} alt="Team Img 3" />
    </div>
    <div className="text-content">
      <h1>About Us</h1>
      <p>
        Youth Space Afrika is a non for profit, youth led, adolescent focus and
        women focused organization that provides safe spaces for young people and girls
        to develop their potentials and as well advocate for against issues that affect
        adolescents, marginalized and vulnerable such as Persons with Disabilities,
        Persons living with HIV and Street children. The organization further serves as a platform
        where young people are able to access all information relating to their Sexual and
        Reproductive Health and Rights in order for them to make informed decisions.
      </p>
    </div>
  </div>
        <Team/>
        <div className="charitySection">
      <div className="charityContent">
        <h2>Welcome To Charity</h2>
        <h1>Let Us Come Together To Make A Difference</h1>
        <p>Towards A World Where Young People Regardless Of Gender,<br></br> Unlock Their Full Potential Through Youth Leadership,<br></br> Mentorship, And Empowerment, Contributing To A Brighter Future For All.</p>
        <div className="missionVision">
          <div className="mission">
            <img src={mission} alt="mission" />
            <h3>Our Mission</h3>
            <p>
              To Empower Young People Of <br></br>All Genders Through Inclusive Leadership. 
            </p>
          </div>
          <div className="vision">
            <img src={vision} alt="vision" />
            <h3>Our Vision</h3>
            <p>
              Working Towards A World Where Young People, <br></br>Irrespective Of Gender, Unlock Their Full Potential <br></br>Through Youth Leadership, Mentorship, And Empowerment. 
            </p>
          </div>
        </div>
        <div className="progressBars">
          <div className="progressBar">
            <span>Donations</span>
            <div className="bar">
              <div className="fill" style={{ width: '75%' }}></div>
            </div>
            <span>75%</span>
          </div>
          <div className="progressBar">
            <span>Medical Help</span>
            <div className="bar">
              <div className="fill" style={{ width: '90%' }}></div>
            </div>
            <span>90%</span>
          </div>
        </div>
      </div>
    </div>
        <div className="about-us-section">
          <div className="image-container">
            <img
              src={hope}
              alt="Painted rocks with hope message"
              className="main-image"
            />
            <div className="overlay">
              <ul className="overlay-text">
                <li>Together, We're Going to Make The Future</li>
                <li>Children Where We Are Able To Fulfill All</li>
                <li>
                  Their Requirements To Keep <br />
                  Them Safe From Withered World
                </li>
                <li>
                  We Have Already Stepped Out And <br />
                  Start Changing The World
                </li>
                <li>Keeping Safe Them From War, Inhumanity</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-cards">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${
                  index === 0 ? "feature-card-light" : "feature-card-light"
                }`}
              >
                <div className="icon-wrapper">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="icon"
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2>Our Gallery</h2>
          <div  className="gallery-images">
          {image.map((img, index) => (
            <img src={img.image} key={index} alt={`Gallery ${index}`} className="Gallery1" />
          ))}
          </div>
        </section>
   <Testimonial/>
    </div>
  );
};

export default AboutUs;
