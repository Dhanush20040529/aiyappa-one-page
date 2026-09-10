import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGeneralWhatsApp = () => {
    const msg = encodeURIComponent("Hello Aiyappa Textiles,\n\nI am browsing your online digital showroom. I would like to enquire about your available collections.\n\nThank you!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      <header
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '14px 36px' : '22px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(246, 240, 231, 0.92)' : 'rgba(26, 20, 16, 0.25)',
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid rgba(176, 138, 74, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: scrolled ? '0 10px 30px rgba(46, 37, 31, 0.08)' : 'none'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <img
            src="/logo.png"
            alt="Aiyappa Textiles Logo"
            style={{
              height: scrolled ? '36px' : '42px',
              width: 'auto',
              filter: scrolled ? 'none' : 'brightness(1.15) drop-shadow(0 2px 10px rgba(0,0,0,0.5))',
              transition: 'all 0.3s ease'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          <a
            href="#hero"
            className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-hero'}`}
          >
            Showroom
          </a>
          <a
            href="#cinematic"
            className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-hero'}`}
          >
            Our Story
          </a>
          <a
            href="#collections"
            className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-hero'}`}
          >
            Collections
          </a>
          <a
            href="#products"
            className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-hero'}`}
          >
            Selection
          </a>

          <button
            onClick={openGeneralWhatsApp}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1F5A3A',
              color: '#FFFFFF',
              padding: '10px 22px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(31, 90, 58, 0.35)',
              transition: 'all 0.3s ease'
            }}
            className="hover-lift"
          >
            <MessageCircle size={15} fill="currentColor" color="#25D366" />
            <span>WhatsApp Shop</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: scrolled ? '#30261F' : '#FFFFFF',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(247, 243, 235, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            padding: '24px'
          }}
        >
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#30261F', textDecoration: 'none' }}
          >
            Showroom
          </a>
          <a
            href="#cinematic"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#30261F', textDecoration: 'none' }}
          >
            Our Story
          </a>
          <a
            href="#collections"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#30261F', textDecoration: 'none' }}
          >
            Collections
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#30261F', textDecoration: 'none' }}
          >
            Products
          </a>
          <a
            href="#whatsapp-shopping"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#30261F', textDecoration: 'none' }}
          >
            WhatsApp Shop
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openGeneralWhatsApp();
            }}
            className="btn-whatsapp"
            style={{ marginTop: '16px' }}
          >
            <MessageCircle size={18} fill="currentColor" color="#25D366" />
            <span>CHAT ON WHATSAPP</span>
          </button>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s ease;
        }
        .nav-link-hero {
          color: rgba(255, 253, 249, 0.92);
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .nav-link-scrolled {
          color: var(--color-brown-mid);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--color-gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: var(--color-gold-light);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(31, 90, 58, 0.4) !important;
        }

        @media (max-width: 868px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

