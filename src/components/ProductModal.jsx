import React, { useState, useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../config';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  // ─────────────────────────────────────────────
  // SIZE & COLOR STATE
  // ─────────────────────────────────────────────

  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0
      ? product.colors[0].name
      : 'Default'
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0
      ? product.sizes[0]
      : 'One Size'
  );

  const [customSize, setCustomSize] = useState('');
  const [customColor, setCustomColor] = useState('');

  const [isOtherSize, setIsOtherSize] = useState(false);
  const [isOtherColor, setIsOtherColor] = useState(false);

  // ─────────────────────────────────────────────
  // CUSTOMER DETAILS
  // ─────────────────────────────────────────────

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [message, setMessage] = useState('');

  const modalRef = useRef(null);

  // ─────────────────────────────────────────────
  // ESC TO CLOSE
  // ─────────────────────────────────────────────

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  // ─────────────────────────────────────────────
  // SIZE SELECT
  // ─────────────────────────────────────────────

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setIsOtherSize(false);
    setCustomSize('');
  };

  // ─────────────────────────────────────────────
  // COLOR SELECT
  // ─────────────────────────────────────────────

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOtherColor(false);
    setCustomColor('');
  };

  // ─────────────────────────────────────────────
  // SEND WHATSAPP
  // ─────────────────────────────────────────────

  const handleSendWhatsApp = () => {
    const finalSize = isOtherSize
      ? customSize.trim() || 'Other'
      : selectedSize;

    const finalColor = isOtherColor
      ? customColor.trim() || 'Other'
      : selectedColor;

    let msg = `Hello Aiyappa Textiles,

I am interested in this product:

*Product:* ${product.name}
*Category:* ${product.collection.charAt(0).toUpperCase() +
      product.collection.slice(1)
      }'s Collection

*Size:* ${finalSize}
*Color:* ${finalColor}`;

    if (customerName) {
      msg += `

*Name:* ${customerName}`;
    }

    if (customerPhone) {
      msg += `
*Phone:* ${customerPhone}`;
    }

    if (message) {
      msg += `

*Message:* ${message}`;
    }

    msg += `

Please share the price, availability and further details.

Thank you.`;

    const encoded = encodeURIComponent(msg);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
      '_blank'
    );
  };

  // ─────────────────────────────────────────────
  // COMMON SIZE BUTTON STYLE
  // ─────────────────────────────────────────────

  const optionButtonStyle = (active) => ({
    minWidth: '46px',
    height: '40px',
    padding: '0 12px',
    borderRadius: '10px',
    border: active
      ? '1.5px solid var(--color-green)'
      : '1.5px solid rgba(176, 138, 74, 0.25)',
    backgroundColor: active
      ? 'var(--color-green)'
      : '#FFFFFF',
    color: active
      ? '#FFFFFF'
      : 'var(--color-brown)',
    fontSize: '0.83rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px'
  });

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Product details for ${product.name}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(30, 22, 16, 0.62)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease forwards',
        overflow: 'hidden'
      }}
    >
      {/* ═══════════════════════════════════════════════
          MODAL CARD
          ═══════════════════════════════════════════════ */}

      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="modal-grid"
        style={{
          backgroundColor: '#FDFAF5',
          borderRadius: '28px',
          maxWidth: '900px',
          width: '100%',
          height: '92vh',
          maxHeight: '92vh',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          border: '1px solid rgba(176, 138, 74, 0.25)',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns:
            'minmax(280px, 1fr) minmax(320px, 1.2fr)',
          animation:
            'popIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          outline: 'none'
        }}
      >
        {/* ═══════════════════════════════════════════════
            CLOSE BUTTON
            ═══════════════════════════════════════════════ */}

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="modal-close-btn"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 50,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(239, 231, 218, 0.9)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-brown)',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          <X size={19} />
        </button>

        {/* ═══════════════════════════════════════════════
            IMAGE PANEL
            ═══════════════════════════════════════════════ */}

        <div
          className="modal-img-panel"
          style={{
            backgroundColor: 'var(--bg-cream)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '28px 0 0 28px',
            height: '100%',
            minHeight: 0,
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}
        >
          {/* Product Image */}

          <div
            style={{
              width: '100%',
              aspectRatio: '4/5',
              maxHeight: 'calc(100% - 60px)',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow:
                '0 10px 30px rgba(46, 37, 31, 0.12)',
              backgroundColor: '#FFFFFF',
              flexShrink: 0
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Color Preview Strip */}

          {/*  {product.colors && product.colors.length > 0 && (
            <div
              className="color-preview-strip"
              style={{
                display: 'flex',
                gap: '8px',
                marginTop: '18px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {product.colors.map((c) => (
                <div
                  key={c.name}
                  title={c.name}
                  onClick={() => handleColorSelect(c.name)}
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: c.hex,
                    border:
                      selectedColor === c.name &&
                        !isOtherColor
                        ? '2px solid var(--color-green)'
                        : '2px solid rgba(0,0,0,0.12)',
                    boxShadow:
                      selectedColor === c.name &&
                        !isOtherColor
                        ? '0 0 0 3px rgba(31, 90, 58, 0.18)'
                        : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
          )} */}
        </div>

        {/* ═══════════════════════════════════════════════
            RIGHT — DETAILS
            ═══════════════════════════════════════════════ */}

        <div
          className="modal-details-panel"
          style={{
            padding: '36px 32px',
            height: '100%',
            minHeight: 0,
            boxSizing: 'border-box',
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin'
          }}
        >
          {/* Category */}

          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            {product.collection.toUpperCase()} ·{' '}
            {(
              product.label ||
              product.subcategory ||
              ''
            ).toUpperCase()}
          </span>

          {/* Product Name */}

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.85rem',
              color: 'var(--color-brown)',
              lineHeight: 1.2,
              marginBottom: '10px',
              fontWeight: 700
            }}
          >
            {product.name}
          </h2>

          {/* Price */}

          <div
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-green)',
              fontStyle: 'italic',
              marginBottom: '14px'
            }}
          >
            {product.price}
          </div>

          {/* Description */}

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-brown-light)',
              lineHeight: 1.65,
              marginBottom: '24px',
              borderBottom:
                '1px solid rgba(231, 216, 198, 0.8)',
              paddingBottom: '20px'
            }}
          >
            {product.description}
          </p>

          {/* ═══════════════════════════════════════════════
              SIZE
              ═══════════════════════════════════════════════ */}

          {product.sizes && product.sizes.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-brown)',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                Size:{' '}
                <span
                  style={{
                    color: 'var(--color-gold)',
                    fontWeight: 600
                  }}
                >
                  {isOtherSize
                    ? customSize || 'Other'
                    : selectedSize}
                </span>
              </label>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}
              >
                {product.sizes.map((size) => {
                  const active =
                    selectedSize === size && !isOtherSize;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleSizeSelect(size)}
                      style={optionButtonStyle(active)}
                    >
                      {active && <Check size={12} />}
                      {size}
                    </button>
                  );
                })}

                {/* OTHER */}

                <button
                  type="button"
                  onClick={() => {
                    setIsOtherSize(true);
                    setSelectedSize('Other');
                  }}
                  style={optionButtonStyle(isOtherSize)}
                >
                  {isOtherSize && <Check size={12} />}
                  Other
                </button>
              </div>

              {/* CUSTOM SIZE */}

              {isOtherSize && (
                <div
                  style={{
                    marginTop: '12px',
                    animation: 'fadeIn 0.2s ease'
                  }}
                >
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Enter your size"
                    value={customSize}
                    onChange={(e) =>
                      setCustomSize(e.target.value)
                    }
                    autoFocus
                    aria-label="Custom size"
                  />
                </div>
              )}
            </div>
          )}

          {/* ═══════════════════════════════════════════════
              COLOR
              ═══════════════════════════════════════════════ */}

          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-brown)',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                Color:{' '}
                <span
                  style={{
                    color: 'var(--color-gold)',
                    fontWeight: 600
                  }}
                >
                  {isOtherColor
                    ? customColor || 'Other'
                    : selectedColor}
                </span>
              </label>

              <div
                style={{
                  display: 'flex',
                  gap: '9px',
                  flexWrap: 'wrap'
                }}
              >
                {product.colors.map((color) => {
                  const active =
                    selectedColor === color.name &&
                    !isOtherColor;

                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() =>
                        handleColorSelect(color.name)
                      }
                      title={color.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        padding: '7px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: active
                          ? '1.5px solid var(--color-green)'
                          : '1.5px solid rgba(176, 138, 74, 0.22)',
                        backgroundColor: active
                          ? 'rgba(31, 90, 58, 0.07)'
                          : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          backgroundColor: color.hex,
                          border:
                            '1px solid rgba(0,0,0,0.13)',
                          flexShrink: 0
                        }}
                      />

                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: active ? 700 : 500,
                          color: active
                            ? 'var(--color-green)'
                            : 'var(--color-brown-mid)'
                        }}
                      >
                        {color.name}
                      </span>
                    </button>
                  );
                })}

                {/* OTHER COLOR */}

                <button
                  type="button"
                  onClick={() => {
                    setIsOtherColor(true);
                    setSelectedColor('Other');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                    padding: '7px 14px',
                    minHeight: '34px',
                    borderRadius: 'var(--radius-full)',
                    border: isOtherColor
                      ? '1.5px solid var(--color-green)'
                      : '1.5px solid rgba(176, 138, 74, 0.22)',
                    backgroundColor: isOtherColor
                      ? 'rgba(31, 90, 58, 0.07)'
                      : '#FFFFFF',
                    color: isOtherColor
                      ? 'var(--color-green)'
                      : 'var(--color-brown-mid)',
                    fontSize: '0.78rem',
                    fontWeight: isOtherColor ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isOtherColor && <Check size={12} />}
                  Other
                </button>
              </div>

              {/* CUSTOM COLOR */}

              {isOtherColor && (
                <div
                  style={{
                    marginTop: '12px',
                    animation: 'fadeIn 0.2s ease'
                  }}
                >
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Enter your color"
                    value={customColor}
                    onChange={(e) =>
                      setCustomColor(e.target.value)
                    }
                    aria-label="Custom color"
                  />
                </div>
              )}
            </div>
          )}

          {/* ═══════════════════════════════════════════════
              CUSTOMER INFORMATION
              ═══════════════════════════════════════════════ */}

          <div
            style={{
              backgroundColor: 'rgba(231, 216, 198, 0.3)',
              padding: '18px',
              borderRadius: '16px',
              marginBottom: '22px'
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: 'var(--color-brown-light)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              Customer Information (Optional)
            </span>

            <div
              className="customer-input-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginBottom: '10px'
              }}
            >
              <input
                type="text"
                className="modal-input"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                aria-label="Customer name"
              />

              <input
                type="tel"
                className="modal-input"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) =>
                  setCustomerPhone(e.target.value)
                }
                aria-label="Phone number"
              />
            </div>

            <textarea
              className="modal-input"
              placeholder="Optional message or special request..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              rows={2}
              aria-label="Optional message"
              style={{
                resize: 'vertical',
                minHeight: '60px'
              }}
            />
          </div>

          {/* ═══════════════════════════════════════════════
              WHATSAPP BUTTON
              ═══════════════════════════════════════════════ */}

          <button
            onClick={handleSendWhatsApp}
            className="btn-whatsapp"
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '0.88rem'
            }}
          >
            <FaWhatsapp
              size={20}
              fill="currentColor"
              color="#25D366"
            />
            ENQUIRE ON WHATSAPP
          </button>

          {/* Bottom spacing */}

          <div style={{ height: '20px' }} />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          STYLES
          ═══════════════════════════════════════════════ */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(20px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn:hover {
          background-color: var(--color-green) !important;
          color: #FFFFFF !important;
        }

        /* ─────────────────────────────────────────────
           INPUT
           ───────────────────────────────────────────── */

        .modal-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(176, 138, 74, 0.28);
          border-radius: 10px;
          padding: 11px 12px;
          background: #FFFFFF;
          color: var(--color-brown);
          font-family: inherit;
          font-size: 0.84rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .modal-input:focus {
          border-color: var(--color-green);
          box-shadow:
            0 0 0 3px rgba(31, 90, 58, 0.08);
        }

        .modal-input::placeholder {
          color: rgba(46, 37, 31, 0.45);
        }

        /* ─────────────────────────────────────────────
           DESKTOP DETAILS SCROLLBAR
           ───────────────────────────────────────────── */

        .modal-details-panel::-webkit-scrollbar {
          width: 6px;
        }

        .modal-details-panel::-webkit-scrollbar-track {
          background: transparent;
        }

        .modal-details-panel::-webkit-scrollbar-thumb {
          background: rgba(176, 138, 74, 0.35);
          border-radius: 20px;
        }

        .modal-details-panel::-webkit-scrollbar-thumb:hover {
          background: rgba(176, 138, 74, 0.55);
        }

        /* ─────────────────────────────────────────────
           TABLET / MOBILE
           SINGLE SCROLL FOR EVERYTHING
           ───────────────────────────────────────────── */

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr !important;

            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            top: auto !important;

            width: 100% !important;
            height: 94vh !important;
            max-height: 94vh !important;

            border-radius: 24px 24px 0 0 !important;

            /*
             * IMPORTANT:
             * The complete modal is the only
             * scroll container on mobile.
             */
            display: block !important;

            overflow-y: auto !important;
            overflow-x: hidden !important;

            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
          }

          /* ─────────────────────────────────────────
             IMAGE SECTION
             ───────────────────────────────────────── */

          .modal-img-panel {
            height: auto !important;
            max-height: none !important;
            min-height: 0 !important;

            padding: 20px !important;

            border-radius: 24px 24px 0 0 !important;

            overflow: visible !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /*
           * ONLY the product image container
           * receives the 4/5 aspect ratio.
           */
          .modal-img-panel > div:first-child {
            width: 100% !important;
            max-width: 280px !important;

            aspect-ratio: 4 / 5 !important;

            max-height: none !important;

            flex-shrink: 0 !important;
          }

          /*
           * Color preview must NOT receive
           * the image aspect ratio.
           */
          .modal-img-panel > div:last-child {
            width: auto !important;
            max-width: 100% !important;

            height: auto !important;
            max-height: none !important;

            aspect-ratio: auto !important;

            margin-top: 18px !important;

            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;

            flex-shrink: 0 !important;
          }

          /* ─────────────────────────────────────────
             DETAILS
             No independent scrolling on mobile
             ───────────────────────────────────────── */

          .modal-details-panel {
            height: auto !important;
            min-height: 0 !important;

            overflow: visible !important;

            padding: 28px 22px !important;

            -webkit-overflow-scrolling: auto !important;
          }

          /* Customer inputs stack vertically */
          .customer-input-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* ─────────────────────────────────────────────
           SMALL MOBILE
           ───────────────────────────────────────────── */

        @media (max-width: 400px) {
          .modal-grid {
            height: 95vh !important;
            max-height: 95vh !important;
          }

          .modal-img-panel {
            padding: 16px !important;
          }

          /* ONLY image gets the smaller max width */
          .modal-img-panel > div:first-child {
            max-width: 240px !important;
          }

          .modal-details-panel {
            padding: 24px 18px !important;
          }
        }

        /* ─────────────────────────────────────────────
           MOBILE INPUT FONT
           ───────────────────────────────────────────── */

        @media (max-width: 500px) {
          .modal-grid input,
          .modal-grid textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}