import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { mockData } from '../mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">{mockData.company.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href={`tel:${mockData.company.phone}`} className="text-orange-600 hover:underline text-lg">
                    {mockData.company.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1701764558596-3fcf27e6e39e" 
                alt="Contact" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
