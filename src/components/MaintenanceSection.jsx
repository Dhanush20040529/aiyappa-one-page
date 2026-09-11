import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../config';

export default function MaintenanceSection() {
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
      "Hello Aiyappa Textiles,\n\nI would like to continue shopping while your website is under maintenance.\n\nPlease guide me through your available collections.\n\nThank you!"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section
      id="maintenance"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-section)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background decoration */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(176, 138, 74, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label reveal">
            <Sparkles size={13} />
            A LITTLE REFRESH
          </div>

          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.15,
              marginBottom: '24px',
              fontWeight: 700
            }}
          >
            We're making things <br />
            <span style={{ color: 'var(--color-green)', fontStyle: 'italic' }}>even better.</span>
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
            Our website is currently undergoing a little maintenance to bring you
            a better online shopping experience.
          </p>

          <p
            className="reveal"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-brown-light)',
              lineHeight: 1.7,
              marginBottom: '44px'
            }}
          >
            Don't worry — our collections are still available. You can explore our
            products and enquire directly through WhatsApp.
          </p>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={openWhatsApp} className="btn-whatsapp">
              <FaWhatsapp size={20} fill="currentColor" color="#25D366" />
              CONTINUE SHOPPING ON WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
