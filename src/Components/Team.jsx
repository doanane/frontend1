import React from 'react';
import '../Styles/Team.css';
import ChelseaImage from '../Assets/Chelsea.jpeg';
import Albertina from '../Assets/Albertina .jpeg';
import Edward from '../Assets/Edward.jpg';
import Divine from '../Assets/Divine .jpeg';

// New Images for Advisors
import Advisor1 from '../Assets/Mavis.jpg';
import Advisor2 from '../Assets/Robert.jpeg';
import Advisor3 from '../Assets/Britney.jpeg';
import Advisor4 from '../Assets/Petra .jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Chelsea Armah',
      title: 'Chief Executive Director',
      image: ChelseaImage,
      profession: 'Clinical Psychologist',
      career: 'Social Worker / Human Rights Activist / Motivational Speaker / Peer Coach',
    },
    {
      name: 'Albertina Alipui',
      title: 'Finance and Administrative Manager',
      image: Albertina,
      profession: 'Accountant',
      career: 'Social Worker / Activist / Gender Advocate / Safeguarding Coordinator',
    },
    {
      name: 'Edward Mensah',
      title: 'Programmes Coordinator',
      image: Edward,
      profession: 'Social Worker',
      career: 'Social Worker / Youth Advocate',
    },
    {
      name: 'Divine Ovie Sosu',
      title: 'IT Specialist/Social Media Coordinator',
      image: Divine,
      profession: 'Cloud Engineer',
      career: 'Social Influencer / Social organizer / Advocate for Youth in IT /Motivational Speaker',
    },
  ];

  const advisors = [
    {
      name: 'Mavis Naa Korley Aryee',
      title: 'Board Chair',
      image: Advisor1,
      profession: 'Trained Journalist',
    },
    {
      name: 'Robert Amoh',
      title: '1st Vice Chair',
      image: Advisor2,
      profession: 'Teacher and a Property Entrepreneur',
    },
    {
      name: 'Britney Helena Armah-Aidoo',
      title: 'Board Secretary',
      image: Advisor3,
      profession: 'Student',
    },
    {
      name: 'Petra Oluchi Akabuogu',
      title: 'Board Member',
      image: Advisor4,
      profession: 'Undergraduate Student',
      
    },
  ];

  return (
    <div className="team-container">
      <h1 className="headingg">Meet Our Team</h1>
      <h2 className="headingg">YOUTH SPACE AFRIKA (YoSA) MANAGEMENT TEAM</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3 className="temp">{member.name}</h3>
            <p className="teamp">{member.title}</p>
            <p className="teamp">Profession: {member.profession}</p>
            <p className="teamp">Career: {member.career}</p>
          </div>
        ))}
      </div>

      <h2 className="headingg">Board of Advisors</h2>
      <div className="team-members">
        {advisors.map((advisor, index) => (
          <div className="team-member" key={index}>
            <img src={advisor.image} alt={advisor.name} />
            <h3 className="temp">{advisor.name}</h3>
            <p className="teamp">{advisor.title}</p>
            <p className="teamp">Profession: {advisor.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
