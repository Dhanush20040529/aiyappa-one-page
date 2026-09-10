import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, CATEGORIES, PRODUCT_TYPES } from '../data/products';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export default function ProductGrid({ selectedCategory, onSelectCategory, onOpenModal }) {
  const [activeType, setActiveType] = useState('all');

  // Filter products based on selectedCategory (all, men, women, kids) and activeType
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesType =
      activeType === 'all' || item.type.toLowerCase().includes(activeType.toLowerCase());

    return matchesCategory && matchesType;
  });

  return (
    <section
      id="products"
      style={{
        padding: '120px 24px',
        backgroundColor: '#F7F3EB',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto 48px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#1F5A3A',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            <Sparkles size={14} />
            <span>AIYAPPA TEXTILES SHOWROOM</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: '#30261F',
              lineHeight: 1.15,
              marginBottom: '16px',
              fontWeight: 700
            }}
          >
            Digital Catalogue & Enquiries
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#7E746A', lineHeight: 1.6 }}>
            Browse through our premium handloom sarees, designer ethnic suits, formal menswear, and kids festive collections. Click any item to select color, size, and enquire on WhatsApp.
          </p>
        </div>

        {/* Category & Type Filter Bar */}
        <div style={{ marginBottom: '40px' }}>
          {/* Main Category Tabs (All / Men / Women / Kids) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '20px'
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setActiveType('all');
                }}
                style={{
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border:
                    selectedCategory === cat.id
                      ? '1.5px solid #1F5A3A'
                      : '1.5px solid rgba(184, 155, 94, 0.25)',
                  backgroundColor: selectedCategory === cat.id ? '#1F5A3A' : '#FCFAF6',
                  color: selectedCategory === cat.id ? '#FFFFFF' : '#4A423B',
                  boxShadow: selectedCategory === cat.id ? '0 8px 20px rgba(31, 90, 58, 0.25)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-type Filters */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                color: '#7E746A',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginRight: '8px'
              }}
            >
              <SlidersHorizontal size={14} /> Filter:
            </span>

            {PRODUCT_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: activeType === type.id ? '1px solid #B89B5E' : '1px solid rgba(184, 155, 94, 0.15)',
                  backgroundColor: activeType === type.id ? 'rgba(184, 155, 94, 0.15)' : 'transparent',
                  color: activeType === type.id ? '#B89B5E' : '#7E746A'
                }}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Counter */}
        <div
          style={{
            fontSize: '0.85rem',
            color: '#7E746A',
            marginBottom: '28px',
            textAlign: 'center',
            fontWeight: 500
          }}
        >
          Showing {filteredProducts.length} premium pieces available for WhatsApp order
        </div>

        {/* Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
}
