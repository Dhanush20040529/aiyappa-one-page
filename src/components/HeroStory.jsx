import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function HeroStory({ preloadedImages }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(0);
  const [activeStage, setActiveStage] = useState(0); // 0: Intro, 1: Discovery, 2: Collection, 3: Selection, 4: Purchase Intent

  const totalFrames = 240;

  // Render canvas frame maintaining aspect ratio (object-fit: contain)
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = preloadedImages ? preloadedImages[frameIndex] : null;
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Clear background with warm showroom cream color
    ctx.fillStyle = '#F5EFE5';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Calculate aspect ratio containment
    const imgWidth = img.naturalWidth || img.width || 1920;
    const imgHeight = img.naturalHeight || img.height || 1080;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawH = canvasHeight;
      drawW = canvasHeight * imgRatio;
      drawX = (canvasWidth - drawW) / 2;
      drawY = 0;
    } else {
      // Canvas is taller than image
      drawW = canvasWidth;
      drawH = canvasWidth / imgRatio;
      drawX = 0;
      drawY = (canvasHeight - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  // Handle Resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    drawFrame(currentFrameRef.current);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    const container = containerRef.current;
    if (!container) return;

    const scrollTriggerObj = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      onUpdate: (self) => {
        const progress = self.progress; // 0 -> 1
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progress * totalFrames))
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          requestAnimationFrame(() => drawFrame(frameIndex));
        }

        // Determine story stage
        // Frame 0-20: 0
        // Frame 20-70: 1
        // Frame 70-130: 2
        // Frame 130-190: 3
        // Frame 190-240: 4
        if (frameIndex < 20) {
          setActiveStage(0);
        } else if (frameIndex < 70) {
          setActiveStage(1);
        } else if (frameIndex < 130) {
          setActiveStage(2);
        } else if (frameIndex < 190) {
          setActiveStage(3);
        } else {
          setActiveStage(4);
        }
      }
    });

    // Initial draw
    drawFrame(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      scrollTriggerObj.kill();
    };
  }, [preloadedImages]);

  const openWhatsAppEnquiry = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI was exploring your interactive showroom and am ready to shop via WhatsApp!\n\nPlease guide me through your latest collection.\n\nThank you."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div
      ref={containerRef}
      className="hero-story"
      id="hero"
      style={{
        height: '400vh',
        position: 'relative',
        backgroundColor: '#F5EFE5'
      }}
    >
      {/* Sticky Viewport Container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* HTML5 Canvas Background Renderer */}
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'contain'
          }}
        />

        {/* Ambient Gradient Overlays for Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(245, 239, 229, 0.25) 0%, rgba(245, 239, 229, 0.75) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* STAGE 0: SHOWROOM INTRODUCTION (Frames 001 - 020) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            opacity: activeStage === 0 ? 1 : 0,
            transform: activeStage === 0 ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            pointerEvents: activeStage === 0 ? 'auto' : 'none',
            zIndex: 10
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(31, 90, 58, 0.08)',
              border: '1px solid rgba(31, 90, 58, 0.2)',
              color: '#1F5A3A',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={14} />
            <span>DIGITAL SHOWROOM REFRESH</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              color: '#30261F',
              lineHeight: 1.1,
              marginBottom: '16px',
              fontWeight: 700
            }}
          >
            We'll Be <br />
            <span style={{ color: '#1F5A3A', fontStyle: 'italic' }}>Back Soon!</span>
          </h1>

          <p
            style={{
              maxWidth: '580px',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#4A423B',
              lineHeight: 1.6,
              marginBottom: '28px'
            }}
          >
            Our website is currently undergoing a little maintenance to bring you a better online shopping experience.
          </p>

          <div
            style={{
              backgroundColor: 'rgba(252, 250, 246, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: '14px 28px',
              borderRadius: '16px',
              border: '1px solid rgba(184, 155, 94, 0.3)',
              color: '#1F5A3A',
              fontWeight: 600,
              fontSize: '0.9rem',
              maxWidth: '520px',
              boxShadow: '0 8px 24px rgba(48, 38, 31, 0.06)'
            }}
          >
            Don't worry — you can still continue shopping with Aiyappa Textiles through WhatsApp.
          </div>
        </div>

        {/* STAGE 1: CUSTOMER DISCOVERY (Frames 020 - 070) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '8%',
            maxWidth: '460px',
            opacity: activeStage === 1 ? 1 : 0,
            transform: activeStage === 1 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            pointerEvents: activeStage === 1 ? 'auto' : 'none',
            zIndex: 10
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(252, 250, 246, 0.9)',
              backdropFilter: 'blur(14px)',
              padding: '28px',
              borderRadius: '20px',
              borderLeft: '4px solid #B89B5E',
              boxShadow: '0 15px 35px rgba(48, 38, 31, 0.08)'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                color: '#30261F',
                lineHeight: 1.3,
                marginBottom: '8px',
                fontWeight: 600
              }}
            >
              "Something beautiful is worth waiting for."
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7E746A' }}>
              While we refresh our online store, discover something beautiful in our showroom.
            </p>
          </div>
        </div>

        {/* STAGE 2: COLLECTION DISCOVERY (Frames 070 - 130) */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '8%',
            maxWidth: '440px',
            opacity: activeStage === 2 ? 1 : 0,
            transform: activeStage === 2 ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            pointerEvents: activeStage === 2 ? 'auto' : 'none',
            zIndex: 10
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(252, 250, 246, 0.92)',
              backdropFilter: 'blur(16px)',
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid rgba(184, 155, 94, 0.25)',
              boxShadow: '0 20px 40px rgba(48, 38, 31, 0.1)'
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#B89B5E',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              COLLECTION DISCOVERY
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                color: '#30261F',
                lineHeight: 1.2,
                marginBottom: '12px',
                fontWeight: 700
              }}
            >
              Discover Our Collections
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A423B', lineHeight: 1.6 }}>
              Traditional elegance, contemporary style. From timeless Kanchipuram silk sarees to handcrafted ethnic wear.
            </p>
          </div>
        </div>

        {/* STAGE 3: PRODUCT SELECTION (Frames 130 - 190) */}
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            maxWidth: '460px',
            opacity: activeStage === 3 ? 1 : 0,
            transform: activeStage === 3 ? 'translateY(0)' : 'translateY(25px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            pointerEvents: activeStage === 3 ? 'auto' : 'none',
            zIndex: 10
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(252, 250, 246, 0.92)',
              backdropFilter: 'blur(16px)',
              padding: '28px',
              borderRadius: '20px',
              border: '1px solid rgba(31, 90, 58, 0.2)',
              boxShadow: '0 15px 35px rgba(48, 38, 31, 0.1)'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: '#1F5A3A',
                marginBottom: '8px',
                fontWeight: 700
              }}
            >
              Find Something You'll Love.
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A423B', marginBottom: '16px' }}>
              Explore Aiyappa Textiles directly through WhatsApp with personal shopping assistance.
            </p>
          </div>
        </div>

        {/* STAGE 4: PURCHASE INTENT / FINAL FRAME (Frames 190 - 240) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: '80px',
            paddingLeft: '24px',
            paddingRight: '24px',
            textAlign: 'center',
            opacity: activeStage === 4 ? 1 : 0,
            transform: activeStage === 4 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: activeStage === 4 ? 'auto' : 'none',
            zIndex: 20
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(252, 250, 246, 0.95)',
              backdropFilter: 'blur(20px)',
              padding: '36px 44px',
              borderRadius: '28px',
              border: '1px solid rgba(184, 155, 94, 0.3)',
              boxShadow: '0 25px 60px rgba(48, 38, 31, 0.15)',
              maxWidth: '620px',
              width: '100%'
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: '#B89B5E',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px'
              }}
            >
              SHOP VIA WHATSAPP
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: '#30261F',
                lineHeight: 1.2,
                marginBottom: '12px',
                fontWeight: 700
              }}
            >
              Your next favourite piece is waiting.
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#4A423B',
                marginBottom: '28px'
              }}
            >
              Connect directly with our showroom experts for instant pricing, video calls, and order placement.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <button onClick={openWhatsAppEnquiry} className="btn-whatsapp">
                <FaWhatsapp size={20} fill="currentColor" color="#25D366" />
                <span>ENQUIRE ON WHATSAPP</span>
              </button>

              <a href="#collections" className="btn-secondary">
                <span>EXPLORE COLLECTIONS</span>
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator helper */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            opacity: activeStage < 4 ? 0.8 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              color: '#7E746A',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <div
            style={{
              width: '20px',
              height: '32px',
              border: '2px solid rgba(126, 116, 106, 0.4)',
              borderRadius: '12px',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '3px',
                height: '7px',
                backgroundColor: '#1F5A3A',
                borderRadius: '2px',
                position: 'absolute',
                top: '5px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'scrollPulse 1.8s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.2; transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
    </div>
  );
}
