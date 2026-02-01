import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempore impedit nesciunt reprehenderit consectetur eveniet quaerat excepturi illum quae, repellendus dolorem ex voluptates earum totam maxime quod fuga! Fugiat illo ea minima officiis enim nulla nam iusto adipisci odio doloremque!</p>
                 <div className="social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch </h2>
                <ul>
                    <li>+91-3765-9876-32</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 &copy; tomato.com - All rights preserved.</p>
    </div>
  )
}

export default Footer