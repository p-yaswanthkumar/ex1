import React, { useState, useEffect } from 'react';
import './Blog3.css';

const Blog3 = () => {
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
    <div className={`stories-container ${theme}`}>
      <div className="content-wrapper">
        <h1>Stories of Hope & Resilience</h1>
        
        {/* Section 1: Rising from the Ashes */}
        <section className="section">
          <h2>Rising from the Ashes – Overcoming Adversity</h2>
          <p className="section-description">
            These stories highlight individuals who faced immense challenges—loss, illness, failure, or tragedy—but refused to be defined by them. Through courage, perseverance, and the support of others, they found a way forward.
          </p>
          <div className="story-card">
            <h3>A Cancer Survivor's Journey</h3>
            <p>After battling stage 4 cancer, Maria founded a nonprofit to support patients with rare diseases.</p>
          </div>
          <div className="story-card">
            <h3>From Refugee to Community Leader</h3>
            <p>Ahmed fled war-torn Syria and now runs a mentorship program for young immigrants.</p>
          </div>
        </section>

        {/* Section 2: Small Acts, Big Impact */}
        <section className="section">
          <h2>Small Acts, Big Impact – Everyday Heroes</h2>
          <p className="section-description">
            Resilience isn't always about grand triumphs; sometimes, it's found in quiet strength and kindness. This section celebrates ordinary people whose hope and determination made a difference.
          </p>
          <div className="story-card">
            <h3>The Teacher Who Changed Lives</h3>
            <p>Mr. Thompson turned an underfunded school into a hub of creativity and success.</p>
          </div>
          <div className="story-card">
            <h3>A Mother's Sacrifice</h3>
            <p>Working three jobs, Lila ensured her daughter became the first in their family to graduate college.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog3;