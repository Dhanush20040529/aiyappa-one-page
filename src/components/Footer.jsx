import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER, STORE_INFO } from '../config';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer({ onSelectCategory }) {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI would like to enquire about your collections.\n\nThank you!"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const scrollToProducts = (category) => {
    onSelectCategory(category);
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-brown)',
        color: 'rgba(246, 240, 231, 0.85)',
        padding: '80px 24px 40px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <img
              src="/logo.png"
              alt="Aiyappa Textiles"
              style={{ height: '52px', width: 'auto', marginBottom: '16px', filter: 'brightness(1.2)' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: '#F6F0E7',
                marginBottom: '8px',
                fontWeight: 700
              }}
            >
              Aiyappa Textiles
            </h3>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'rgba(246, 240, 231, 0.6)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontStyle: 'italic'
              }}
            >
              Tradition. Quality. Elegance.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href="https://www.instagram.com/aiyappatextiles/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(246, 240, 231, 0.08)',
                  border: '1px solid rgba(246, 240, 231, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(246, 240, 231, 0.7)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                className="footer-icon-btn"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/aiyappatextileskaraikudi"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(246, 240, 231, 0.08)',
                  border: '1px solid rgba(246, 240, 231, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(246, 240, 231, 0.7)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                className="footer-icon-btn"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@aiyappastore4830"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(246, 240, 231, 0.08)',
                  border: '1px solid rgba(246, 240, 231, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(246, 240, 231, 0.7)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                className="footer-icon-btn"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Collections */}
          <div>
            <h4
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: "Women's Collection", cat: 'women' },
                { label: "Men's Collection", cat: 'men' },
                { label: 'General Collection', cat: 'general' },
                { label: 'All Products', cat: 'all' }
              ].map(item => (
                <li key={item.cat}>
                  <button
                    onClick={() => scrollToProducts(item.cat)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(246, 240, 231, 0.72)',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.25s ease',
                      textAlign: 'left'
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Collections', href: '#collections' },
                { label: 'Products', href: '#products' },
                { label: 'WhatsApp', href: '#' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={item.label === 'WhatsApp' ? (e) => { e.preventDefault(); openWhatsApp(); } : undefined}
                    style={{
                      color: 'rgba(246, 240, 231, 0.72)',
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease'
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={15} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.84rem', color: 'rgba(246, 240, 231, 0.65)', lineHeight: 1.55 }}>
                  {STORE_INFO.address}
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.84rem', color: 'rgba(246, 240, 231, 0.65)' }}>
                  {STORE_INFO.phone}
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.84rem', color: 'rgba(246, 240, 231, 0.65)' }}>
                  {STORE_INFO.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(246, 240, 231, 0.1)',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <p style={{ fontSize: '0.82rem', color: 'rgba(246, 240, 231, 0.5)' }}>
            © 2026 Aiyappa Textiles. All rights reserved.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(246, 240, 231, 0.35)', fontStyle: 'italic' }}>
            Tradition. Quality. Elegance.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--color-gold) !important; }
        .footer-icon-btn:hover { background-color: rgba(246, 240, 231, 0.14) !important; color: #F6F0E7 !important; transform: translateY(-2px); }
      `}</style>
    </footer>
  );
}
