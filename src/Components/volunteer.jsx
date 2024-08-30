import React, { useState } from "react";
import volunteer from "../Assets/volunteer.jpg";
import headerImage from "../Assets/volunteer1.png"; // Add the path to your background image
import "../Styles/volunteer.css";
import { createVolunteer } from "../api/ApiService";
import Navbar from "./Navbar"; // Import the Navbar component

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const VolunteerData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_address: formData.email,
      gender: formData.gender,
    };

    try {
      const response = await createVolunteer(VolunteerData);
      console.log("Volunteer registered successfully:", response.data);
      setMessage("Thank you for volunteering to YOSA");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage("Sorry, the email has already been used. Please try again!");
        } else {
          setMessage("There was an error registering volunteer!");
        }
      } else if (error.request) {
        setMessage("Server is not responding. Please try again later.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
      console.log("There was an error registering volunteer!", error);
    }
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Header Section */}
      <header className="header-section">
        <img src={headerImage} alt="Header Background" className="header-image" />
        <div className="header-overlay">
          <h1>Register to Volunteer</h1>
          <p>Join us in making a difference!</p>
        </div>
      </header>

      {/* Registration Form */}
      <div className="registration-container">
        <div className="image-section">
          <img src={volunteer} alt="Fashion Collection 2018" className="image" />
          <p className="image-caption">#Collection 2018</p>
        </div>
        <div className="form-section">
          <h2 className="form-title">REGISTER TO VOLUNTEER WITH US</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            {message && <p className="form-message">{message}</p>}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="form-input-wrapper">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <span className="input-icon">✉️</span>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Register <span className="button-icon">➡️</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
