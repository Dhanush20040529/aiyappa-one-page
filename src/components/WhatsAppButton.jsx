import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../config';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI would like to enquire about your collections and pricing.\n\nThank you!"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <button
      className="floating-whatsapp"
      onClick={openWhatsApp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Shop on WhatsApp"
      title="Shop on WhatsApp"
    >
      {/* Pulse ring effect */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(37, 211, 102, 0.5)',
          animation: 'pulse-ring 2s ease-out infinite',
          pointerEvents: 'none'
        }}
      />

      <FaWhatsapp size={26} fill="currentColor" />

      {/* Tooltip */}
      <span
        className="floating-whatsapp-tooltip"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        Shop on WhatsApp
      </span>
    </button>
  );
}
