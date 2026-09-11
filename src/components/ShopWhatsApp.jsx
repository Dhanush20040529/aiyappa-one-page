import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';
import { FaWhatsapp } from 'react-icons/fa';

export default function ShopWhatsApp() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI can't wait for the website! I'd love to shop directly.\n\nPlease share your latest collection with prices and availability.\n\nThank you!"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section
      id="whatsapp-shopping"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px',
        background: `linear-gradient(135deg, #F6F0E7 0%, #E7D8C6 100%)`
      }}
    >
      {/* Background textile image with overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none'
        }}
      />

      {/* Warm cream overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(246, 240, 231, 0.9) 0%, rgba(231, 216, 198, 0.88) 100%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label reveal">
            <Sparkles size={13} />
            SHOP DIRECTLY
          </div>

          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.2,
              marginBottom: '20px',
              fontWeight: 600
            }}
          >
            Can't wait for the website?
          </h2>

          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.15,
              marginBottom: '28px',
              fontWeight: 700
            }}
          >
            Your next favourite piece <br />
            <span style={{ color: 'var(--color-green)', fontStyle: 'italic' }}>
              is just a WhatsApp away.
            </span>
          </p>

          <p
            className="reveal"
            style={{
              fontSize: '1.08rem',
              color: 'var(--color-brown-mid)',
              lineHeight: 1.75,
              marginBottom: '44px',
              maxWidth: '560px',
              margin: '0 auto 44px'
            }}
          >
            Our online store is getting a little refresh, but our team is ready to help you choose.
          </p>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={openWhatsApp}
              className="btn-whatsapp"
              style={{ padding: '20px 44px', fontSize: '0.95rem' }}
            >
              <FaWhatsapp size={22} fill="currentColor" color="#25D366" />
              CHAT WITH AIYAPPA TEXTILES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
