import React from 'react';
import { MessageCircle, Video, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

export default function WhatsAppShopping() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI would like to start shopping directly on WhatsApp. Please send me your latest catalogue and available offers.\n\nThank you!"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const scrollToCollections = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="whatsapp-shopping"
      style={{
        padding: '120px 24px',
        backgroundColor: '#1F5A3A',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            'radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#D4AF37 1px, #1F5A3A 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#D4AF37',
              padding: '6px 20px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={14} />
            <span>INSTANT SHOPPING SERVICE</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '16px',
              fontWeight: 700
            }}
          >
            Can't wait for the website?
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.6,
              marginBottom: '40px'
            }}
          >
            Shop directly with Aiyappa Textiles on WhatsApp. Our dedicated personal shoppers will guide you through fabric textures, matching blouses, color customization, and instant delivery.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}
          >
            <button onClick={openWhatsApp} className="btn-whatsapp" style={{ padding: '18px 36px', fontSize: '1rem' }}>
              <MessageCircle size={22} fill="currentColor" color="#25D366" />
              <span>CHAT WITH US ON WHATSAPP</span>
            </button>

            <button
              onClick={scrollToCollections}
              style={{
                padding: '18px 36px',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="btn-sec-hover"
            >
              VIEW COLLECTIONS
            </button>
          </div>

          {/* Feature Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '40px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}
              >
                <Video size={22} color="#D4AF37" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>Video Call Shopping</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>Live showroom virtual walk-through</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}
              >
                <ShieldCheck size={22} color="#D4AF37" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>100% Authentic Quality</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>Pure silk zari & cotton certified</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}
              >
                <Truck size={22} color="#D4AF37" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>Express Delivery</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>Safe dispatch across India & global</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .btn-sec-hover:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
          border-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
