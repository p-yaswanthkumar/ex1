import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HealthcareInitiative.css'

const programs = [
    {
        icon: '🚑',
        title: 'Emergency Medical Response',
        desc: '24/7 mobile units providing urgent care in crisis situations'
    },
    {
        icon: '🩺',
        title: 'Chronic Disease Management',
        desc: 'Ongoing care for diabetes, hypertension, and other conditions'
    },
    {
        icon: '💉',
        title: 'Vaccination Drives',
        desc: 'Community immunization programs for preventable diseases'
    },
    {
        icon: '🧠',
        title: 'Mental Health Support',
        desc: 'Counseling and psychiatric services for underserved populations'
    }
];

const HealthcareInitiatives = () => {
    const [, setTheme] = useState('light');
    const [activeVolunteer, setActiveVolunteer] = useState(null);
    const navigate = useNavigate();

    // Load theme preference from localStorage on component mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    // Listen for theme changes from Header component
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleThemeChange = () => {
                const newTheme = localStorage.getItem('theme') || 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            };
            
            window.addEventListener('theme-changed', handleThemeChange);
            window.addEventListener('storage', handleThemeChange);
            
            return () => {
                window.removeEventListener('theme-changed', handleThemeChange);
                window.removeEventListener('storage', handleThemeChange);
            };
        }
    }, []);

    useEffect(() => {
        // Animation for text elements - corrected class name
        const heroContent = document.querySelector('.hero-content-healthcare');
        if (heroContent) {
            heroContent.style.opacity = 1;
            heroContent.style.transform = 'translateY(0)';
        }
    }, []);

    const volunteers = [
        {
            id: 1,
            name: "Dr. Anika Patel",
            role: "Pediatric Surgeon",
            location: "Mumbai, India",
            image: "/Images/doc1.jpg",
            story: "Volunteering weekends to perform life-changing surgeries for children from underserved communities.",
            stats: "142 surgeries performed"
        },
        {
            id: 2,
            name: "James Okafor",
            role: "Community Health Worker",
            location: "Lagos, Nigeria",
            image: "Images/doc3.jpg",
            story: "Trained 30 local volunteers to provide basic healthcare in his neighborhood.",
            stats: "5,000+ home visits"
        },
        {
            id: 3,
            name: "Maria Gonzalez",
            role: "Retired Nurse",
            location: "Guatemala City",
            image: "/Images/doc2.jpg",
            story: "Teaching hygiene practices in rural schools to prevent infectious diseases.",
            stats: "18 schools reached"
        },
        {
            id: 4,
            name: "The Tech Volunteers",
            role: "Developer Team",
            location: "San Francisco, USA",
            image: "/Images/doc4.jpg",
            story: "Built a patient records system for mobile clinics in 3 countries.",
            stats: "12,000 digital records"
        }
    ];

 

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const scaleUp = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    const handleGetStarted = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section-healthcare">
                <div className="hero-image-healthcare"></div>
                <div className="hero-overlay-healthcare"></div>
                <div className="hero-content-healthcare">
                    <h1 className="hero-title-healthcare">Healthcare for All</h1>
                    <p className="hero-subtitle-healthcare">
                        Join our mission to bring quality medical care to underserved communities.
                        Every donation helps save lives and build healthier futures.
                    </p>
                </div>
            </section>
            
            {/* Second section */}
            <div className="promo-container-health">
                <div className="image-side-health">
                    <img src="/Images/healthcare-charity.jpg" alt="Healing Hands" />
                </div>
                <div className="content-side-health">
                    <div className="section emotional-appeal-healthcare">
                        <h2>Healing Hands for Those in Need Your Help Saves Lives!</h2>
                        <p style={{textAlign:"justify"}}>Every day, countless individuals suffer without access to basic medical care…
                            <em>But you can change that.</em> 
                            Every day, vulnerable individuals—children left untreated, 
                            elders enduring unbearable pain, families struggling in silence—are denied access to basic medical care. 
                            
                            But together, we can change that narrative. Your support ignites a chain of hope: delivering life-saving treatments, essential medicines, 
                            and heartfelt comfort to those who need it most. Your generosity doesn't just offer relief—it breathes life back into suffering souls. Donate today, and be the healing hand that transforms lives.</p>
                        <button className="donate-button-health" onClick={()=>handleGetStarted("/contact")}>Donate Now</button>
                    </div>
                </div>
            </div>

            {/* Programs Section */}
            <section className="programs-section-health">
                <div className="container-health">
                    <h2>Our Healthcare Programs</h2>
                    <p className="subtitle-health" style={{textAlign:"center"}}>Comprehensive solutions for diverse medical needs</p>

                    <div className="programs-grid-health">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="program-card-health"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="program-icon-health">{program.icon}</div>
                                <h3>{program.title}</h3>
                                <p>{program.desc}</p>
                                <button className="learn-more" onClick={()=>handleGetStarted("/contact")}>Learn More →</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Volunteer Spotlight Section */}
            <section className="volunteer-spotlight">
                <div className="section-header">
                    <h2>Heroes Behind the Scenes</h2>
                    <p>Meet the dedicated individuals powering our healthcare mission</p>
                </div>

                <div className="volunteer-row">
                    {volunteers.map((volunteer) => (
                        <div
                            key={volunteer.id}
                            className="volunteer-card"
                            onClick={() => setActiveVolunteer(volunteer)}
                        >
                            <div className="card-image" style={{ backgroundImage: `url(${volunteer.image})` }}></div>
                            <div className="card-content">
                                <h3>{volunteer.name}</h3>
                                <p className="role-location">{volunteer.role} • {volunteer.location}</p>
                                <div className="stats-badge">{volunteer.stats}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {activeVolunteer && (
                    <div className="volunteer-modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={() => setActiveVolunteer(null)}>
                                ×
                            </button>
                            <div className="modal-image" style={{ backgroundImage: `url(${activeVolunteer.image})` }}></div>
                            <div className="modal-text">
                                <h3>{activeVolunteer.name}</h3>
                                <p className="role">{activeVolunteer.role} • {activeVolunteer.location}</p>
                                <p className="story">{activeVolunteer.story}</p>
                                <div className="impact-stat">
                                    <span>{activeVolunteer.stats}</span>
                                </div>
                                <button className="volunteer-cta"  onClick={()=>handleGetStarted("/contact")}>
                                    Nominate a Healthcare Hero
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            
            {/* CTA Section */}
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
                            onClick={()=>handleGetStarted("/contact")}
                        >
                            Donate Now
                        </motion.button>
                        <motion.button
                            className="cta-btn secondary"
                            variants={scaleUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={()=>handleGetStarted("/contact")}
                        >
                            Volunteer
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default HealthcareInitiatives;