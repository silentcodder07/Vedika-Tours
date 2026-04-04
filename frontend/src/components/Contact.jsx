import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage (mock backend)
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Show success message
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      pickupLocation: '',
      dropLocation: '',
      date: '',
      message: ''
    });
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
                  <a href={`tel:${mockData.company.phone}`} className="text-orange-600 hover:underline">
                    {mockData.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${mockData.company.email}`} className="text-orange-600 hover:underline">
                    {mockData.company.email}
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

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="pickupLocation"
                    placeholder="Pickup Location *"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="dropLocation"
                    placeholder="Drop Location *"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>

                <div>
                  <Input
                    type="date"
                    name="date"
                    placeholder="Travel Date *"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Additional Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-orange-200 focus:border-orange-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
