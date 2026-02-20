
import React from 'react';
import { assetUrl } from '../utils/assetUrl';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div 
      className={`relative ${className} group cursor-pointer rounded-full overflow-hidden bg-warm-50`}
    >
      <img 
        src={assetUrl('assets/logo.png')} 
        alt="XT Logo" 
        className="w-full h-full object-contain"
        style={{ 
          mixBlendMode: 'darken',
        }}
      />
    </div>
  );
};

export default Logo;
