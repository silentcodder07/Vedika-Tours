import React, { useState } from 'react';
import { X } from 'lucide-react';
import { mockData } from '../mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Glimpses of memorable journeys and happy moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockData.gallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
