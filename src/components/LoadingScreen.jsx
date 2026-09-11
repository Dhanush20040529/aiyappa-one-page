import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const totalFrames = 300;

  useEffect(() => {
    let loadedCount = 0;
    const imagesArray = new Array(totalFrames);
    let fadeTimer;
    let completeTimer;

    const checkComplete = () => {
      loadedCount++;

      if (loadedCount >= totalFrames) {
        completeTimer = setTimeout(() => {
          setIsFadingOut(true);

          fadeTimer = setTimeout(() => {
            onComplete(imagesArray);
          }, 800);
        }, 300);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      const index = i - 1;

      img.src = `/hero/ezgif-frame-${frameNum}.webp`;

      img.onload = () => {
        imagesArray[index] = img;
        checkComplete();
      };

      img.onerror = () => {
        imagesArray[index] = img;
        checkComplete();
      };
    }

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#F5EFE5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFadingOut ? 0 : 1,
        transition:
          'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: '2px solid rgba(184, 155, 94, 0.15)',
          borderTop: '2px solid #B89B5E',
          borderRight: '2px solid #B89B5E',
          animation: 'spin 0.9s linear infinite',
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}