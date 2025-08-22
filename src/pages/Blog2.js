import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './Blog2.css';

const Blog2 = () => {
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
        <div className={`healthcare-page ${theme}`}>
            {/* Section 1: Healthcare Program Overview */}
            <section className="healthcare-hero">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <img 
                                src="/Images/health-blog.jpg" 
                                alt="Healthcare Support" 
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="healthcare-intro">
                                <h1>Healthcare Support Initiatives</h1>
                                <p className="lead">
                                    Our comprehensive healthcare programs ensure elderly community members receive 
                                    quality medical care, preventive services, and health education.
                                </p>
                                <ListGroup variant="flush" className="mb-4">
                                    <ListGroup.Item>
                                        <i className="fas fa-heartbeat me-2"></i>
                                        Monthly mobile health clinics
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fas fa-pills me-2"></i>
                                        Free medication distribution
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fas fa-user-md me-2"></i>
                                        Specialist doctor consultations
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fas fa-heart me-2"></i>
                                        Cardiac health screenings
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section 2: Healthcare Services & Testimonials */}
            <section className="healthcare-services">
                <Container>
                    <h2 className="text-center mb-5">Our Healthcare Services</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="service-icon mb-3">
                                        <i className="fas fa-clinic-medical"></i>
                                    </div>
                                    <Card.Title>Primary Care Services</Card.Title>
                                    <Card.Text>
                                        Regular health check-ups, chronic disease management, and basic 
                                        treatments provided by our team of dedicated healthcare professionals.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="service-icon mb-3">
                                        <i className="fas fa-ambulance"></i>
                                    </div>
                                    <Card.Title>Emergency Support</Card.Title>
                                    <Card.Text>
                                        24/7 emergency response team and transportation services for 
                                        critical medical situations and hospital transfers.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="service-icon mb-3">
                                        <i className="fas fa-brain"></i>
                                    </div>
                                    <Card.Title>Mental Health Programs</Card.Title>
                                    <Card.Text>
                                        Counseling services, dementia care support, and mental wellness 
                                        workshops to promote emotional well-being.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="service-icon mb-3">
                                        <i className="fas fa-utensils"></i>
                                    </div>
                                    <Card.Title>Nutrition Support</Card.Title>
                                    <Card.Text>
                                        Dietary planning, supplemental nutrition programs, and cooking 
                                        demonstrations for seniors with special dietary needs.
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

export default Blog2;