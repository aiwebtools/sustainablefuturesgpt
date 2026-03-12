
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route hash change
  useEffect(() => {
    const handleHashChange = () => setIsMobileMenuOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-dark/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a 
            href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Logo />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Home
            </a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#disclaimer" className="nav-link">Disclaimer</a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer" 
              className="nav-link"
            >
              More AI Tools
            </a>
            <a 
              href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyber-green transition-colors touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-cyber-dark/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-1">
          <a 
            href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link py-3 px-4 touch-manipulation active:bg-white/5 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#faq" 
            className="nav-link py-3 px-4 touch-manipulation active:bg-white/5 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="nav-link py-3 px-4 touch-manipulation active:bg-white/5 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer" 
            className="nav-link py-3 px-4 touch-manipulation active:bg-white/5 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More AI Tools
          </a>
          <a 
            href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 mx-4 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
