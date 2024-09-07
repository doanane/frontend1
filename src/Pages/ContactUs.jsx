import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import "../Styles/tailwind.css";
import { createContactUsMesasge } from "../api/ApiService.js";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const ContactData = {
      first_name: formData.firstname,
      last_name: formData.lastname,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    };
  
    try {
      const response = await createContactUsMesasge(ContactData);
      if (response.data.success) {
        setMessage("Thank you for reaching out, we'll respond to you shortly.");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorMessage = response.data.error || "An error occurred while processing your request.";
        setMessage("There was an error: " + errorMessage);
      }
    } catch (error) {
      console.log(error);
      setMessage("Sorry, your message wasn't sent. Please try again later!");
    }
  };
  

  return (
    <div className="relative">
      <div className="heading h-64 relative">
        <img
          src={require("../Assets/contactus.png")}
          alt="Header"
          className="h-64 w-full object-cover"
        />
        <h1
          className="text-5xl text-center text-white p-4 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "rgba(56, 2, 68, 0.4)" }}
        >
          Contact Us
        </h1>

        <div className="absolute top-0 left-0 right-0">
          <Navbar />
        </div>
      </div>

      <div className="mx-6 md:mx-20">
        {message && (
          <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
            {message}
          </div>
        )}
        <p className="text-lg font-bold mt-5">Get In Touch</p>
        <h2 className="text-3xl font-bold">Send Me A Message</h2>
      </div>

      <div className="flex h-full mt-5 flex-col sm:flex-row md:flex-row gap-5 gap-x-10 align-center justify-center px-2 md:mx-20">
        <div className="sm:w-2/3 h-full w-full p-2">
          <form onSubmit={handleSubmit}>
            <div name="name-section" className="flex gap-2 gap-x-10 flex-row">
              <div name="first-name" className="w-1/2 flex flex-col ml-1">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="bg-green-50 placeholder:p-2 w-full h-10"
                  placeholder="First Name"
                />
              </div>

              <div name="last-name" className="w-1/2 flex flex-col mr-1">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full placeholder:p-2 bg-green-50 h-10"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div
              name="mail-phone-section"
              className="flex gap-2 gap-x-10 flex-row mt-5"
            >
              <div name="mail-section" className="w-1/2 flex flex-col ml-1">
                <label htmlFor="mail">Email</label>
                <input
                  type="text"
                  name="email"
                  id="mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-green-50 placeholder:p-2 h-10"
                  placeholder="Email"
                />
              </div>

              <div name="phone-section" className="w-1/2 flex flex-col mr-1">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-green-50 placeholder:p-2 h-10"
                  placeholder="+088"
                />
              </div>
            </div>

            <div
              name="message-section"
              className="w-full flex flex-col mr-1 p-1 mt-5"
            >
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-green-50 placeholder:p-2 h-40"
                placeholder="Message"
              />
            </div>

            <div name="button-section" className="p-1 mt-5">
              <button className="bg-slate-950 text-white p-2 hover:bg-white hover:text-slate-950 hover:border-slate-500 hover:border-2 h-10 hover:rounded-2xl">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="sm:w-1/3 h-full w-full bg-green-50 p-4">
          <h1 className="text-3xl font-bold mb-4">Address</h1>

          <p className="mb-4">
            We value your interest in our mission and would love to hear from
            you! <br />
            Whether you have questions, want to get involved, or simply wish to
            learn more about our work, please feel free to reach out.
          </p>

          <p>
            <span className="font-bold">Location: </span>
            Dansoman, Asoredanho
          </p>
          <p>
            <span className="font-bold">Phone: </span>
            +233 201012589
          </p>
          <p>
            <span className="font-bold">Email: </span>
            youthspaceafrika@gmail.com
          </p>
        </div>
      </div>

      <div
        name="sponsors-logos"
        className="flex flex-row justify-between items-center h-32 mt-10 mb-20 md:mx-20"
      >
        <div className="w-1/4 h-full flex justify-center bg-white">
          <img
            src={require("../Assets/client1.png")}
            alt="sponsor1"
            className="h-full object-contain"
          />
        </div>
        <div className="w-1/4 h-full flex justify-center bg-white">
          <img
            src={require("../Assets/client2.png")}
            alt="sponsor2"
            className="h-full object-contain"
          />
        </div>
        <div className="w-1/4 h-full flex justify-center bg-white">
          <img
            src={require("../Assets/client3.png")}
            alt="sponsor3"
            className="h-full object-contain"
          />
        </div>
        <div className="w-1/4 h-full flex justify-center bg-white">
          <img
            src={require("../Assets/client4.png")}
            alt="sponsor4"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
