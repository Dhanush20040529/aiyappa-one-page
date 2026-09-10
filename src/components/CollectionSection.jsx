import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '../data/collections';

export default function CollectionSection({ onSelectCategory }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 140);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleExplore = (categoryKey) => {
    onSelectCategory(categoryKey);
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <section
      id="collections"
      ref={sectionRef}
      style={{
        padding: '130px 24px',
        backgroundColor: '#FDFAF5',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 72px' }}>
          <div className="section-label reveal">
            <Sparkles size={13} />
            CURATED FOR YOU
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.15,
              marginBottom: '16px',
              fontWeight: 700
            }}
          >
            Explore Our Collections
          </h2>
          <p
            className="reveal"
            style={{ fontSize: '1.05rem', color: 'var(--color-brown-light)', lineHeight: 1.7 }}
          >
            Something beautiful for everyone.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}
        >
          {COLLECTIONS.map((col, i) => (
            <div
              key={col.id}
              className="collection-card reveal"
              onClick={() => handleExplore(col.categoryKey)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleExplore(col.categoryKey)}
              aria-label={`Explore ${col.title}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={col.image}
                alt={col.title}
                className="card-img"
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(31, 21, 15, 0.90) 0%, rgba(31, 21, 15, 0.25) 55%, rgba(31, 21, 15, 0.05) 100%)'
                }}
              />

              {/* Bottom Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '36px 32px',
                  color: '#FFFFFF'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.9rem',
                    color: '#FFFFFF',
                    marginBottom: '8px',
                    fontWeight: 700
                  }}
                >
                  {col.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}
                >
                  {col.subtitle}
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#D4AF37',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  <span>{col.buttonText}</span>
                  <ArrowRight size={16} className="card-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
