
import { motion } from 'framer-motion';
import { FaBookOpen, FaUserGraduate, FaChalkboard } from 'react-icons/fa';
import './EducationProgram.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const EducationProgram = () => {
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path);
    }
    
    const [theme, setTheme] = useState('light');
    
    // Load theme preference from localStorage on component mount
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        
        // Apply theme class to body
        document.body.className = savedTheme;
      }
    }, []);
  
    // Listen for theme changes from Header component
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const handleThemeChange = () => {
          const newTheme = localStorage.getItem('theme') || 'light';
          setTheme(newTheme);
          document.body.className = newTheme;
        };
        
        window.addEventListener('theme-changed', handleThemeChange);
        window.addEventListener('storage', handleThemeChange);
        
        return () => {
          window.removeEventListener('theme-changed', handleThemeChange);
          window.removeEventListener('storage', handleThemeChange);
        };
      }
    }, []);
    
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const scaleUp = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className={`education-program ${theme}`}>
            {/* Section 1: Diagonal Hero */}
            <motion.section
                className="diagonal-hero"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="diagonal-bg"></div>
                <div className="hero-content">
                    <motion.h1 variants={slideUp}>Education Empowerment</motion.h1>
                    <motion.p variants={slideUp} transition={{ delay: 0.2 }}>
                        Breaking barriers through innovative learning solutions
                    </motion.p>
                    <motion.div variants={slideUp} transition={{ delay: 0.4 }}>
                        <button className="hero-cta" onClick={() => handleGetStarted("/services")}>Learn About Our Impact</button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Section 2: Icon Cards */}
            <motion.section
                className="icon-cards-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <div className="container">
                    <motion.h2 variants={slideUp}>Our Core Programs</motion.h2>
                    <div className="cards-grid">
                        <motion.div className="icon-card" variants={scaleUp}>
                            <div className="icon-wrapper">
                                <FaBookOpen />
                            </div>
                            <h3>Literacy Initiative</h3>
                            <p>Adult and child literacy programs with proven results</p>
                        </motion.div>
                        <motion.div className="icon-card" variants={scaleUp}>
                            <div className="icon-wrapper">
                                <FaUserGraduate />
                            </div>
                            <h3>Scholarships</h3>
                            <p>Supporting promising students through higher education</p>
                        </motion.div>
                        <motion.div className="icon-card" variants={scaleUp}>
                            <div className="icon-wrapper">
                                <FaChalkboard />
                            </div>
                            <h3>Teacher Training</h3>
                            <p>Professional development for educators in underserved areas</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Section 3: Zigzag Feature */}
            <section className="zigzag-feature">
                <div className="container">
                    <motion.div
                        className="feature-row"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <div className="feature-text">
                            <h2>Digital Learning Labs</h2>
                            <p>We've established 25 tech-enabled learning centers across rural communities, providing access to computers, internet, and digital literacy training.</p>
                            <ul>
                                <li>Interactive learning software</li>
                                <li>Remote classroom capabilities</li>
                                <li>After-hours access for adults</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <img
                                src="/Images/digital-labs.jpg"
                                alt="Digital Learning Lab"
                                className="feature-img rectangular-img"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="feature-row reversed"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <div className="feature-text">
                            <h2>Vocational Pathways</h2>
                            <p>Our career-focused programs equip students with marketable skills for immediate employment opportunities.</p>
                            <ul>
                                <li>Certified technical training</li>
                                <li>Apprenticeship placements</li>
                                <li>Entrepreneurship workshops</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <img
                                src="/Images/vocational.jpg"
                                alt="Vocational Training"
                                className="feature-img rectangular-img"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Stats Parallax */}
            <motion.section
                className="stats-parallax"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="parallax-overlay"></div>
                <div className="container">
                    <div className="stats-grid">
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3>1,850+</h3>
                            <p>Students Enrolled</p>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3>92%</h3>
                            <p>Graduation Rate</p>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3>36</h3>
                            <p>Communities Served</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Section 5: Testimonial Cards */}
            <section className="testimonial-section">
                <div className="container">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        Success Stories
                    </motion.h2>
                    <div className="testimonial-cards">
                        <motion.div
                            className="testimonial-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { x: -50, opacity: 0 },
                                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
                            }}
                        >
                            <div className="testimonial-content">
                                <p>"This program gave me the skills to start my own business and support my family."</p>
                                <div className="author">- Jamal, Age 24</div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="testimonial-card main-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleUp}
                        >
                            <div className="testimonial-content">
                                <p>"After learning to read at 42, I can now help my grandchildren with their homework. This changed our whole family."</p>
                                <div className="author">- Maria, Adult Literacy Graduate</div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="testimonial-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { x: 50, opacity: 0 },
                                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
                            }}
                        >
                            <div className="testimonial-content">
                                <p>"The vocational training led directly to my first full-time job with benefits."</p>
                                <div className="author">- Aisha, Age 19</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 6: Animated CTA */}
            <motion.section
                className="animated-cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <div className="cta-bg"></div>
                <div className="container">
                    <motion.h2 variants={slideUp}>Ready to Make an Impact?</motion.h2>
                    <motion.p variants={slideUp}>Join us in transforming lives through education</motion.p>
                    <div className="cta-buttons">
                        <motion.button
                            className="cta-btn primary"
                            variants={scaleUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleGetStarted("/contact")}
                        >
                            Donate Now
                        </motion.button>
                        <motion.button
                            className="cta-btn secondary"
                            variants={scaleUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleGetStarted("/contact")}
                        >
                            Volunteer
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default EducationProgram;