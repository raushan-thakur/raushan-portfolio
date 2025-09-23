import React, { useEffect, useState } from 'react'
import {FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Raushan Thakur" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Raushan Thakur">Raushan Thakur</h1>
          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">raushandtu@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+91 9511874042</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Gurugram, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/raushan-thakur/" className="social-link" target='_blank'>
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/raushan-thakur" className="social-link" target='_blank'>
              
              <FaGithub />
            </a>
          </li>
          <li className="social-item">
            <a href="https://drive.google.com/file/d/1WvePUI8lGAh11QUD6sP-g9HKNDpKupSP/view" className="social-link" target='_blank'>
              <FaFilePdf />
            </a>
          </li>
          
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar