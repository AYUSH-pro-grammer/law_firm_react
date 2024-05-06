import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <div>
      <nav data-aos="zoom-in hello_nav">
        <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
          <li onClick={toggleSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li><Link to={`/`} className="hover_to" >Home</Link></li>
          <li><Link to={`/contact`} className="hover_to">Contact Us</Link></li>
          <li><Link to={`/about`} className="hover_to">About Us</Link></li>
          <li><Link to={`/questions`} className="hover_to">Questions</Link></li>
        </ul>
        <ul>
          <li><Link to={`/`}><img className="logo" src="https://i.ibb.co/syftFkN/logo.jpg" alt="" /></Link></li>
          <li className="hideOnMobile"><Link to={`/`} className="hover_to">Home</Link></li>
          <li className="hideOnMobile"><Link to={`/contact`} className="hover_to">Contact Us</Link></li>
          <li className="hideOnMobile"><Link to={`/about`} className="hover_to">About Us</Link></li>
          <li className="hideOnMobile"><Link to={`/questions`} className="hover_to">Questions</Link></li>
          <li className="hideOnMobile"><a href="tel:+919643827511" className="hover_to"><button>Free Consultation</button></a></li>
          <li className="menu_btn" onClick={toggleSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
