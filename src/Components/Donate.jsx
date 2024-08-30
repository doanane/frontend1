import React, { useState } from 'react';
import axios from 'axios';
import { PaystackButton } from 'react-paystack';
import '../Styles/Donate.css';
import Navbar from '../Components/Navbar'; 
import DonationImage from '../Assets/donate2.png'; // Replace with the correct path to your image
import HeaderImage from '../Assets/donate.png'; // Replace with the correct path to your header background image
import { createDonation } from '../api/ApiService';

const Donate = () => {

  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    donationAmount: '',
    donationType: '',
    currency: 'GHS', // Added currency field
  });

  const [paystackConfig, setPaystackConfig] = useState({
    publicKey: 'pk_test_fef259dc53273c2348a226b62931b00eb6f4cb7c', 
    amount: 0,
    email: '',
    reference: '',
    currency: 'GHS', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_address: formData.email,
      donation_type: formData.donationType,
      
    };
    
    if (formData.donationType === 'Money') {
      const amountInCents = formData.donationAmount * 100;
      setPaystackConfig({
        ...paystackConfig,
        amount: amountInCents,
        email: formData.email,
        reference: `ref_${Math.floor(Math.random() * 1000000000 + 1)}`,
        currency: formData.currency,
      });
    } else {
      // Handle non-monetary donations here
      try{
        const response = await createDonation(donationData);
        if (response.data.success){
          setMessage("Thank you for reaching out to YOSA. We'll contact you soon for pickup!");
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            donationAmount: '',
            donationType: '',
          });
          console.log('Form submitted for non-monetary donation:', formData);
        } else {
          setMessage(response.data.error)
        }
      } catch(error) {
        setMessage("Sorry, there was a problem. Please try again later!")
        console.log(error);
      }
    }
  };

  const onSuccess = (reference) => {
    axios.get(`/api/verify-payment/?reference=${reference.reference}`)
      .then((response) => {
        console.log('Payment verified:', response.data);
      })
      .catch((error) => {
        console.error('Error verifying payment:', error);
      });
  };

  const onClose = () => {
    console.log('Transaction was not completed, window closed.');
  };

  return (
    <div>
      {/* Header with Navbar and Background Image */}
      <header className="header-container" style={{ backgroundImage: `url(${HeaderImage})` }}>
        <Navbar />
        <div className="header-content">
          <h1>Your Donation Has The Power To Transform Lives</h1>
          <p>Help us make a difference in the lives of those who need it most.</p>
        </div>
      </header>

      {/* Donation Form with Side Image */}
      <div className="donation-container">
        <div className="image-container">
          <img src={DonationImage} alt="Donate" className="donation-image" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-content">
          {message && <p className="form-message">{message}</p>}
            <div className="form-header">
              <h2>Donation Form</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <label>Donation Type</label>
                <select
                  name="donationType"
                  value={formData.donationType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Donation Type</option>
                  <option value="Money">Money</option>
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                </select>
              </div>
              {formData.donationType === 'Money' && (
                <>
                  <div className="form-group donation-input">
                    <label>How much do you wish to donate?</label>
                    <div className="currency-amount">
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="currency-select"
                      >
                        <option value="GHS">GHS</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="number"
                        name="donationAmount"
                        value={formData.donationAmount}
                        onChange={handleChange}
                        placeholder="Donation Amount"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                {formData.donationType === 'Money'
                  ? 'Pay with Mobile Money or Card'
                  : 'Submit Donation'}
              </button>
            </div>
          </form>
          {paystackConfig.email && paystackConfig.amount > 0 && (
            <PaystackButton
              {...paystackConfig}
              onSuccess={onSuccess}
              onClose={onClose}
              text="Pay with Mobile Money or Card"
              className="paystack-button submit-button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;
