import   { useState, useEffect } from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Education Programs",
    icon: "📚",
    description: "Providing quality education to underprivileged children through our network of schools and learning centers.",
    path: "/education-programs",
  },
  {
    id: 2,
    title: "Healthcare Initiatives",
    icon: "🏥",
    description: "Free medical camps, vaccination drives, and health awareness programs in rural areas.",
    path: "/healthcare-initiatives",
  },
  {
    id: 3,
    title: "Food Distribution",
    icon: "🍲",
    description: "Daily meal programs and nutrition support for families in need across communities.",
    path: "/food-distribution",
  },
  {
    id: 4,
    title: "Disaster Relief",
    icon: "🚨",
    description: "Rapid response teams providing emergency aid during natural calamities and crises.",
    path: "/disaster-relief",
  },
  {
    id: 5,
    title: "Women Empowerment",
    icon: "💪",
    description: "Vocational training and micro-finance programs to help women become financially independent.",
    path: "/women-empowerment",
  },
  {
    id: 6,
    title: "Elderly Care",
    icon: "👵",
    description: "Supporting senior citizens with healthcare, companionship, and daily necessities.",
    path: "/elderly-care",
  },
];

const stories = [
  {
    id: 1,
    quote: "Thanks to the education program, my daughter is now the first in our family to attend school regularly.",
    author: "Rahul, Father of 3",
    location: "Mumbai, India",
    image: "Images/edu-daug.jpg",
  },
  {
    id: 2,
    quote: "The medical camp saved my husband's life when he had a severe infection and we couldn't afford treatment.",
    author: "Priya, Caregiver",
    location: "Rural Uttar Pradesh",
    image: "Images/old.jpg",
  },
  {
    id: 3,
    quote: "After the vocational training, I started my own tailoring business and now support my entire family.",
    author: "Sunita, Entrepreneur",
    location: "Delhi, India",
    image: "Images/woman.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services3 = [
  {
    category: "Nutrition",
    programs: ["Food pantry", "Community kitchen"],
    costPerBeneficiary: "$3.20",
    monthlyReach: "1,200 people",
    cta: "Fund a Week of Meals"
  },
  {
    category: "Healthcare",
    programs: ["Mobile clinic", "Vaccination drives"],
    costPerBeneficiary: "$45",
    monthlyReach: "350 patients",
    cta: "Sponsor a Clinic"
  },
  {
    category: "Education",
    programs: ["Tutoring", "School supplies"],
    costPerBeneficiary: "$18",
    monthlyReach: "200 students",
    cta: "Support a Learner"
  }
];

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
   
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

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

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={`hero-services ${theme === 'dark' ? 'dark' : ''}`}>
        <video className="hero-video-services" src="/Images/services.mp4" autoPlay loop muted playsInline />
        <div className="hero-overlay-services">
          <h1 className={theme === 'dark' ? 'text-white' : ''}>Small Acts, Big Impact – Together We Can Change Lives.</h1>
          <p className={theme === 'dark' ? 'text-white' : ''}>Every act of kindness, no matter how small, creates ripples of hope.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={`services-section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="services-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="services-header"
          >
            <h2 className={theme === 'dark' ? 'text-white' : ''}>Our Humanitarian Services</h2>
            <p className={theme === 'dark' ? 'text-white' : ''}>We're committed to making a difference through these vital programs</p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`service-card ${theme === 'dark' ? 'dark' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className={theme === 'dark' ? 'text-white' : ''}>{service.title}</h3>
                <p className={theme === 'dark' ? 'text-white' : ''}>{service.description}</p>
                <button className="learn-more-btn" onClick={() => navigate(service.path)}>Discover More →</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className={`impact-section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="impact-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className={theme === 'dark' ? 'text-white' : ''}>Lives We've Touched</h2>
            <p className={theme === 'dark' ? 'text-white' : ''}>Real stories from people whose lives have been transformed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="carousel-wrapper"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
            >
              {stories.map((story) => (
                <SwiperSlide key={story.id}>
                  <div className={`story-card ${theme === 'dark' ? 'dark' : ''}`}>
                    <div className="card-image">
                      <img src={story.image} alt={story.author} />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="card-content">
                      <blockquote className={theme === 'dark' ? 'text-white' : ''}>"{story.quote}"</blockquote>
                      <div className="author-info">
                        <h4 className={theme === 'dark' ? 'text-white' : ''}>{story.author}</h4>
                        <p className={theme === 'dark' ? 'text-white' : ''}>{story.location}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Metric Comparison Section */}
      <section className={`metric-comparison ${theme === 'dark' ? 'dark' : ''}`}>
        <h2 style={{ textAlign: "center", color: theme === 'dark' ? 'white' : 'inherit' }}>Service Impact Breakdown</h2>
        <table>
          <thead>
            <tr>
              <th className={theme === 'dark' ? 'dark' : ''}>Category</th>
              <th className={theme === 'dark' ? 'dark' : ''}>Programs</th>
              <th className={theme === 'dark' ? 'dark' : ''}>Cost Per Person</th>
              <th className={theme === 'dark' ? 'dark' : ''}>Monthly Reach</th>
              <th className={theme === 'dark' ? 'dark' : ''}>Take Action</th>
            </tr>
          </thead>
          <tbody>
            {services3.map((service, index) => (
              <tr key={index} className={theme === 'dark' ? 'dark' : ''}>
                <td className={theme === 'dark' ? 'text-white' : ''}>{service.category}</td>
                <td className={theme === 'dark' ? 'text-white' : ''}>
                  <ul>
                    {service.programs.map((program, i) => (
                      <li key={i} className={theme === 'dark' ? 'text-white' : ''}>{program}</li>
                    ))}
                  </ul>
                </td>
                <td className={theme === 'dark' ? 'text-white' : ''}>{service.costPerBeneficiary}</td>
                <td className={theme === 'dark' ? 'text-white' : ''}>{service.monthlyReach}</td>
                <td>
                  <button className="metric-cta" onClick={handleNavigate('/contact')}>
                    {service.cta}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Transformation Stories Section */}
      <section className={`volunteer-section ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="volunteer-container">
          <div className="volunteer-text">
            <h2 className={theme === 'dark' ? 'text-black' : ''}>Volunteer With Us</h2>
            <p className={theme === 'dark' ? 'text-black' : ''}>
              Whether you can spare a few hours or a few days, your time makes a real impact. Help distribute food, teach children, support health camps, or simply lend a hand. Every action counts.
            </p>
            <ul className="volunteer-benefits">
              <li className={theme === 'dark' ? 'text-black' : ''}>👐 Build real-world impact in local communities</li>
              <li className={theme === 'dark' ? 'text-black' : ''}>📚 Gain hands-on experience and training</li>
              <li className={theme === 'dark' ? 'text-black' : ''}>💬 Connect with like-minded changemakers</li>
            </ul>
            <button className="volunteer-button" onClick={handleNavigate('/contact')}>Join Our Volunteer Team</button>
          </div>
          <div className="volunteer-image">
            <img src="/images/rahul.jpg" alt="Volunteers working" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;