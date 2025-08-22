
import { motion } from 'framer-motion';
import './FoodDistribution.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FoodDistribution = () => {
    const StatsNew = [
        { number1: "10,000+", label: "Meals Served" },
        { number1: "25", label: "Community Partners" },
        { number1: "500+", label: "Volunteers" },
        { number1: "100%", label: "Donation Impact" }
    ];

    const programs = [
        { icon: "🍎", title: "School Nutrition", desc: "Daily meals for children in underserved schools" },
        { icon: "🛒", title: "Food Pantries", desc: "Weekly grocery distributions for families" },
        { icon: "🚚", title: "Mobile Deliveries", desc: "Food delivery to homebound seniors" },
        { icon: "🌱", title: "Urban Gardens", desc: "Fresh produce from community gardens" }
    ];

    
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
    }

    return (
        <div className="food-distribution" data-theme={theme}>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nourishing Communities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Fighting hunger one meal at a time with dignity and compassion
                    </motion.p>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleGetStarted("/contact")}
                    >
                        Donate Now
                    </motion.button>
                </div>
            </section>

            {/* Background Image */}
            <div className="promo-container-food">
                <div className="image-side-food">
                    <img src="/Images/food-distribution.jpg" alt="Healing Hands" />
                </div>
                <div className="content-side-food">
                    <div className="emotional-appeal-food">
                        <h2>Hunger stops here – lend your support</h2>
                        <p style={{ textAlign: "justify" }}>Food distribution organizations—whether community food banks, public systems, or donor-driven charities—play a vital role in bridging the gap between excess and need, turning potential waste into nourishment for vulnerable populations. By collecting surplus food from farms, retailers, restaurants, or wholesalers, these organizations ensure timely redistribution to those facing hunger or food insecurity
                            Beyond addressing immediate hunger, efficient distribution preserves nutritional value through timely transportation and storage, helping guard against malnutrition and feeding diverse dietary needs
                            A compelling example is Assam's "Zero Waste, Zero Hunger" initiative—where hygienic surplus from eateries is collected daily, inspected, repackaged, and distributed to over 100 homeless individuals, exemplifying how local efforts successfully reduce food waste and support social equity
                        </p>
                        <button className="donate-button" onClick={() => handleGetStarted("/contact")}>Donate Now</button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    {StatsNew.map((statt, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{statt.number1 || "N/A"}</h3>
                            <p>{statt.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Third section */}
            <section className="food-distribution-overview with-bg">
                <div className="overlay">
                    <div className="overview-content">
                        <h2>Our Food Distribution Mission</h2>
                        <p>
                            We rescue surplus food—from farms, supermarkets, and communal donors—and deliver it directly to the tables of families, seniors, refugees, and individuals facing food insecurity in our community.
                        </p>
                        <p>
                            Each week, our teams sort, package, and send fresh, nutritious meals to local shelters, community centers, and schools. With every delivery, we're not just combating hunger—we're preserving dignity, nourishing hope, and minimizing waste.
                        </p>
                        <ul className="overview-list">
                            <li><strong>Reduce Waste & Nourish Communities:</strong> Valuable surplus is transformed into wholesome meals.</li>
                            <li><strong>Efficient and Caring Network:</strong> Driven by volunteers, powered by collaboration.</li>
                            <li><strong>Building Stronger Communities:</strong> Feeding families today while planting seeds for tomorrow.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
                <div className="container">
                    <div className="header-wrapper">
                        <h2>Our Food Programs</h2>
                        <p className="full-width-description">Comprehensive solutions to combat hunger</p>
                    </div>

                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div key={index} className="program-card">
                                <div className="program-icon">{program.icon}</div>
                                <h3>{program.title}</h3>
                                <p>{program.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="food-drive-section">
                <div className="container">
                    <div className="content-col">
                        <h2>Host a Food Drive</h2>
                        <p>Organize a collection in your neighborhood, school, or workplace</p>
                        <ul>
                            <li>Get a starter kit with materials</li>
                            <li>We provide collection bins</li>
                            <li>Free pickup service</li>
                        </ul>
                        <button className="cta-btn" onClick={() => handleGetStarted("/contact")}>Get Started</button>
                    </div>
                    <div className="image-col">
                        <img src="/Images/food-drive.jpg" alt="Community food drive" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodDistribution;