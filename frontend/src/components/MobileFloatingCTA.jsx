import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const MobileFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${mockData.company.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsappNumber}`, '_blank');
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-orange-200 shadow-2xl transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            onClick={handleCall}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-full shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          <Button
            onClick={handleWhatsApp}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 rounded-full shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileFloatingCTA;
