import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll('.hero-reveal');
    gsap.set(items, { opacity: 0, y: 24 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.2
    });
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI was exploring your online showroom during maintenance and am interested in shopping via WhatsApp!\n\nPlease share your latest saree & ethnic collections.\n\nThank you."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const scrollToCollections = (e) => {
    e.preventDefault();
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="maintenance-hero"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 90px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #FBF7EF 0%, #F6EEDD 45%, #EDDCC0 100%)',
      }}
    >
      {/* Animated drifting glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '55%',
          height: '70%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,138,74,0.22) 0%, transparent 65%)',
          filter: 'blur(40px)',
          animation: 'drift1 18s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-8%',
          width: '60%',
          height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,90,58,0.18) 0%, transparent 65%)',
          filter: 'blur(50px)',
          animation: 'drift2 22s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '35%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,138,74,0.14) 0%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 40px) scale(1.08); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, -30px) scale(1.06); }
        }
      `}</style>

      {/* Gold ring accents */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          border: '1.5px solid rgba(176,138,74,0.28)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          border: '1px solid rgba(176,138,74,0.14)',
          transform: 'scale(1.25)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '6%',
          left: '4%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          border: '1.5px solid rgba(31,90,58,0.2)',
          pointerEvents: 'none',
        }}
      />

      {/* Diagonal gold accent line */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          width: '1px',
          height: '140px',
          background: 'linear-gradient(180deg, rgba(176,138,74,0.4), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Fine dot grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(176,138,74,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 0%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Soft grain for texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          pointerEvents: 'none',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          mixBlendMode: 'multiply',
        }}
      />

      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Brand logo */}
        <div className="hero-reveal" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/logo.png"
            alt="Aiyappa Textiles"
            style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Eyebrow badge */}
        <div className="hero-reveal" style={{ marginBottom: '22px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(31, 90, 58, 0.08)',
              border: '1px solid rgba(31, 90, 58, 0.2)',
              color: 'var(--color-green)',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={13} />
            AIYAPPA TEXTILES
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="hero-reveal"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 6vw, 4.6rem)',
            color: 'var(--color-brown)',
            lineHeight: 1.05,
            marginBottom: '26px',
            fontWeight: 600,
          }}
        >
          We'll Be<br />
          <span style={{ color: 'var(--color-green)', fontStyle: 'italic' }}>Back Soon!</span>
        </h1>

        {/* Maintenance body text */}
        <p
          className="hero-reveal"
          style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
            color: 'var(--color-brown-mid)',
            lineHeight: 1.75,
            marginBottom: '14px',
            maxWidth: '540px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Our website is currently undergoing a little maintenance to bring you a better online shopping experience.
        </p>

        {/* Secondary text */}
        <p
          className="hero-reveal"
          style={{
            fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
            color: 'var(--color-brown-light)',
            lineHeight: 1.75,
            marginBottom: '44px',
            maxWidth: '540px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Don't worry — you can still continue shopping with{' '}
          <span style={{ color: 'var(--color-green)', fontWeight: 600 }}>WhatsApp</span>.
        </p>

        {/* CTA buttons */}
        <div
          className="hero-reveal"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={openWhatsApp}
            className="btn-whatsapp"
            style={{ padding: '17px 32px' }}
          >
            <MessageCircle size={20} fill="currentColor" color="#25D366" />
            ENQUIRE ON WHATSAPP
          </button>

          <a
            href="#collections"
            onClick={scrollToCollections}
            className="btn-secondary"
            style={{ padding: '16px 30px' }}
          >
            EXPLORE COLLECTIONS
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}


