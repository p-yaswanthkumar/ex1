import React from 'react';
import './WomenEmpowerment.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const WomenEmpowerment = () => {
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

    return (
        <div className={`women-empowerment ${theme}`}>
            {/* Section 1: Hero Banner */}
            <section className="empowerment-hero">
                <div className="hero-content-women">
                    <h1>Empowering Women, Transforming Communities</h1>
                    <p>Join us in creating equal opportunities for women worldwide through education, economic support, and leadership development</p>
                    <button className="hero-cta" onClick={() => handleGetStarted("/contact")}>Donate Now</button>
                </div>
            </section>
            
            {/* Second section */}
            <div className="promo-container-women">
                <div className="image-side-women">
                    <img src="/Images/women-back.jpg" alt="Healing Hands" />
                </div>
                <div className="content-side-women">
                    <div className="emotional-appeal-women">
                        <h2>Empowered Women Empower the World</h2>
                        <p style={{ textAlign: "justify" }}>When women are given opportunities to learn, lead, and thrive, they become catalysts for transformative change. An educated woman invests in her family's health. A financially independent woman boosts her community's economy. A woman in leadership paves the way for others to follow. By breaking barriers and challenging stereotypes, empowered women don't just change their own lives—they create a ripple effect that lifts entire generations. Together, we can build a world where every woman has the tools, confidence, and support to rise, inspire, and lead. Because when she succeeds, society succeeds.
                            When women rise, entire communities transform.Empowered women significantly contribute to economic development. Studies indicate that advancing gender equality could add up to $12 trillion to global GDP by 2025 . In India, initiatives like the Digital Entrepreneurship Conference in Madurai highlight the growing role of women in technology and entrepreneurship. The conference emphasized inclusive growth and the importance.</p>
                        <button className="donate-button" onClick={() => handleGetStarted("/contact")}>Donate Now</button>
                    </div>
                </div>
            </div>

            {/* Section 2: Stats Showcase */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-card">
                        <h3>25,000+</h3>
                        <p>Women educated annually</p>
                    </div>
                    <div className="stat-card">
                        <h3>15,000+</h3>
                        <p>Small businesses launched</p>
                    </div>
                    <div className="stat-card">
                        <h3>80%</h3>
                        <p>Increase in family incomes</p>
                    </div>
                    <div className="stat-card">
                        <h3>200+</h3>
                        <p>Communities transformed</p>
                    </div>
                </div>
            </section>

            {/* Section 3: Programs Grid */}
            <section className="programs-section">
                <h2 className="section-title">Our Empowerment Programs</h2>
                <div className="programs-grid">
                    <div className="program-card">
                        <div className="program-icon">🎓</div>
                        <h3>Education Initiative</h3>
                        <p>Scholarships and vocational training for women and girls</p>
                    </div>
                    <div className="program-card">
                        <div className="program-icon">💼</div>
                        <h3>Economic Empowerment</h3>
                        <p>Micro-loans and business training programs</p>
                    </div>
                    <div className="program-card">
                        <div className="program-icon">🏥</div>
                        <h3>Health & Wellness</h3>
                        <p>Reproductive health education and services</p>
                    </div>
                    <div className="program-card">
                        <div className="program-icon">🗳️</div>
                        <h3>Leadership Development</h3>
                        <p>Training for women in community leadership</p>
                    </div>
                </div>
            </section>

            <section className="women-story">
                <div className="story-wrapper">
                    <h2 className="story-section-title">From Struggle to Strength</h2>
                    <h3 className="story-main-heading" style={{ textAlign: 'center' }}>Meet Amina – A Ripple Effect of Change</h3>

                    <div className="story-content-grid">
                        <div className="story-text-block">
                            <p style={{ textAlign: "justify" }}>
                                Amina, a seamstress in rural Kenya, once struggled to feed her children.
                                With a small loan from our <span className="teal-accent">Women's Entrepreneurship Program</span>,
                                she bought a second sewing machine and trained three other women in her village.
                                Today, their collective business employs <strong>12 women</strong>, funds a local
                                girls' scholarship, and has become a hub for empowerment.
                            </p>
                            <blockquote className="story-quote" style={{ textAlign: 'center' }}>
                                "I didn't just learn to sew—I learned I could lead. Now, my daughters see what's possible."
                            </blockquote>
                        </div>

                        <div className="impact-metrics">
                            <div className="metric-card">
                                <div className="metric-icon">♾️</div>
                                <h4>Multiplier Effect</h4>
                                <p style={{ color: "white" }}>Every woman Amina empowered now mentors others</p>
                            </div>
                            <div className="metric-card">
                                <div className="metric-icon">🔓</div>
                                <h4>Breaking Cycles</h4>
                                <p style={{ color: "white" }}>Profits fund education for girls in her community</p>
                            </div>
                            <div className="metric-card">
                                <div className="metric-icon">🌱</div>
                                <h4>Sustainable Change</h4>
                                <p style={{ color: "white" }}>Skills + opportunity = lasting impact</p>
                            </div>
                            <div className="metric-card">
                                <div className="metric-icon">🏘️</div>
                                <h4>Community Impact</h4>
                                <p style={{ color: "white" }}>Created a safe space for women to gather and learn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Partners */}
            <section className="partners-section">
                <h2 className="section-title">Trusted By</h2>
                <div className="partners-grid">
                    <div className="partner-logo">Global Women's Fund</div>
                    <div className="partner-logo">Empower Her Initiative</div>
                    <div className="partner-logo">UN Women</div>
                    <div className="partner-logo">Women's World Banking</div>
                </div>
            </section>
            
            {/* Section 5: Call to Action */}
            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-text">
                        <h2>Your Support Changes Lives</h2>
                        <p>Every donation helps break the cycle of poverty through women's empowerment</p>
                    </div>
                    <div className="cta-buttons">
                        <button className="cta-primary" onClick={() => handleGetStarted("/contact")}>Make a Donation</button>
                        <button className="cta-secondary" onClick={() => handleGetStarted("/contact")}>Become a Volunteer</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WomenEmpowerment;