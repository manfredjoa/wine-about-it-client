import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <footer className="bg-gray-900 text-white flex-shrink-0 py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-sm">&copy; {new Date().getFullYear()} Wine About It. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Sign Up for Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="email"
              placeholder='Your Email'
              value={email}
              onChange={handleEmailChange}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-blue-300">
              Submit
            </button>
          </form>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/wineaboutit" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/wineaboutit" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wineaboutit" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
