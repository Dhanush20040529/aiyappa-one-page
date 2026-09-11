import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { PRODUCTS, SUBCATEGORY_TYPES } from '../data/products';
import { COLLECTIONS } from '../data/collections';
import ProductCard from './ProductCard';

// ─────────────────────────────────────────────────────────────
// SHOP OUR SELECTION
// Two-tier filter:
//   Tier 1 — collection tabs (Women / Men / Kids / …)
//   Tier 2 — subcategory type chips (Kurti / Saree / Shirt / …)
// Product grid shows items matching both selections.
// ─────────────────────────────────────────────────────────────

const ALL_ID = 'all';

export default function ProductSection({ selectedCategory, onSelectCategory, onOpenModal }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  // Local sub-selection (product type chip)
  const [selectedSub, setSelectedSub] = useState(ALL_ID);

  // When the parent changes the collection, reset sub-filter
  useEffect(() => {
    setSelectedSub(ALL_ID);
  }, [selectedCategory]);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Subcategory types for the selected collection ──
  const subTypes =
    selectedCategory === ALL_ID
      ? Object.values(SUBCATEGORY_TYPES).flat()   // show all types when "all"
      : (SUBCATEGORY_TYPES[selectedCategory] || []);

  // ── Active collection meta (for header accent) ──
  const activeMeta =
    selectedCategory === ALL_ID
      ? null
      : COLLECTIONS.find(c => c.id === selectedCategory);

  // ── Filtered products ──
  const filteredProducts = PRODUCTS.filter(p => {
    const matchCollection =
      selectedCategory === ALL_ID || p.collection === selectedCategory;
    const matchSub =
      selectedSub === ALL_ID || p.subcategory === selectedSub;
    return matchCollection && matchSub;
  });

  // ── Label for selected sub ──
  const selectedSubLabel =
    selectedSub === ALL_ID
      ? null
      : subTypes.find(s => s.key === selectedSub)?.label || selectedSub;

  const handleSelectCollection = (id) => {
    onSelectCategory(id);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      style={{

        backgroundColor: 'var(--bg-ivory)',
        position: 'relative',
      }}
    >
      <div className="container">

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }}>
          <div className="section-label reveal">
            <Sparkles size={13} />
            {selectedCategory === ALL_ID
              ? 'OUR FULL RANGE'
              : `${(activeMeta?.label || selectedCategory).toUpperCase()} COLLECTION`}
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.12,
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            Shop Our Selection
          </h2>
          <p
            className="reveal"
            style={{ fontSize: '1.05rem', color: 'var(--color-brown-light)', lineHeight: 1.7 }}
          >
            {selectedCategory === ALL_ID
              ? 'Browse every product type across all our collections.'
              : `Showing all ${activeMeta?.label || ''} product types. Select a type to filter products.`}
          </p>
        </div>

        {/* ── Tier 1: Collection Tabs ── */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: subTypes.length > 0 ? '18px' : '52px',
          }}
        >
          {/* "ALL" tab */}
          <button
            className={`col-tab${selectedCategory === ALL_ID ? ' col-tab-active' : ''}`}
            onClick={() => handleSelectCollection(ALL_ID)}
            aria-pressed={selectedCategory === ALL_ID}
          >
            All
          </button>

          {/* Per-collection tabs */}
          {COLLECTIONS.map(col => (
            <button
              key={col.id}
              className={`col-tab${selectedCategory === col.id ? ' col-tab-active' : ''}`}
              onClick={() => handleSelectCollection(col.id)}
              aria-pressed={selectedCategory === col.id}
            >
              {col.label}
            </button>
          ))}
        </div>

        {/* ── Tier 2: Subcategory Type Chips ── */}
        {subTypes.length > 0 && (
          <div
            className="reveal sub-chips-row"
            style={{ marginBottom: '52px' }}
          >
            <button
              className={`sub-chip${selectedSub === ALL_ID ? ' sub-chip-active' : ''}`}
              onClick={() => setSelectedSub(ALL_ID)}
            >
              All Types
            </button>
            {subTypes.map(sub => (
              <button
                key={sub.key}
                className={`sub-chip${selectedSub === sub.key ? ' sub-chip-active' : ''}`}
                onClick={() => setSelectedSub(sub.key)}
                title={sub.group ? `${sub.group} — ${sub.label}` : sub.label}
              >
                {sub.group && (
                  <span style={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    opacity: 0.6,
                    marginRight: '4px',
                    textTransform: 'uppercase',
                  }}>
                    {sub.group} ·
                  </span>
                )}
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* ── Active filter breadcrumb ── */}
        {(selectedCategory !== ALL_ID || selectedSub !== ALL_ID) && (
          <div
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
              fontSize: '0.82rem',
              color: 'var(--color-brown-light)',
              flexWrap: 'wrap',
            }}
          >
            <ShoppingBag size={14} style={{ color: 'var(--color-gold)' }} />
            <span>Showing:</span>
            {activeMeta && (
              <span
                style={{
                  background: 'var(--color-gold-subtle)',
                  border: '1px solid rgba(176,138,74,0.3)',
                  color: 'var(--color-brown)',
                  padding: '2px 10px',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                }}
              >
                {activeMeta.label}
              </span>
            )}
            {selectedSubLabel && (
              <>
                <span style={{ color: 'rgba(126,116,106,0.5)' }}>›</span>
                <span
                  style={{
                    background: 'rgba(31,90,58,0.08)',
                    border: '1px solid rgba(31,90,58,0.2)',
                    color: 'var(--color-green)',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                  }}
                >
                  {selectedSubLabel}
                </span>
              </>
            )}
            <span style={{ marginLeft: '4px', color: 'var(--color-brown-light)' }}>
              — {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}

        {/* ── Product Grid ── */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid" style={{ display: 'grid', gap: '22px' }}>
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={i * 65}
                onOpenModal={onOpenModal}
                visible={visible}
              />
            ))}
          </div>
        ) : (
          /* ── Empty state ── */
          <div
            style={{
              textAlign: 'center',
              padding: '80px 24px 60px',
              color: 'var(--color-brown-light)',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(176,138,74,0.08)',
                border: '1px solid rgba(176,138,74,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <ShoppingBag size={28} style={{ color: 'var(--color-gold)', opacity: 0.6 }} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                color: 'var(--color-brown)',
                marginBottom: '10px',
                fontWeight: 600,
              }}
            >
              No products available yet
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto' }}>
              We're adding new products to this collection soon. Check back shortly or{' '}
              <span style={{ color: 'var(--color-green)', fontWeight: 600 }}>enquire via WhatsApp</span>.
            </p>
          </div>
        )}
      </div>

      <style>{`
        /* ── Collection Tabs (Tier 1) ─────────────────────── */
        .col-tab {
          padding: 9px 20px;
          border-radius: 999px;
          border: 1.5px solid rgba(176, 138, 74, 0.28);
          background: transparent;
          color: var(--color-brown-mid);
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .col-tab:hover {
          border-color: var(--color-brown);
          color: var(--color-brown);
        }
        .col-tab-active {
          background: var(--color-brown) !important;
          color: #FFFDF9 !important;
          border-color: var(--color-brown) !important;
        }

        /* ── Subcategory Chips (Tier 2) ─────────────────────── */
        .sub-chips-row {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .sub-chip {
          display: inline-flex;
          align-items: center;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1.5px solid rgba(176, 138, 74, 0.22);
          background: #FDFAF5;
          color: var(--color-brown-light);
          font-weight: 600;
          font-size: 0.76rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .sub-chip:hover {
          border-color: var(--color-gold);
          color: var(--color-brown);
          background: rgba(176, 138, 74, 0.06);
        }
        .sub-chip-active {
          background: var(--color-gold) !important;
          color: #fff !important;
          border-color: var(--color-gold) !important;
        }

        /* ── Product Grid ─────────────────────────────────── */
        .products-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1280px) {
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .col-tab { font-size: 0.72rem; padding: 8px 14px; }
          .sub-chip { font-size: 0.7rem; padding: 6px 12px; }
        }
      `}</style>
    </section>
  );
}
