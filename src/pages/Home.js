import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const data = [
  {
    name: 'James Pattinson',
    text: '“Lobortis leo pretium facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”',
    rating: 4,
    imgSrc: 'Images/test1.jpg',
  },
  {
    name: 'Greg Stuart',
    text: '“Vestibulum, cum nam non amet consectetur morbi senectus condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultrices.”',
    rating: 5,
    imgSrc: 'Images/test2.jpg',
  },
  {
    name: 'Trevor Mitchell',
    text: '“Ut tristique viverra sed porttitor senectus. A facilisis metus pretium id habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.”',
    rating: 3,
    imgSrc: 'Images/test3.jpg',
  },
];

const programs = [
  {
    logo: 'Images/edu-logo.png',
    title: 'Education for All',
    tagline: 'Empowering Minds, Transforming Futures',
    description: 'Providing quality education to underprivileged children, ensuring a brighter tomorrow.',
  },
  {
    logo: 'Images/healthcare.png',
    title: 'Healthcare Access',
    tagline: 'Wellness for Every Community',
    description: 'Delivering essential healthcare services to remote and underserved areas.',
  },
  {
    logo: 'Images/clean-water.png',
    title: 'Clean Water Initiative',
    tagline: 'Quenching Thirst, Saving Lives',
    description: 'Installing sustainable water systems to combat water scarcity and improve hygiene.',
  },
  {
    logo: 'Images/food.png',
    title: 'Food Security Program',
    tagline: 'Nourishing Bodies, Strengthening',
    description: 'Distributing nutritious meals to families facing food insecurity.',
  },
  {
    logo: 'Images/shelter.png',
    title: 'Shelter for Homeless',
    tagline: 'Providing Roofs, Restoring Dignity',
    description: 'Offering safe and supportive housing solutions for the homeless.',
  },
  {
    logo: 'Images/mental-health.png',
    title: 'Mental Health Support',
    tagline: 'Healing Minds, Building Resilience',
    description: 'Offering counseling and support services to those affected by mental health issues.',
  },
  {
    logo: 'Images/youth.png',
    title: 'Youth Mentorship Program',
    tagline: 'Guiding Tomorrow\'s Leaders',
    description: 'Pairing young individuals with experienced mentors to provide guidance support..',
  },
  {
    logo: 'Images/clean-up.png',
    title: 'Community Clean-Up Initiative',
    tagline: 'Revitalizing Our Neighborhoods',
    description: 'Organizing regular clean-up events in local parks, streets, and public spaces.',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

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

  const handleGetStarted = (path) => {
    navigate(path);
  };
  
  const handleDonateNow = () => {
    navigate('/donate');
  };
  
  const handleContactUs = () => {
    navigate('/contact');
  };
  
  const handleJoinMission = () => {
    navigate('/Aboutus');
  };
  
  const handleSeeOurWork = () => {
    navigate('/services');
  };
  
  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className={`hero-container ${theme === 'dark' ? 'dark' : ''}`}>
        <video className="hero-video" autoPlay loop muted>
          <source src="/Images/herohome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className={theme === 'dark' ? 'text-white' : ''}>Give Hope, Change Lives</h1>
          <p className={theme === 'dark' ? 'text-white' : ''}>Together we can make a difference. Join us in supporting those in need and building a brighter future.</p>
          <button className="hero-btn" onClick={handleDonateNow}>Donate Now</button>
        </div>
      </div>
      
      {/* Second Section */}
      <section className={`second-container ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="second-content">
          <p className={`second-con-greeting ${theme === 'dark' ? 'text-white' : ''}`}>
            Welcome to a place where kindness changes lives
          </p>
          <h1 className={`sec-hero-title ${theme === 'dark' ? 'text-white' : ''}`}>
            Together, We Can Change Lives
          </h1>
          <p className={`sec-hero-description ${theme === 'dark' ? 'text-white' : ''}`}>
            "Every act of kindness, no matter how small, has the power to transform lives. At Hope Foundation, we witness this truth every day as we work to create a brighter future for those in need. Whether it's providing nourishing meals to hungry families, safe shelter to those without homes, quality education to underserved children, or vital healthcare to vulnerable communities, each gesture of support creates ripples of hope. We've seen how a single meal can restore strength, how one school uniform can renew dignity, and how access to medical care can save generations. But the challenges remain great - too many still face hunger, homelessness, and hardship. That's why we need you. Your contribution, whether through donating, volunteering, or simply spreading awareness, becomes part of something greater. Together, we're not just offering temporary relief; we're building pathways out of poverty, empowering individuals to rewrite their stories, and planting seeds of lasting change in communities. When compassionate people unite, miracles happen. Join us in this movement of hope - because every life touched, every family lifted, and every community transformed begins with someone like you saying, 'I can help.' The need is urgent, but the solution is within our reach when we stand together."
          </p>
          <button className="sec-hero-button" onClick={handleContactUs}>Contact Us</button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="Images/charityl.jpg"
            alt="Charity Event"
            className="hero-image"
          />
        </div>
      </section>
      
      {/* Third Section */}
      <section className={`programs-section ${theme === 'dark' ? 'dark' : ''}`}>
        <h2 className={`programs-title ${theme === 'dark' ? 'text-white' : ''}`}>Our Key Programs</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className={`program-card ${theme === 'dark' ? 'dark' : ''}`}>
              <img src={program.logo} alt={`${program.title} Logo`} className="program-logo" />
              <h3 className={`program-title ${theme === 'dark' ? 'text-white' : ''}`}>{program.title}</h3>
              <p className={`program-tagline ${theme === 'dark' ? 'text-white' : ''}`}>{program.tagline}</p>
              <p className={`program-desc ${theme === 'dark' ? 'text-white' : ''}`}>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Counter Section */}
      <section className={`charity-impact-home1 ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="impact-header-home1">
          <h2 className={theme === 'dark' ? 'text-white' : ''}>Our Impact</h2>
          <p className={theme === 'dark' ? 'text-white' : ''}>Transforming lives through nourishment and education</p>
        </div>

        <div className="impact-stats-home1">
          {[
            { number: '5M+', label: 'Meals Served Daily', desc: 'Across 12 Indian states' },
            { number: '20K+', label: 'Schools Reached', desc: 'Government and aided schools' },
            { number: '85%', label: 'Attendance Increase', desc: 'In partner schools' },
            { number: '1.8M', label: 'Children Empowered', desc: 'Since 2000' },
          ].map((stat, idx) => (
            <div key={idx} className={`stat-card-home1 ${theme === 'dark' ? 'dark' : ''}`}>
              <div className={`stat-number-home1 ${theme === 'dark' ? 'text-white' : ''}`}>{stat.number}</div>
              <div className={`stat-label-home1 ${theme === 'dark' ? 'text-white' : ''}`}>{stat.label}</div>
              <div className={`stat-desc-home1 ${theme === 'dark' ? 'text-white' : ''}`}>{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="impact-cta-home1">
          <button className="cta-button" onClick={handleJoinMission}>Join Our Mission</button>
          <button className={`secondary-button ${theme === 'dark' ? 'dark' : ''}`} onClick={handleSeeOurWork}>See Our Work</button>
        </div>
      </section>

      {/* Fifth Section */}
      <section className={`testimonials-fullscreen-home1 ${theme === 'dark' ? 'dark' : ''}`}>
        <h2 className={`testimonials-title-home1 ${theme === 'dark' ? 'text-white' : ''}`}>What our clients say about us.</h2>
        <div className="testimonials-container-home1">
          {data.map((item, idx) => (
            <div key={idx} className={`testimonial-card-home1 ${theme === 'dark' ? 'dark' : ''}`}>
              <img src={item.imgSrc} alt={item.name} className="testimonial-photo-home1" />
              <h3 className={`testimonial-name-home1 ${theme === 'dark' ? 'text-white' : ''}`}>{item.name}</h3>
              <div className="testimonial-stars-home1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < item.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
              <p className={`testimonial-text-home1 ${theme === 'dark' ? 'text-white' : ''}`}>{item.text}</p>
            </div>
          ))}
        </div>
        <button className="testimonial-btn-home1" onClick={handleGetQuote}>Get a Quote</button>
      </section>
      
      {/* Contact Section */}
      <section className={`contact-section-home1 ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="container-fluid p-0">
          <div className="row no-gutters align-items-center">
            
            {/* Image Side */}
            <div className="col-md-6">
              <img
                src="/Images/contact-for-home.jpg"
                alt="Support person"
                className="img-fluid w-100"
              />
            </div>

            {/* Content Side */}
            <div className="col-md-6">
              <div className="p-5">
                <h2 className={`contact-title ${theme === 'dark' ? 'text-white' : ''}`}>Your Call Can Save Lives.</h2>
                <p className={`contact-text ${theme === 'dark' ? 'text-white' : ''}`}>
                  Your voice matters in our mission to create a better world. Whether you want to volunteer,
                  partner with us, or simply learn more about our work, we'd love to hear from you. Together,
                  we can turn compassion into action—one connection at a time. Drop us a message, call our
                  team, or visit our offices. Let's start making a difference today.
                </p>
                <button className="btn btn-primary" style={{backgroundColor:"#00CAE0"}} onClick={() => handleGetStarted('/contact')}>
                  Get Started
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;