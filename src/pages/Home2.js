import React from 'react';
import Slider from 'react-slick';
import './Home2.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  { id: 1, img: '/Images/tech-rural.jpg', text: 'Tech for Rural Schools', text2: 'Bridging the digital divide with laptops and WiFi for 100 remote schools. Education should not have a zip code limit.' },
  { id: 2, img: '/Images/weelchair.jpg', text: 'Wheelchair Access Initiative', text2: 'Building ramps and accessible facilities in public spaces. Mobility is a right, not a privilege.' },
  { id: 3, img: '/Images/mentorship.jpg', text: 'Foster Youth Mentorship', text2: 'Matching teens aging out of foster care with career mentors and housing support.' },
  { id: 4, img: '/Images/distaster.jpg', text: 'Disaster Tech Response', text2: 'Deploying drones to deliver medicines and map crisis zones within hours of emergencies.' },
];

const logos = [
  { src: '/Images/logo111.png', alt: 'Partner One' },
  { src: '/Images/sbi.jpg', alt: 'Partner Two' },
  { src: '/images/ibm.jpg', alt: 'Partner Three' },
  { src: '/images/infosys.jpg', alt: 'Partner Four' },
  { src: '/images/tcs.jpg', alt: 'Partner Five' },
];

const programs = [
  {
    id: 1,
    title: 'Community Health Camp',
    date: 'September 20, 2025',
    description: 'Free health check-ups and consultation in rural areas.',
    image: '/Images/health-camp.jpg',
  },
  {
    id: 2,
    title: 'Green Tree Plantation Drive',
    date: 'October 5, 2025',
    description: 'Join us to plant 5,000 trees in urban localities.',
    image: '/images/green-tree.jpg',
  },
  {
    id: 3,
    title: 'Digital Literacy Workshop',
    date: 'November 10, 2025',
    description: 'Empowering senior citizens with basic computer skills.',
    image: '/images/digital literacy.jpg',
  },
];

const settings = {
  infinite: true,
  slidesToShow: Math.min(logos.length, 5),
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: Math.min(logos.length, 4) } },
    { breakpoint: 768, settings: { slidesToShow: Math.min(logos.length, 3) } },
    { breakpoint: 576, settings: { slidesToShow: Math.min(logos.length, 2) } },
  ],
};

const Home2 = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = `theme-${savedTheme}`;
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
      document.body.className = `theme-${newTheme}`;
    };
    
    // Listen for custom event and storage changes
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  return (
    <div className={`home2-container theme-${theme}`}>
      {/* Hero Section */}
      <section className="hero-home2">
        <video className="hero-video-home2" src="/Images/home2.mp4" autoPlay loop muted playsInline />
        <div className="hero-overlay-home2">
          <h1>Small Acts, Big Impact – Together We Can Change Lives.</h1>
          <p>Every act of kindness, no matter how small, creates ripples of hope.</p>
          <div className="hero-buttons-home2">
            <button className="btn-home2" onClick={handleNavigate('/contact')}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Impact Pathway Section */}
      <section className="impact-pathway">
        <div className="pathway-header">
          <h2>How Your Support Creates Lasting Change</h2>
          <p>Transparency in every step of our mission</p>
        </div>
        <div className="pathway-steps">
          {/* Step 1 */}
          <div className="step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Identify Needs</h3>
              <p style={{ textAlign: 'justify' }}>
                Effective charitable work begins with a clear and evidence-based understanding of the needs you're aiming to address.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="step step-reverse">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Designing Sustainable Solutions</h3>
              <p style={{ textAlign: 'justify' }}>
                At the heart of our mission lies the commitment to create solutions that are not only effective but also enduring.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Mobilizing Resources & Support</h3>
              <p style={{ textAlign: 'justify' }}>
                At the core of our mission is the belief that lasting change is achieved through collective effort.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="step step-reverse">
            <div className="step-icon">4</div>
            <div className="step-content">
              <h3>Implementing Programs</h3>
              <p style={{ textAlign: 'justify' }}>
                At the core of our mission lies the commitment to create solutions that are not only effective but also enduring.
              </p>
              <button className="impact-button">See 2024 Impact Report →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="card-section py-5">
        <div className="container-fluid">
          <div className="text-center mb-4 px-3 px-md-5">
            <h2 className="section-title">Where Compassion Meets Action.</h2>
            <p className="section-desc">Explore the impact stories from our supported initiatives.</p>
          </div>
          <div className="new-card row row-cols-1 row-cols-md-4 g-4 mx-0 px-3 px-md-5">
            {cards.map((card) => (
              <div key={card.id} className="col">
                <div className="card h-100 custom-card">
                  <img src={card.img} className="card-img-top" alt={`Card ${card.id}`} />
                  <div className="card-body">
                    <h3 className="card-title" style={{ fontSize: '20px' }}>{card.text}</h3>
                    <p className="card-text">{card.text2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <section className="partners-section">
        <h2 className="">OUR PARTNERS IN CHANGE</h2>
        <Slider {...settings} clpartners-titleassName="partners-slider">
          {logos.map((logo, idx) => (
            <div key={idx} className="logo-slide">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </Slider>
      </section>
      
      {/* Upcoming Programs Section */}
      <section className="upcoming-programs-section-home2">
        <div className="content-wrapper text-center-home2">
          <h2>Our Upcoming Programs</h2>
          <p style={{textAlign:"center"}}>Be part of our mission—discover how you can make a difference next.</p>
        </div>
        <div className="programs-grid-home2">
          {programs.map((program) => (
            <div key={program.id} className="program-card-home2">
              <img src={program.image} alt={program.title} className="program-image-home2" />
              <div className="program-info-home2">
                <h3>{program.title}</h3>
                <time>{program.date}</time>
                <p>{program.description}</p>
                <button className="btn btn-primary" style={{ backgroundColor: "#00CAE0" }}>Join Us</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact section */}
      <section className="contact-section">
        <h1>Your Perfect Home Starts with a Conversation</h1>
        <p>Finding your dream home isn't just about listings—it's about understanding your unique needs, preferences, and aspirations.</p>
        <button onClick={handleNavigate('/contact')}>Reach Out Today</button>
      </section>
    </div>
  ); 
};

export default Home2;