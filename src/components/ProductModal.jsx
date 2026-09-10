import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Check } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default'
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'One Size'
  );
  const [customerName, setCustomerName]   = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [message, setMessage]             = useState('');
  const modalRef = useRef(null);

  // ESC to close & focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');
    // Focus modal on open
    if (modalRef.current) modalRef.current.focus();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  const handleSendWhatsApp = () => {
    let msg = `Hello Aiyappa Textiles,\n\nI am interested in this product:\n\n*Product:* ${product.name}\n*Category:* ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}'s Collection\n\n*Size:* ${selectedSize}\n*Color:* ${selectedColor}`;

    if (customerName)  msg += `\n\n*Name:* ${customerName}`;
    if (customerPhone) msg += `\n*Phone:* ${customerPhone}`;
    if (message)       msg += `\n\n*Message:* ${message}`;

    msg += `\n\nPlease share the price, availability and further details.\n\nThank you.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Product details for ${product.name}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(30, 22, 16, 0.62)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease forwards'
      }}
    >
      {/* Modal Card */}
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FDFAF5',
          borderRadius: '28px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          border: '1px solid rgba(176, 138, 74, 0.25)',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.2fr)',
          animation: 'popIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          outline: 'none'
        }}
        className="modal-grid"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(239, 231, 218, 0.9)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-brown)',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
          className="modal-close-btn"
        >
          <X size={19} />
        </button>

        {/* LEFT: Image Panel */}
        <div
          style={{
            backgroundColor: 'var(--bg-cream)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '28px 0 0 28px'
          }}
          className="modal-img-panel"
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(46, 37, 31, 0.12)',
              backgroundColor: '#FFFFFF'
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Color Preview Strip */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '18px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {product.colors.map(c => (
                <div
                  key={c.name}
                  title={c.name}
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: c.hex,
                    border: selectedColor === c.name ? '2px solid var(--color-green)' : '2px solid rgba(0,0,0,0.12)',
                    boxShadow: selectedColor === c.name ? '0 0 0 3px rgba(31, 90, 58, 0.18)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setSelectedColor(c.name)}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Details & Form */}
        <div style={{ padding: '36px 32px', overflowY: 'auto' }}>
          {/* Category Label */}
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            {product.category.toUpperCase()} · {product.type.toUpperCase()}
          </span>

          {/* Product Name */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.85rem',
              color: 'var(--color-brown)',
              lineHeight: 1.2,
              marginBottom: '10px',
              fontWeight: 700
            }}
          >
            {product.name}
          </h2>

          {/* Price */}
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-green)',
              fontStyle: 'italic',
              marginBottom: '14px'
            }}
          >
            {product.price}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-brown-light)',
              lineHeight: 1.65,
              marginBottom: '24px',
              borderBottom: '1px solid rgba(231, 216, 198, 0.8)',
              paddingBottom: '20px'
            }}
          >
            {product.description}
          </p>

          {/* SIZE SELECTOR */}
          {product.sizes && product.sizes.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-brown)',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                Size: <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{selectedSize}</span>
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.sizes.map(size => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        minWidth: '46px',
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: '10px',
                        border: active ? '1.5px solid var(--color-green)' : '1.5px solid rgba(176, 138, 74, 0.25)',
                        backgroundColor: active ? 'var(--color-green)' : '#FFFFFF',
                        color: active ? '#FFFFFF' : 'var(--color-brown)',
                        fontSize: '0.83rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      {active && <Check size={12} />}
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* COLOR SELECTOR */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-brown)',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                Color: <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', gap: '9px', flexWrap: 'wrap' }}>
                {product.colors.map(color => {
                  const active = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        padding: '7px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: active ? '1.5px solid var(--color-green)' : '1.5px solid rgba(176, 138, 74, 0.22)',
                        backgroundColor: active ? 'rgba(31, 90, 58, 0.07)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          backgroundColor: color.hex,
                          border: '1px solid rgba(0,0,0,0.13)',
                          flexShrink: 0
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: active ? 700 : 500,
                          color: active ? 'var(--color-green)' : 'var(--color-brown-mid)'
                        }}
                      >
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* CUSTOMER DETAILS */}
          <div
            style={{
              backgroundColor: 'rgba(231, 216, 198, 0.3)',
              padding: '18px',
              borderRadius: '16px',
              marginBottom: '22px'
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: 'var(--color-brown-light)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              Customer Information (Optional)
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <input
                type="text"
                className="modal-input"
                placeholder="Your Name"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                aria-label="Customer name"
              />
              <input
                type="tel"
                className="modal-input"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={e => setCustomerPhone(e.target.value)}
                aria-label="Phone number"
              />
            </div>
            <textarea
              className="modal-input"
              placeholder="Optional message or special request..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={2}
              aria-label="Optional message"
              style={{ resize: 'vertical', minHeight: '60px' }}
            />
          </div>

          {/* ENQUIRE BUTTON */}
          <button
            onClick={handleSendWhatsApp}
            className="btn-whatsapp"
            style={{ width: '100%', padding: '18px', fontSize: '0.88rem' }}
          >
            <MessageCircle size={20} fill="currentColor" color="#25D366" />
            ENQUIRE ON WHATSAPP
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn  { from { opacity: 0; transform: scale(0.94) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .modal-close-btn:hover { background-color: var(--color-green) !important; color: #FFFFFF !important; }
        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            max-height: 94vh !important;
            border-radius: 24px 24px 0 0 !important;
          }
          .modal-img-panel {
            border-radius: 24px 24px 0 0 !important;
            padding: 24px !important;
          }
          .modal-img-panel > div { aspect-ratio: 16/9 !important; }
        }
        @media (max-width: 400px) {
          .modal-grid > div:last-child { padding: 24px 18px !important; }
        }
      `}</style>
    </div>
  );
}
