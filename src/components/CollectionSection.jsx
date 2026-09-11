import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '../data/collections';

// ─────────────────────────────────────────────────────────────
// EXPLORE OUR COLLECTIONS
// Displays the 7 broad editorial collection categories.
// Clicking one filters the "Shop Our Selection" section below.
// ─────────────────────────────────────────────────────────────

export default function CollectionSection({ onSelectCategory }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.col-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('col-visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (collectionId) => {
    onSelectCategory(collectionId);
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
        padding: '120px 24px 100px',
        backgroundColor: '#FDFAF5',
        position: 'relative',
      }}
    >
      <div className="container">

        {/* ── Section Header ── */}
        <div
          className="col-reveal"
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 72px' }}
        >
          <div className="section-label">
            <Sparkles size={13} />
            BROWSE BY COLLECTION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.1,
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Explore Our Collections
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-brown-light)', lineHeight: 1.7 }}>
            Select a collection to browse all available styles and products.
          </p>
        </div>

        {/* ── Row 1: Women · Men · Kids (3 columns) ── */}
        <div className="collections-row-3">
          {COLLECTIONS.slice(0, 3).map((col, i) => (
            <CollectionCard
              key={col.id}
              col={col}
              index={i}
              onSelect={handleSelect}
              tall
            />
          ))}
        </div>

        {/* ── Row 2: New Born · Home & Kitchen (2 columns) ── */}
        <div className="collections-row-2">
          {COLLECTIONS.slice(3, 5).map((col, i) => (
            <CollectionCard
              key={col.id}
              col={col}
              index={i + 3}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* ── Row 3: Giftings · Toys & Games (2 columns) ── */}
        <div className="collections-row-2">
          {COLLECTIONS.slice(5, 7).map((col, i) => (
            <CollectionCard
              key={col.id}
              col={col}
              index={i + 5}
              onSelect={handleSelect}
            />
          ))}
        </div>

      </div>

      <style>{`
        /* Reveal animation */
        .col-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .col-reveal.col-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Row grids */
        .collections-row-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        .collections-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        /* Card base */
        .col-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(176, 138, 74, 0.14);
          box-shadow: 0 8px 30px rgba(46, 37, 31, 0.07);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          background: #1A1410;
        }
        .col-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(46, 37, 31, 0.16);
          border-color: var(--color-gold);
        }

        /* Image */
        .col-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .col-card:hover .col-card-img {
          transform: scale(1.06);
        }

        /* Scrim */
        .col-card-scrim {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Bottom text block */
        .col-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 26px;
          color: #fff;
        }

        /* CTA arrow */
        .col-card-arrow {
          transition: transform 0.35s ease;
        }
        .col-card:hover .col-card-arrow {
          transform: translateX(5px);
        }

        /* Tall cards (row 1) */
        .col-card-tall { height: 420px; }

        /* Normal cards (rows 2-3) */
        .col-card-normal { height: 280px; }

        /* ── RESPONSIVE ─────────────────────── */
        @media (max-width: 1024px) {
          .collections-row-3 { grid-template-columns: repeat(2, 1fr); }
          .col-card-tall { height: 360px; }
          .collections-row-3 > :last-child {
  grid-column: 1 / -1;
}
          
        }
        @media (max-width: 640px) {
          .collections-row-3,
          .collections-row-2 {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin-bottom: 14px;
          }
          .col-card-tall { height: 230px; }
          .col-card-normal { height: 190px; }
          .col-card-body { padding: 18px 16px; }
        }
        @media (max-width: 420px) {
          .col-card-tall { height: 195px; }
          .col-card-normal { height: 165px; }
        }
      `}</style>
    </section>
  );
}

/* ── Reusable card ── */
function CollectionCard({ col, index, onSelect, tall = false }) {
  return (
    <div
      className={`col-card col-reveal ${tall ? 'col-card-tall' : 'col-card-normal'}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
      onClick={() => onSelect(col.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(col.id)}
      aria-label={`Explore ${col.label} collection`}
    >
      {/* Image */}
      <img
        src={col.image}
        alt={col.label}
        className="col-card-img"
        loading="lazy"
      />

      {/* Gradient scrim */}
      <div
        className="col-card-scrim"
        style={{
          background:
            'linear-gradient(to top, rgba(16, 11, 8, 0.92) 0%, rgba(16, 11, 8, 0.42) 42%, rgba(16, 11, 8, 0.06) 100%)',
        }}
      />

      {/* Text */}
      <div className="col-card-body">
        {/* Collection name */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: tall ? 'clamp(1.5rem, 2.4vw, 2rem)' : 'clamp(1.15rem, 1.8vw, 1.5rem)',
            fontWeight: 700,
            color: '#FFFDF9',
            lineHeight: 1.15,
            marginBottom: '6px',
            letterSpacing: '-0.01em',
          }}
        >
          {col.label}
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(0.72rem, 1vw, 0.84rem)',
            color: 'rgba(255,253,249,0.7)',
            marginBottom: '14px',
            lineHeight: 1.45,
          }}
        >
          {col.tagline}
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            color: col.accent || '#D4AF37',
            fontWeight: 700,
            fontSize: '0.74rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>Shop Now</span>
          <ArrowRight size={14} className="col-card-arrow" />
        </div>
      </div>
    </div>
  );
}
