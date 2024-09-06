import React from 'react';
import styles from '../Styles/CharitySection.module.css';
import charityImage from '../Assets/about2.jpeg';
import mission from '../Assets/missionicon.png';
import vision from '../Assets/visionicon.png';



const CharitySection = () => {
  return (
    <div className={styles.charitySection}>
      <div className={styles.charityContent}>
        <h2>Welcome To Charity</h2>
        <h1>Let Us Come Together To Make A Difference</h1>
        <p>Towards A World Where Young People Regardless Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment, Contributing To A Brighter Future For All.</p>
        <div className={styles.missionVision}>
          <div className={styles.mission}>
          <img src={mission} alt="mission" />
            <h3>Our Mission</h3>
            <p>
              To Empower Young People Of All Genders Through Inclusive Leadership, Mentorship, And Empowerment Programs, Fostering A Culture Of Equality And Collaboration.
            </p>
          </div>
          <div className={styles.vision}>
          <img src={vision} alt="vision" />
            <h3>Our Vision</h3>
            <p>
              Working Towards A World Where Young People, Irrespective Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment.
            </p>
          </div>
        </div>
        <div className={styles.progressBars}>
          <div className={styles.progressBar}>
            <span>Donations</span>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: '75%' }}></div>
            </div>
            <span>75%</span>
          </div>
          <div className={styles.progressBar}>
            <span>Medical Help</span>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: '90%' }}></div>
            </div>
            <span>90%</span>
          </div>
        </div>
      </div>
      <div className={styles.charityImage}>
      <img src={charityImage} alt="Group of people" />
        <div className={styles.imageCaption}>
          <ul>
          Together, We’re Building a Brighter Future<br></br>
For every child, we envision a world where they can thrive, <br></br>free from fear and full of hope.<br></br> We are committed to meeting their essential needs.
        </ul>
        </div>
      </div>
    </div>
  );
};

export default CharitySection;
