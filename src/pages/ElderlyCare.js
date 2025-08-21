import './ElderlyCare.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ElderlyCare = () => {
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
        navigate(path);
    }
    const stories = [
        {
            id: 1,
            image: '/Images/ellder1.jpg',
            quote: '"The meal delivery service saved me after my hip surgery. But more than the food, it was knowing someone cared that made the difference."',
            author: 'Margaret, 82',
            badge: '3 years supported'
        },
        {
            id: 2,
            image: '/Images/elder22.jpg',
            quote: '"I was so lonely after my wife passed, but my weekly visits from volunteers gave me something to look forward to again."',
            author: 'Robert, 78',
            badge: '2 years supported'
        },
        {
            id: 3,
            image: '/Images/elder3.jpg',
            quote: '"Thanks to the transportation service, I can get to all my medical appointments without burdening my family."',
            author: 'Ethel, 85',
            badge: '1 year supported'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, stories.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };
      
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
        <div className={`elderly-care ${theme}`}>
            {/* Hero Section */}
            <section className="elder-hero">
                <div className="hero-content">
                    <h1>Building a Circle of Care Around Our Elders</h1>
                    <p>No senior should face aging alone.</p>
                    <button className="hero-cta" onClick={() => handleGetStarted("/contact")}>Donate Now</button>
                </div>
            </section>

            {/* Promo Section */}
            <div className="promo-container-elder">
                <div className="image-side-elder">
                    <img src="/Images/elderly-care.jpg" alt="Healing Hands" />
                </div>
                <div className="content-side-elder">
                    <div className="emotional-appeal-elder">
                        <h2>Building a Circle of Care Around Our Elders</h2>
                        <p style={{ textAlign: "justify" }}>
                            No senior should face aging alone. Through volunteer networks, meal delivery programs, and home safety initiatives, we create a community-powered safety net that ensures every elder receives the practical support and heartfelt companionship they deserve.
                            Building a Circle of Care around our elders is essential to ensure they age with dignity, comfort, and connection. This model emphasizes the importance of community, collaboration, and comprehensive support in enhancing the quality of life for senior citizens. Initiatives like HelpAge India's Elder Self-Help Groups empower seniors by promoting financial inclusion, health awareness, and social engagement, fostering a sense of community and self-reliance. Similarly, Kerala's Vayomithram project offers mobile clinics, palliative care, and help desks, providing accessible healthcare services to elderly individuals.
                        </p>
                        <button className="donate-button" onClick={() => handleGetStarted("/contact")}>Donate Now</button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="services-showcase">
                <h2 className="section-title">Our Comprehensive Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="card-icon">🛒</div>
                        <h3>Grocery Assistance</h3>
                        <p>Weekly shopping help and delivery</p>
                    </div>
                    <div className="service-card">
                        <div className="card-icon">💊</div>
                        <h3>Medication Management</h3>
                        <p>Organization and reminders</p>
                    </div>
                    <div className="service-card">
                        <div className="card-icon">🎨</div>
                        <h3>Social Activities</h3>
                        <p>Arts, games and outings</p>
                    </div>
                    <div className="service-card">
                        <div className="card-icon">🚗</div>
                        <h3>Transportation</h3>
                        <p>Medical appointment rides</p>
                    </div>
                </div>
            </section>
            
            <section className="donation-tiers">
                <div className="tiers-container">
                    <h2 className="section-title">How You Can Help</h2>
                    <div className="tiers-grid">
                        <div className="tier-card">
                            <h3>Basic Needs</h3>
                            <p className="tier-amount">$50/month</p>
                            <ul className="tier-benefits">
                                <li>Weekly grocery delivery</li>
                                <li>Medication reminders</li>
                            </ul>
                            <button className="tier-button">Select</button>
                        </div>
                        <div className="tier-card featured">
                            <div className="featured-badge">Most Popular</div>
                            <h3>Comprehensive Care</h3>
                            <p className="tier-amount">$120/month</p>
                            <ul className="tier-benefits">
                                <li>All Basic Needs benefits</li>
                                <li>Monthly doctor visits</li>
                                <li>Home safety assessment</li>
                            </ul>
                            <button className="tier-button featured-btn" onClick={() => handleGetStarted("/contact")}>Select</button>
                        </div>
                        <div className="tier-card">
                            <h3>Full Support</h3>
                            <p className="tier-amount">$250/month</p>
                            <ul className="tier-benefits">
                                <li>All Comprehensive benefits</li>
                                <li>24/7 emergency support</li>
                                <li>Social activities</li>
                            </ul>
                            <button className="tier-button" onClick={() => handleGetStarted("/contact")}>Select</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Carousel */}
            <section className="success-stories">
                <div className="stories-container">
                    <h2 className="section-title">Lives We've Touched</h2>
                    <div className="story-carousel">
                        {stories.map((story, index) => (
                            <div
                                className={`story-slide ${index === currentSlide ? 'active' : ''}`}
                                key={story.id}
                            >
                                <div
                                    className="story-image"
                                    style={{ backgroundImage: `url(${story.image})` }}
                                ></div>
                                <div className="story-content">
                                    <blockquote>{story.quote}</blockquote>
                                    <p className="story-author">- {story.author}</p>
                                    <div className="story-badge">{story.badge}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-dots">
                        {stories.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Make a Difference in an Elder's Life</h2>
                    <p>Your support can provide comfort, care, and companionship to those who need it most.</p>
                    <div className="cta-buttons">
                        <button className="cta-btn donate" onClick={() => handleGetStarted("/contact")}>Donate Now</button>
                        <button className="cta-btn volunteer" onClick={() => handleGetStarted("/contact")}>Volunteer Today</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElderlyCare;