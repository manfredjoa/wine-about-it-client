import React, { useState } from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Wine About It. All rights reserved.</p>
        <ul className="footer-links">
          <li className='About'><a href="/about">About</a></li>
          <li className='Contact'><a href="/contact">Contact</a></li>
          <li className='Newsletter'>
            Newsletter
            <form>
              <input
                type="email"
                placeholder='Your Email'
              />
              <button type="submit">Submit</button>
            </form>
          </li>
          <li className='SocialMedia'>
            <a href="https://www.facebook.com/wineaboutit"><i className="facebook"></i></a>
          </li>
          <li className='SocialMedia'>
            <a href="https://www.twitter.com/wineaboutit"><i className="twitter"></i></a>
          </li>
          <li className='SocialMedia'>
            <a href="https://www.instagram.com/wineaboutit"><i className="instagram"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
