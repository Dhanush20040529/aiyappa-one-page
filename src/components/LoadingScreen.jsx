import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const totalFrames = 300;

  useEffect(() => {
    let loadedCount = 0;
    const imagesArray = new Array(totalFrames);

    const checkComplete = () => {
      loadedCount++;
      const currentPct = Math.min(100, Math.floor((loadedCount / totalFrames) * 100));
      setProgress(currentPct);

      if (loadedCount >= totalFrames) {
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete(imagesArray);
          }, 800);
        }, 300);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/hero/ezgif-frame-${frameNum}.jpg`;

      const index = i - 1;
      img.onload = () => {
        imagesArray[index] = img;
        checkComplete();
      };
      img.onerror = () => {
        // Fallback for missing frames so loading never hangs
        imagesArray[index] = img;
        checkComplete();
      };
    }
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#F5EFE5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        {/* Brand Logo */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/logo.png"
            alt="Aiyappa Textiles"
            style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              // Fallback logo text if png fails
              e.target.style.display = 'none';
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: '2.2rem',
            color: '#30261F',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '8px',
            fontWeight: 700
          }}
        >
          Aiyappa Textiles
        </h1>

        <p
          style={{
            fontSize: '0.9rem',
            color: '#7E746A',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '36px',
            fontWeight: 500
          }}
        >
          Preparing your experience...
        </p>

        {/* Thin Premium Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(184, 155, 94, 0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '16px',
            position: 'relative'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#B89B5E',
              transition: 'width 0.2s ease-out',
              boxShadow: '0 0 12px rgba(184, 155, 94, 0.6)'
            }}
          />
        </div>

        <div
          style={{
            fontSize: '0.85rem',
            fontFamily: 'monospace',
            color: '#B89B5E',
            fontWeight: 600,
            letterSpacing: '0.1em'
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
