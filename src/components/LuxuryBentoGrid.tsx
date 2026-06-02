import React from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
}

interface LuxuryBentoGridProps {
  onPropertyClick: (property: Property) => void;
}

const properties: Property[] = [
  {
    id: 1,
    title: "The Pavilion House",
    location: "Alibaug, MH",
    price: "₹14.5 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Brutalist Monolith",
    location: "Khandala, MH",
    price: "₹22.0 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Glass Ribbon",
    location: "Marine Drive, Mumbai",
    price: "₹45.0 Cr",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function LuxuryBentoGrid({ onPropertyClick }: LuxuryBentoGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 gap-8 auto-rows-[380px] md:auto-rows-[450px] md:grid-cols-3">
        {properties.map((property, index) => (
          <div
            key={property.id}
            onClick={() => onPropertyClick(property)}
            className={`group relative overflow-hidden bg-[#1a1a1a] cursor-pointer transition-all duration-500 ${
              index === 0 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            {/* Image Layer */}
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <p className="text-xs tracking-widest text-[#D97706] uppercase font-medium mb-2">
                {property.location}
              </p>
              <h3 className="text-2xl font-light text-white tracking-tight mb-1">
                {property.title}
              </h3>
              <p className="text-sm font-light text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                View Portfolio · {property.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
