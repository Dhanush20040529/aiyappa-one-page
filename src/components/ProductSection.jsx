import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductSection({ selectedCategory, onSelectCategory, onOpenModal }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 90);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section
      id="products"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-ivory)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>
          <div className="section-label reveal">
            <Sparkles size={13} />
            OUR SELECTION
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--color-brown)',
              lineHeight: 1.15,
              marginBottom: '14px',
              fontWeight: 700
            }}
          >
            Shop Our Selection
          </h2>
          <p
            className="reveal"
            style={{ fontSize: '1.05rem', color: 'var(--color-brown-light)', lineHeight: 1.7 }}
          >
            Discover a few of our favourites.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '56px'
          }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-tab${selectedCategory === cat.id ? ' active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={selectedCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}
          className="products-grid"
        >
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={i * 80}
              onOpenModal={onOpenModal}
              visible={visible}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--color-brown-light)' }}>
            <p style={{ fontSize: '1.1rem' }}>No products found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}
