import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';
import { FaWhatsapp } from 'react-icons/fa';

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
        background: '#F3E8D3',
      }}
    >
      <style>{`
    @keyframes meshMove1 {
      0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
      33% { transform: translate(8%, -6%) rotate(8deg) scale(1.15); }
      66% { transform: translate(-6%, 8%) rotate(-6deg) scale(1.05); }
    }
    @keyframes meshMove2 {
      0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
      50% { transform: translate(-10%, -8%) rotate(-10deg) scale(1.2); }
    }
    @keyframes meshMove3 {
      0%, 100% { transform: translate(0%, 0%) scale(1); }
      50% { transform: translate(6%, 10%) scale(1.12); }
    }
    @keyframes weaveShift {
      0% { background-position: 0 0; }
      100% { background-position: 80px 80px; }
    }
    @keyframes shimmer {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `}</style>

      {/* Layer 1: Animated mesh-gradient color blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '70%',
          height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,138,74,0.45) 0%, rgba(176,138,74,0) 70%)',
          filter: 'blur(60px)',
          animation: 'meshMove1 20s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-25%',
          right: '-15%',
          width: '75%',
          height: '85%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,90,58,0.35) 0%, rgba(31,90,58,0) 70%)',
          filter: 'blur(70px)',
          animation: 'meshMove2 26s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '45%',
          height: '55%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,120,0.4) 0%, rgba(212,175,120,0) 70%)',
          filter: 'blur(55px)',
          animation: 'meshMove3 17s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '35%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,58,58,0.18) 0%, rgba(139,58,58,0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 2: Woven fabric texture pattern (diagonal crosshatch) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          backgroundImage: `
        repeating-linear-gradient(45deg, rgba(139,105,60,0.06) 0px, rgba(139,105,60,0.06) 2px, transparent 2px, transparent 14px),
        repeating-linear-gradient(-45deg, rgba(139,105,60,0.06) 0px, rgba(139,105,60,0.06) 2px, transparent 2px, transparent 14px)
      `,
          animation: 'weaveShift 30s linear infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 3: Silk drape shapes at the bottom */}
      <svg
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', pointerEvents: 'none' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C240,100 480,220 720,170 C960,120 1200,200 1440,150 L1440,320 L0,320 Z"
          fill="rgba(176,138,74,0.10)"
        />
        <path
          d="M0,200 C300,260 600,140 900,190 C1100,220 1300,170 1440,200 L1440,320 L0,320 Z"
          fill="rgba(31,90,58,0.08)"
        />
      </svg>

      {/* Layer 4: Shimmering gold thread lines */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '20%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent, rgba(176,138,74,0.35) 40%, rgba(176,138,74,0.35) 60%, transparent)',
          animation: 'shimmer 6s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '25%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent, rgba(31,90,58,0.3) 40%, rgba(31,90,58,0.3) 60%, transparent)',
          animation: 'shimmer 8s ease-in-out infinite 2s',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 5: Soft grain for texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          pointerEvents: 'none',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          mixBlendMode: 'multiply',
        }}
      />

      {/* Vignette to keep focus on center content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(43,32,20,0.10) 100%)',
          pointerEvents: 'none',
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
              backgroundColor: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(31, 90, 58, 0.25)',
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
            <FaWhatsapp size={20} fill="currentColor" color="#25D366" />
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
    </section >
  );
}


