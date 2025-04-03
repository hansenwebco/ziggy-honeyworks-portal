
import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Hexagon className="text-honeycomb h-8 w-8 mr-2" />
              <h3 className="text-xl font-bold text-white">Ziggy's Honeyworks</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Providing buzzing API solutions and the sweetest data integrations from sunny Tampa, Florida.
            </p>
            <div className="footer-contact">
              <MapPin size={18} className="mr-2 text-honeycomb" />
              <p>123 Beekeeper Blvd, Tampa, FL 33601</p>
            </div>
            <div className="footer-contact">
              <Phone size={18} className="mr-2 text-honeycomb" />
              <p>+1 (800) BEE-APIS</p>
            </div>
            <div className="footer-contact">
              <Mail size={18} className="mr-2 text-honeycomb" />
              <p>apis@ziggyhoneyworks.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/partners">Become a Partner</Link>
              </li>
              <li>
                <Link to="/hives">Our Hives</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest API updates and honey harvests.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l focus:outline-none text-beeBlack mb-2 sm:mb-0 w-full"
              />
              <button
                type="submit"
                className="honeycomb-btn rounded-r-none sm:rounded-l-none w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-border text-center text-gray-400">
          <p>&copy; {currentYear} Ziggy's Honeyworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
