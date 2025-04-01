
import { Link } from 'react-router-dom';
import { Honeycomb, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beeBlack text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Honeycomb className="text-honeycomb h-8 w-8 mr-2" />
              <h3 className="text-xl font-bold text-white">Ziggy's Honeyworks</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Providing buzzing API solutions and the sweetest data integrations from sunny Tampa, Florida.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={18} className="mr-2 text-honeycomb" />
              <p>123 Beekeeper Blvd, Tampa, FL 33601</p>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone size={18} className="mr-2 text-honeycomb" />
              <p>+1 (800) BEE-APIS</p>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail size={18} className="mr-2 text-honeycomb" />
              <p>apis@ziggyhoneyworks.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-honeycomb transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-honeycomb transition duration-300">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/hives" className="text-gray-300 hover:text-honeycomb transition duration-300">
                  Our Hives
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-honeycomb transition duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
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
                className="bg-honeycomb text-white px-4 py-2 rounded-r sm:rounded-l-none hover:bg-honeycomb-dark transition duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Ziggy's Honeyworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
