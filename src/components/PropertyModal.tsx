interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-[#FDF8EE] w-full max-w-4xl rounded-t-3xl p-8 shadow-2xl transition-transform duration-500 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Notch Decorator */}
        <div className="w-12 h-1 bg-neutral-300 rounded-full mx-auto mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 md:h-96 rounded-2xl overflow-hidden bg-neutral-200">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col justify-between py-2">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#D97706] uppercase font-medium mb-1">{property.location}</p>
              <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a] mb-4">{property.title}</h2>
              <p className="text-2xl font-mono text-[#1a1a1a] mb-6">{property.price}</p>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                An exceptional curation featuring raw textures, dynamic spatial flows, and intentional alignment with the surrounding geographical landscape.
              </p>
            </div>
            
            <button 
              onClick={onClose}
              className="w-full mt-8 bg-[#1a1a1a] text-white text-sm tracking-wider uppercase font-medium py-4 hover:bg-[#D97706] transition-colors duration-300"
            >
              Close Presentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
