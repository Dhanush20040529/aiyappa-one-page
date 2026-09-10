import React, { useEffect, useRef } from 'react';
import { ArrowRight, Tag } from 'lucide-react';

export default function ProductCard({ product, delay = 0, onOpenModal, visible }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (visible && cardRef.current) {
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.opacity = '1';
          cardRef.current.style.transform = 'translateY(0)';
        }
      }, delay);
    }
  }, [visible, delay]);

  return (
    <div
      ref={cardRef}
      className="product-card"
      onClick={() => onOpenModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpenModal(product)}
      aria-label={`View details for ${product.name}`}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            zIndex: 5,
            backgroundColor: 'rgba(253, 250, 245, 0.95)',
            backdropFilter: 'blur(8px)',
            color: 'var(--color-green)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(31, 90, 58, 0.2)'
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div style={{ padding: '18px 18px 20px' }}>
        {/* Category */}
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '5px'
          }}
        >
          {product.category.toUpperCase()} · {product.type}
        </span>

        {/* Name */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            color: 'var(--color-brown)',
            lineHeight: 1.3,
            marginBottom: '10px',
            fontWeight: 600
          }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '14px'
          }}
        >
          <Tag size={13} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--color-green)',
              fontWeight: 600,
              fontStyle: 'italic'
            }}
          >
            {product.price}
          </span>
        </div>

        {/* CTA Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(231, 216, 198, 0.8)',
            paddingTop: '12px'
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--color-brown-mid)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            View Details
          </span>
          <ArrowRight
            size={16}
            style={{ color: 'var(--color-gold)', transition: 'transform 0.3s ease' }}
          />
        </div>
      </div>
    </div>
  );
}
