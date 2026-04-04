import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${mockData.company.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsappNumber}`, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-orange-600">
              {mockData.company.name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Tours
            </button>
            <button onClick={() => scrollToSection('fleet')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Fleet
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              onClick={handleCall}
              variant="outline" 
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Tours
              </button>
              <button onClick={() => scrollToSection('fleet')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Fleet
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button onClick={handleCall} variant="outline" className="border-orange-600 text-orange-600 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
