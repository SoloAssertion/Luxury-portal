import { useState } from 'react';
import LuxuryBentoGrid from './components/LuxuryBentoGrid';
import PropertyModal from './components/PropertyModal';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
}

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProperty(null), 300);
  };

  return (
    <main className="bg-[#FDF8EE] min-h-screen antialiased selection:bg-[#D97706]/20">
      {/* Editorial Luxury Header Section */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <p className="text-xs tracking-[0.3em] text-[#D97706] uppercase font-medium mb-2">Curated Spaces</p>
        <h1 className="text-4xl font-light tracking-tight text-[#1a1a1a]">Architectural Portfolios</h1>
      </header>

      {/* Main Asymmetric Grid */}
      <LuxuryBentoGrid onPropertyClick={handleOpenModal} />

      {/* Interactive Overlay Window */}
      <PropertyModal 
        property={selectedProperty} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
}
