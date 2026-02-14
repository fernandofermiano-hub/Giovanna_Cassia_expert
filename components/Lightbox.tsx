
import React from 'react';

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white text-3xl font-light hover:text-gold transition-colors"
        onClick={onClose}
      >
        &times;
      </button>
      <img 
        src={imageUrl} 
        alt="Resultado Ampliado" 
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
