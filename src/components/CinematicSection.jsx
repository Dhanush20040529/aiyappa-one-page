import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import HeroSequence from './HeroSequence';
import { WHATSAPP_NUMBER } from '../config';

gsap.registerPlugin(ScrollTrigger);

const FADE_BUFFER = 0.05;

const SCENES = [
  {
    key: 'scene-1',
    label: 'AIYAPPA TEXTILES — DIGITAL SHOWROOM',
    headingMain: 'The Art of',
    headingAccent: 'Handwoven Silk',
    desc: 'Crafted for generations. Step into a cinematic journey through timeless Indian textiles.',
    range: [0.0, 0.20],
    position: 'top-left',
    cta: false
  },
  {
    key: 'scene-2',
    label: 'HERITAGE WEAVE',
    headingMain: 'Woven With',
    headingAccent: 'Sacred Tradition',
    desc: 'From rich Kanchipuram borders to delicate zari threads, every weave tells a story of timeless grace.',
    range: [0.20, 0.42],
    position: 'bottom-right',
    cta: false
  },
  {
    key: 'scene-3',
    label: 'TACTILE ELEGANCE',
    headingMain: 'Intricate Silk &',
    headingAccent: 'Embroidered Detail',
    desc: 'Feel the exquisite drape of authentic pure silk, meticulous craftsmanship, and gold zari embroidery.',
    range: [0.42, 0.65],
    position: 'bottom-left',
    cta: false
  },
  {
    key: 'scene-4',
    label: 'THE MASTERPIECE',
    headingMain: 'Curated Saree',
    headingAccent: 'Collections',
    desc: 'Designed to bring elegance to grand celebrations, weddings, and life’s most cherished moments.',
    range: [0.65, 0.85],
    position: 'top-right',
    cta: false
  },
  {
    key: 'scene-5',
    label: 'EDITORIAL CAMPAIGN',
    headingMain: 'Your Story',
    headingAccent: 'Begins Here',
    desc: 'Discover our exclusive collections or connect directly with our showroom experts on WhatsApp.',
    range: [0.85, 1.0],
    position: 'bottom-center',
    cta: true
  }
];

const lerp = (a, b, t) => a + (b - a) * t;

export default function CinematicSection({ preloadedImages }) {
  const wrapRef = useRef(null);
  const canvasApiRef = useRef(null);
  const currentFrameRef = useRef(-1);
  const blockRefs = useRef([]);
  const cueRef = useRef(null);

  const totalFrames = preloadedImages?.length || 300;

  const handleCanvasReady = useCallback((api) => {
    canvasApiRef.current = api;
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Aiyappa Textiles,\n\nI was exploring your cinematic digital showroom and would love to shop via WhatsApp!\n\nPlease share your latest saree & ethnic collections.\n\nThank you."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const scrollToCollections = (e) => {
    e.preventDefault();
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!preloadedImages || preloadedImages.length === 0) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const updateStoryAndCamera = (progress) => {
      // Calculate camera state for 60 FPS simulated camera motion
      let scale = 1.0;
      let panX = 0;
      let panY = 0;
      let focalY = 0.42;

      if (progress <= 0.20) {
        // Scene 1: Camera push scale 1.08 -> 1.15
        const t = progress / 0.20;
        scale = lerp(1.08, 1.15, t);
        panX = lerp(0, -0.015, t);
      } else if (progress <= 0.42) {
        // Scene 2: Smooth transition & subtle pan
        const t = (progress - 0.20) / 0.22;
        scale = lerp(1.15, 1.10, t);
        panX = lerp(-0.015, 0.012, t);
      } else if (progress <= 0.65) {
        // Scene 3: Zoom into fabric texture
        const t = (progress - 0.42) / 0.23;
        scale = lerp(1.10, 1.22, t);
        panY = lerp(0, -0.02, t);
        focalY = lerp(0.42, 0.38, t);
      } else if (progress <= 0.85) {
        // Scene 4: Reveal full product drape
        const t = (progress - 0.65) / 0.20;
        scale = lerp(1.22, 1.12, t);
        panX = lerp(0.012, -0.01, t);
      } else {
        // Scene 5: Campaign finish framing
        const t = (progress - 0.85) / 0.15;
        scale = lerp(1.12, 1.08, t);
        panX = 0;
        panY = 0;
      }

      // Update text block opacities & translates
      SCENES.forEach((scene, i) => {
        const el = blockRefs.current[i];
        if (!el) return;

        const start = scene.range[0];
        const end = scene.range[1];
        const inStart = Math.max(0, start - FADE_BUFFER);
        const outEnd = Math.min(1.0, end + FADE_BUFFER);

        let op = 0;
        let y = 16;

        if (progress < start) {
          if (progress > inStart) {
            const t = (progress - inStart) / FADE_BUFFER;
            op = Math.min(1, Math.max(0, t));
            y = lerp(28, 0, op);
          }
        } else if (progress > end) {
          if (progress < outEnd) {
            const t = (progress - end) / FADE_BUFFER;
            op = Math.min(1, Math.max(0, 1 - t));
            y = lerp(0, -22, Math.min(1, Math.max(0, t)));
          }
        } else {
          op = 1;
          y = 0;
        }

        el.style.opacity = op.toFixed(3);
        el.style.transform = `translateY(${y.toFixed(2)}px)`;
        el.style.pointerEvents = op > 0.5 ? 'auto' : 'none';
      });

      // Scroll cue visibility
      if (cueRef.current) {
        cueRef.current.style.opacity = progress < 0.12 ? '0.85' : '0';
      }

      return { scale, panX, panY, focalY };
    };

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const frame = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progress * totalFrames))
        );

        const camera = updateStoryAndCamera(progress);

        if (frame !== currentFrameRef.current || camera) {
          currentFrameRef.current = frame;
          if (canvasApiRef.current) {
            requestAnimationFrame(() => canvasApiRef.current.draw(frame, camera));
          }
        }
      }
    });

    st.refresh();
    const initialCam = updateStoryAndCamera(0);
    if (canvasApiRef.current) canvasApiRef.current.draw(0, initialCam);

    return () => st.kill();
  }, [preloadedImages, totalFrames]);

  return (
    <section ref={wrapRef} id="cinematic" className="cinematic-section">
      <div className="sticky-stage">
        {/* FULL-VIEWPORT 100VW x 100SVH CANVAS LAYER */}
        <div className="cinematic-frame">
          <HeroSequence
            preloadedImages={preloadedImages}
            onCanvasReady={handleCanvasReady}
          />
        </div>

        {/* ELEGANT GRADIENT SCRIM (NO BOX CARDS — FULL CINEMATIC READABILITY) */}
        <div className="story-scrim" />

        {/* EDITORIAL TEXT OVERLAY */}
        <div className="story-overlay">
          <div className="story-overlay-inner">
            {SCENES.map((scene, i) => (
              <div
                key={scene.key}
                className={`story-overlay-block pos-${scene.position}`}
                ref={(el) => { blockRefs.current[i] = el; }}
              >
                <div className="story-eyebrow-tag">
                  <Sparkles size={12} className="tag-sparkle" />
                  <span>{scene.label}</span>
                </div>

                <h1 className="story-heading">
                  {scene.headingMain}
                  <br />
                  <span className="heading-accent">{scene.headingAccent}</span>
                </h1>

                <p className="story-desc">{scene.desc}</p>

                {scene.cta && (
                  <div className="story-cta">
                    <button onClick={openWhatsApp} className="btn-whatsapp hero-cta-btn">
                      <FaWhatsapp size={18} fill="currentColor" color="#25D366" />
                      ENQUIRE ON WHATSAPP
                    </button>
                    <a
                      href="#collections"
                      onClick={scrollToCollections}
                      className="btn-secondary btn-story-secondary hero-cta-btn"
                    >
                      EXPLORE COLLECTIONS
                      <ArrowDown size={16} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SCROLL CUE */}
        <div ref={cueRef} className="cinematic-scroll-cue">
          <span>SCROLL TO EXPLORE SHOWROOM</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section >
  );
}