
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Honeycomb, Home, Users, Workflow, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if we're on the current path
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home', icon: <Home size={18} /> },
    { path: '/partners', name: 'Become a Partner', icon: <Workflow size={18} /> },
    { path: '/hives', name: 'Our Hives', icon: <Honeycomb size={18} /> },
    { path: '/about', name: 'About Us', icon: <Info size={18} /> },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Honeycomb className="text-honeycomb h-8 w-8" />
            <span className="font-bold text-xl text-beeBlack hidden sm:inline">Ziggy's Honeyworks</span>
            <span className="font-bold text-xl text-beeBlack sm:hidden">Ziggy's</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200',
                  isActive(link.path)
                    ? 'text-honeycomb-dark font-medium bg-honey-50'
                    : 'text-beeBlack hover:text-honeycomb hover:bg-honey-50'
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-beeBlack hover:text-honeycomb focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-3 rounded-md transition-colors duration-200',
                    isActive(link.path)
                      ? 'text-honeycomb-dark font-medium bg-honey-50'
                      : 'text-beeBlack hover:text-honeycomb hover:bg-honey-50'
                  )}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
