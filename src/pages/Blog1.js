import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './Blog1.css';

const Blog1 = () => {
    // const navigate = useNavigate();
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
            {/* Section 1: Program Overview */}
            <section className="outreach-section">
                <Container>
                    <h1 className="section-title">Community Outreach Program</h1>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img 
                                src="/Images/out-reach.jpg" 
                                alt="Community Outreach" 
                                className="img-fluid rounded"
                            />
                        </Col>
                        <Col md={6}>
                            <div className="program-description">
                                <h2>Bringing Smiles to Our Elders</h2>
                                <p>
                                    Our Community Outreach Program has been transforming lives since 2015, 
                                    connecting volunteers with elderly community members who need companionship 
                                    and support. Each month, our team organizes:
                                </p>
                                <ul>
                                    <li>Weekly visitations to senior homes</li>
                                    <li>Monthly community gatherings</li>
                                    <li>Holiday celebration events</li>
                                    <li>Essential supplies delivery</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section 2: Success Stories */}
            <section className="success-stories">
                <Container>
                    <h2 className="text-center mb-5">Impact Stories</h2>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Img variant="top" src="/Images/birthday.jpg" />
                                <Card.Body>
                                    <Card.Title>Mr. Sharma's 80th Birthday</Card.Title>
                                    <Card.Text>
                                        Volunteers organized a surprise celebration for Mr. Sharma who 
                                        hadn't celebrated his birthday in 10 years.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Img variant="top" src="/Images/garden.jpg" />
                                <Card.Body>
                                    <Card.Title>The Garden Project</Card.Title>
                                    <Card.Text>
                                        How we transformed the backyard of a senior living facility into 
                                        a thriving community garden.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Img variant="top" src="/Images/ingreational.jpg" />
                                <Card.Body>
                                    <Card.Title>Intergenerational Connections</Card.Title>
                                    <Card.Text>
                                        Our program pairing local students with seniors has created 
                                        meaningful friendships across generations.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Blog1;