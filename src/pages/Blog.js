import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cardsData = [
    {
        image: '/Images/out-reach.jpg',
        title: 'Community Outreach Program',
        description: 'Explore how our volunteers brought smiles to hundreds of elders through outreach activities.',
        buttonText: 'Read More',
        path: '/blog1'
    },
    {
        image: '/Images/health-blog.jpg',
        title: 'Healthcare Support Initiatives',
        description: 'Discover the healthcare programs we run to ensure elderly access to quality medical care.',
        buttonText: 'Learn More',
        path: '/blog2'
    },
    {
        image: '/Images/stories-hope.jpg',
        title: 'Stories of Hope & Resilience',
        description: 'Read inspiring stories about the elders we serve and how your support changes lives.',
        buttonText: 'Discover More',
        path: '/blog3'
    },
];

const impactStories = [
    {
        title: "Asha's Journey",
        subtitle: 'How education transformed her life—and many more.',
        image: 'https://via.placeholder.com/1200x400?text=Story+1',
        path: '/stories/asha-journey'
    },
    {
        title: 'Radhas Resilience',
        subtitle: 'With your help, Radha overcame health challenges and found strength.',
        image: 'https://via.placeholder.com/1200x400?text=Story+2',
        path: '/stories/radha-resilience'
    },
    {
        title: 'Senior Smiles',
        subtitle: 'Our community care program brought laughter and connection to homes.',
        image: 'https://via.placeholder.com/1200x400?text=Story+3',
        path: '/stories/senior-smiles'
    },
];

const waysToGiveBack = [
    {
        title: "Volunteer Your Time",
        description: "Offer your skills, whether it's tutoring, organizing events, or helping at a local shelter. Time is one of the most valuable gifts you can give.",
        path: '/volunteer'
    },
    {
        title: "Spread Awareness",
        description: "Use your voice (or social media) to share stories, campaigns, or petitions that align with your values. A simple repost can inspire others to act.",
        path: '/awareness'
    },
    {
        title: "Donate Unused Items",
        description: "Clean out your closet, bookshelf, or pantry and donate gently used items to shelters, libraries, or food banks.",
        path: '/donate-items'
    },
    {
        title: "Offer a Skill or Talent",
        description: "Are you good at graphic design, writing, or mentoring? Nonprofits often need pro bono help—your expertise could make a huge impact!",
        path: '/skills'
    },
    {
        title: "Practice Kindness Daily",
        description: "Small acts—like thanking frontline workers, writing encouraging notes, or helping a neighbor—create ripple effects of positivity.",
        path: '/kindness'
    },
    {
        title: "Become a Community Champion",
        description: "Organize local initiatives like neighborhood cleanups, charity drives, or awareness campaigns. Even small grassroots efforts can spark.",
        path: '/champion'
    }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
};

const resources = [
    {
        icon: '🆘',
        title: 'Emergency Relief',
        description: 'Find immediate aid and support programs in your area.',
        linkText: 'Access Now',
        path: '/emergency'
    },
    {
        icon: '🤲',
        title: 'Volunteer Near You',
        description: 'Discover local volunteer opportunities by interest and location.',
        linkText: 'Search Volunteering',
        path: '/volunteer'
    },
    {
        icon: '💡',
        title: 'Educational Materials',
        description: 'Get informative guides and resources for communities and caregivers.',
        linkText: 'Explore Library',
        path: '/education'
    },
    {
        icon: '📅',
        title: 'Upcoming Events',
        description: 'Join our events, workshops, and support groups near you.',
        linkText: 'View Calendar',
        path: '/events'
    },
];

const Blog = () => {
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

    return (
        <div className={`blog-page ${theme}`}>
            {/* 1. Hero Banner */}
            <section className="hero-blog">
                <video className="hero-video-blog" src="/Images/home2.mp4" autoPlay loop muted playsInline />
                <div className="hero-overlay-blog">
                    <h1>Where Compassion Finds Its Voice.</h1>
                    <p>Every act of kindness, no matter how small, creates ripples of hope.</p>
                    <div className="hero-buttons-blog">
                        <button className="btn-blog" onClick={() => navigate('/contact')}>Get Started</button>
                    </div>
                </div>
            </section>

            {/* 2. Blog Cards */}
            <section className="blog-cards-section">
                {cardsData.map((card, idx) => (
                    <article key={idx} className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                            <button 
                                className="card-button"
                                onClick={() => navigate(card.path)}
                            >
                                {card.buttonText}
                            </button>
                        </div>
                    </article>
                ))}
            </section>

            {/* 3. Impact Carousel */}
            <section className="impact-carousel">
                <Slider {...settings}>
                    {impactStories.map((story, idx) => (
                        <div 
                            key={idx} 
                            className="slide"
                            onClick={() => navigate(story.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div
                                className="parallax-bg"
                                style={{ backgroundImage: `url(${story.image})` }}
                            />
                            <div className="story-content">
                                <h2>{story.title}</h2>
                                <p>{story.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* 4. Ways to Give Back Section */}
            <section className="charity-blog-section">
                <Container>
                    <h2 className="text-center mb-4">5 Simple Ways to Give Back Without Spending a Dollar</h2>
                    <p className="text-center mb-5 intro-text">
                        Many people believe that making a difference requires deep pockets, but kindness doesn't have to come with a price tag.
                        Here are five meaningful ways you can contribute to your community and support causes you care about—without spending a cent.
                    </p>

                    <Row className="g-4">
                        {waysToGiveBack.map((way, index) => (
                            <Col key={index} md={6} lg={4} className="mb-3">
                                <Card 
                                    className="h-100 shadow-sm charity-card"
                                    onClick={() => navigate(way.path)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card.Body>
                                        <Card.Title className="text-primary">{way.title}</Card.Title>
                                        <Card.Text>{way.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* 5. Help Hub Section */}
            <section className="help-hub-section">
                <h2 className="help-hub-title">How You Can Help</h2>
                <div className="help-hub-container">
                    {resources.map((res, idx) => (
                        <div 
                            key={idx} 
                            className="help-hub-item"
                            onClick={() => navigate(res.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="help-hub-icon">{res.icon}</div>
                            <div className="help-hub-info">
                                <h3 className="help-hub-item-title">{res.title}</h3>
                                <p className="help-hub-item-desc">{res.description}</p>
                                <div className="help-hub-link">{res.linkText}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Newsletter CTA */}
            <section className="newsletter-cta">
                <h2>Stay Updated</h2>
                <p>Subscribe to receive our latest blog posts and news.</p>
                <form>
                    <input type="email" placeholder="Your email address" />
                    <button type="button" onClick={() => navigate('/contact')}>
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Blog;