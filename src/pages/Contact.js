import React, { useState, useRef, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart, FaDonate, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationType, setDonationType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    village: '',
    email: '',
    amount: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [theme, setTheme] = useState('light');
  const formRef = useRef();

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
    }
  }, []);

  // Listen for theme changes from Header component
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  const handleDonateClick = (type) => {
    setDonationType(type);
    setShowDonationForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        '',
        'YOUR_TEMPLATE_ID',
        {
          ...formData,
          donationType
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitMessage('Thank you for your donation! We will contact you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        village: '',
        email: '',
        amount: ''
      });

      setTimeout(() => {
        setShowDonationForm(false);
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      setSubmitMessage('There was an error submitting your donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-page ${theme}`}>
      {/* Donation Modal */}
      {showDonationForm && (
        <div className="donation-modal">
          <div className="donation-modal-content">
            <button className="close-modal" onClick={() => setShowDonationForm(false)}>
              <FaTimes />
            </button>
            <h2>{donationType === 'one-time' ? 'One-Time Donation' : 'Monthly Support'}</h2>
            {submitMessage ? (
              <div className="submit-message"><p>{submitMessage}</p></div>
            ) : (
              <form ref={formRef} className="donation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Mobile *</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Village/City *</label>
                    <input type="text" name="village" value={formData.village} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Amount (₹) *</label>
                    <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required />
                  </div>
                </div>
                <button type="submit" className="submit-donation-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Submit Donation'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      
      {/* Section 1: Hero Banner */} 
      <section className="hero"> 
        <video className="hero-video" src="/Images/contact.mp4" autoPlay loop muted playsInline /> 
        <div className="hero-overlay"> 
          <h1>Get In Touch.</h1> 
          <p>We'd love to hear from you. Whether you want to volunteer, donate, or just learn more.</p> 
        </div> 
      </section> 
      
      {/* Section 2: Contact Information */} 
      <section className="contact-info-section"> 
        <div className="container"> 
          <h2>Our Contact Information</h2> 
          <div className="info-grid"> 
            <div className="info-card"> 
              <FaPhone className="info-icon"/> 
              <h3>Phone</h3> 
              <p>+1 (555) 123-4567</p> 
              <p>24/7 Helpline: +1 (555) 987-6543</p> 
            </div> 
            <div className="info-card"> 
              <FaEnvelope className="info-icon" /> 
              <h3>Email</h3> 
              <p>info@charityhope.org</p> 
              <p>support@charityhope.org</p> 
            </div> 
            <div className="info-card"> 
              <FaMapMarkerAlt className="info-icon" /> 
              <h3>Address</h3> 
              <p>123 Helping Hands Avenue</p> 
              <p>Hope City, HC 56789</p> 
            </div> 
            <div className="info-card"> 
              <FaClock className="info-icon" /> 
              <h3>Office Hours</h3> 
              <p>Monday-Friday: 9am - 5pm</p> 
              <p>Weekends: 10am - 2pm</p> 
            </div> 
          </div> 
        </div> 
      </section> 
      
      {/* Section 3: Contact Form */} 
      <section className="contact-form-section"> 
        <div className="container"> 
          <div className="form-header"> 
            <h2>Send Us a Message</h2> 
            <p>We'd love to hear from you. Fill out the form below, and our team will get back to you shortly.</p> 
          </div> 
          <form className="contact-form"> 
            <div className="form-row"> 
              <div className="form-group"> 
                <label htmlFor="name">Your Name</label> 
                <input type="text" id="name" placeholder="John Doe" required /> 
              </div> 
              <div className="form-group"> 
                <label htmlFor="email">Email Address</label> 
                <input type="email" id="email" placeholder="john@example.com" required /> 
              </div> 
            </div> 
            <div className="form-group"> 
              <label htmlFor="subject">Subject</label> 
              <input type="text" id="subject" placeholder="How can we help?" required /> 
            </div> 
            <div className="form-group"> 
              <label htmlFor="message">Your Message</label> 
              <textarea id="message" rows="6" placeholder="Type your message here..." required></textarea> 
            </div> 
            <button type="submit" className="submit-btn"> 
              Send Message 
              <FaHeart className="btn-icon" /> 
            </button> 
          </form> 
        </div> 
      </section> 
      
      {/* Section 4: Volunteer Opportunities */} 
      <section className="volunteer-section"> 
        <div className="container"> 
          <h2>Volunteer With Us</h2> 
          <div className="volunteer-content"> 
            <div className="volunteer-text"> 
              <p>Join our team of dedicated volunteers and make a difference in your community. We have opportunities for all skill levels and time commitments.</p> 
              <ul> 
                <li>Weekly volunteer shifts</li> 
                <li>Special event volunteers</li> 
                <li>Skilled professional volunteers</li> 
                <li>Remote volunteering options</li> 
              </ul> 
              <button className="volunteer-btn">Learn About Volunteering</button> 
            </div> 
            <div className="volunteer-image"> 
              <img src="/Images/volunteer.jpg" alt="Volunteer with us" className="volunteer-img" /> 
            </div> 
          </div> 
        </div> 
      </section> 
      
      {/* Section 5: Map and Donation Options */} 
      <section className="map-donation-section"> 
        <div className="container"> 
          <div className="map-container"> 
            <h2>Find Us</h2> 
            <div className="map-placeholder"> 
              <img src='/Images/map.jpg' alt="Map Location" className="map-image" /> 
            </div> 
          </div> 
          <div className="donation-container"> 
            <h2>Support Our Cause</h2> 
            <div className="donation-options"> 
              <div className="donation-card"> 
                <FaDonate className="donation-icon" /> 
                <h3>One-Time Donation</h3> 
                <p>Make an immediate impact with a single contribution.</p> 
                <button className="donate-btn" onClick={() => handleDonateClick('one-time')} > 
                  Donate Now 
                </button> 
              </div> 
              <div className="donation-card"> 
                <FaDonate className="donation-icon" /> 
                <h3>Monthly Support</h3> 
                <p>Sustain our work with recurring monthly donations.</p> 
                <button className="donate-btn" onClick={() => handleDonateClick('monthly')} > 
                  Subscribe
                </button> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>
    </div>
  );
};

export default Contact;