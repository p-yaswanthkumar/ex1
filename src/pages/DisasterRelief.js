import './DisasterRelief.css';

import { useState,useEffect } from 'react';
const campaignsData = [
    {
        id: 1,
        title: "Turkey Earthquake Relief",
        description: "Providing shelter and medical aid to survivors",
        progress: 65,
        raised: "1.2M",
        goal: "2M",
        urgent: true
    },
    {
        id: 2,
        title: "Bangladesh Flood Relief",
        description: "Emergency supplies for affected families",
        progress: 42,
        raised: "840K",
        goal: "2M",
        urgent: true
    },
    {
        id: 3,
        title: "Horn of Africa Drought",
        description: "Food and water for famine-stricken regions",
        progress: 38,
        raised: "760K",
        goal: "2M",
        urgent: false
    }
];

const servicesData = [
    { id: 1, icon: "🏥", title: "Medical Aid", description: "Emergency medical teams and supplies" },
    { id: 2, icon: "🏠", title: "Shelter", description: "Temporary housing for displaced families" },
    { id: 3, icon: "💧", title: "Clean Water", description: "Water purification and distribution" },
    { id: 4, icon: "🍲", title: "Food Relief", description: "Emergency food packages" }
];

function DisasterRelief() {
    const [, setTheme] = useState('light');
      
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
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Rapid Response to Global Disasters</h1>
                            <p className="hero-subtitle">
                                Delivering life-saving aid within 72 hours of emergencies worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*second section*/}
            <div className="promo-container-disaster">
                <div className="image-side-disaster">
                    <img src="/Images/disaster.jpg" alt="Healing Hands" />
                </div>
                <div className="content-side-disaster">
                    <div className=" emotional-appeal-disaster">
                        <h2>Rising Together – Hope, Help, and Healing in Every Crisis.</h2>
                        <p style={{ textAlign: "justify" }}>In times of disaster, we rise together—bringing hope to the despairing, help to the vulnerable, and healing to the broken. Every crisis demands courage, compassion, and collective action. Whether it’s delivering emergency supplies, rebuilding shattered communities, or offering a shoulder to lean on, we stand united in our mission to restore light where darkness falls. Because when we rise together, no challenge is too great, and no heart is left behind.
                            we believe that no one should face disaster alone. Our teams work tirelessly to provide immediate relief—food, clean water, medical aid, and safe shelter—to those hardest hit. But our mission doesn’t end there. We stay for the long haul, helping communities rebuild stronger, restore hope, and heal from trauma.
                        </p>
                        <button className="donate-button">Donate Now</button>
                    </div>
                </div>
            </div>


            {/* Campaigns Section */}
            <section className="campaigns-section">
                <div className="campaigns-container">
                    <h2 className="campaigns-title">Active Relief Campaigns</h2>
                    <p className="campaigns-subtitle">
                        Your support makes these relief efforts possible
                    </p>
                    <div className="campaigns-grid">
                        {campaignsData.map(c => (
                            <div key={c.id} className="campaign-card">
                                {c.urgent && (
                                    <div className="campaign-urgent">Urgent</div>
                                )}
                                <h3 className="campaign-title">{c.title}</h3>
                                <p className="campaign-description">{c.description}</p>
                                <div className="campaign-progress-container">
                                    <div className="campaign-progress-bar">
                                        <div
                                            className="campaign-progress-fill"
                                            style={{ width: `${c.progress}%` }}
                                        />
                                    </div>
                                    <div className="campaign-progress-stats">
                                        <span>${c.raised}</span>
                                        <span>${c.goal}</span>
                                    </div>
                                </div>
                                <button className="campaign-button">
                                    Support This Cause
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*second section*/}
            <section className="disaster-relief">
                <div className="relief-container">
                    <h2 className="relief-title">A New Approach to Disaster Relief: <span>Compassion in Action</span></h2>
                    <p className="relief-intro">
                        Disasters don't wait—and neither do we. Traditional relief models often focus on short-term aid,
                        but true recovery requires <strong>swift action paired with sustainable solutions</strong>.
                        That's why our approach is different:
                    </p>

                    <div className="approach-grid">
                        <div className="approach-card">
                            <div className="card-header">
                                <div className="card-number">1</div>
                                <h3>Rapid Response That Saves Lives</h3>
                            </div>
                            <p>When catastrophe strikes, every minute counts. Our emergency teams deploy within hours, delivering:</p>
                            <ul>
                                <li><strong>Life-saving supplies</strong> (food, clean water, medical kits)</li>
                                <li><strong>Emergency shelter</strong> for displaced families</li>
                                <li><strong>Search & rescue</strong> operations in crisis zones</li>
                            </ul>
                        </div>

                        <div className="approach-card">
                            <div className="card-header">
                                <div className="card-number">2</div>
                                <h3>Rebuilding for Resilience</h3>
                            </div>
                            <p>After the initial crisis, the real work begins. We partner with communities to:</p>
                            <ul>
                                <li><strong>Repair homes, schools, and hospitals</strong>—stronger than before</li>
                                <li><strong>Restore livelihoods</strong> through job training and small-business support</li>
                                <li><strong>Strengthen infrastructure</strong> to withstand future disasters</li>
                            </ul>
                        </div>

                        <div className="approach-card">
                            <div className="card-header">
                                <div className="card-number">3</div>
                                <h3>Healing Beyond the Physical</h3>
                            </div>
                            <p>Disasters leave invisible scars. Our long-term programs provide:</p>
                            <ul>
                                <li><strong>Mental health support</strong> for trauma survivors</li>
                                <li><strong>Community-led recovery plans</strong> to empower local voices</li>
                                <li><strong>Disaster preparedness training</strong> to reduce future risks</li>
                            </ul>
                        </div>


                    </div>


                </div>
            </section>
            {/* Services Section */}
            <section className="relief-services-container">
                <div className="section-header">
                    <h2 className="section-title">Our Relief Services</h2>
                    <p className="section-subtitle">Comprehensive aid for disaster-affected communities</p>
                </div>
                <div className="service-items-grid">
                    {servicesData.map(service => (
                        <div key={service.id} className="individual-service-item">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="impact-statement">
                <h3>Why It Works</h3>
                <p>
                    This isn't just relief—it's <strong>dignity, hope, and lasting change</strong>. By combining
                    <strong> speed, sustainability, and innovation</strong>, we don't just rebuild communities—we help them
                    <strong> rise stronger</strong>.
                </p>
                <button className="cta-button">Join Us in Redefining Disaster Response</button>
            </div>
        </>
    );
}

export default DisasterRelief;