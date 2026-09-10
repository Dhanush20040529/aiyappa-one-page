import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

export default function ComingBack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 130);
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
      "Hello Aiyappa Textiles,\n\nI would like to explore your collections and place an order through WhatsApp.\n\nThank you!"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section
      id="coming-back"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-section)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Gold decorative ring */}
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(176, 138, 74, 0.1)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31, 90, 58, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div
            className="section-label reveal"
            style={{ justifyContent: 'center' }}
          >
            COMING BACK BETTER
          </div>

          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.1,
              marginBottom: '24px',
              fontWeight: 700
            }}
          >
            We'll be <span style={{ color: 'var(--color-green)', fontStyle: 'italic' }}>back soon.</span>
          </h2>

          <p
            className="reveal"
            style={{
              fontSize: '1.08rem',
              color: 'var(--color-brown-mid)',
              lineHeight: 1.75,
              marginBottom: '16px'
            }}
          >
            We're working behind the scenes to create a better online shopping experience for you.
          </p>

          <p
            className="reveal"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-brown-light)',
              lineHeight: 1.75,
              marginBottom: '48px'
            }}
          >
            Until then, explore our collections and shop directly with Aiyappa Textiles through WhatsApp.
          </p>

          <div
            className="reveal"
            style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
          >
            <button
              onClick={openWhatsApp}
              className="btn-whatsapp"
            >
              <MessageCircle size={20} fill="currentColor" color="#25D366" />
              WHATSAPP US
            </button>

            <a href="#collections" className="btn-secondary">
              BROWSE COLLECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
