import React, { useEffect, useRef, useCallback } from 'react';

export default function HeroSequence({ preloadedImages, onCanvasReady }) {
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(0);
  const currentCameraRef = useRef({ scale: 1.0, panX: 0, panY: 0, focalY: 0.42 });

  const drawFrame = useCallback((frameIndex, cameraState) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = preloadedImages?.[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const camera = cameraState || currentCameraRef.current;
    currentCameraRef.current = camera;

    const w = canvas.width;
    const h = canvas.height;

    // Fill background with warm dark textile background tone during loading
    ctx.fillStyle = '#1A1410';
    ctx.fillRect(0, 0, w, h);

    const imgW = img.naturalWidth || 1920;
    const imgH = img.naturalHeight || 1080;
    const imgRatio = imgW / imgH;
    const canvasRatio = w / h;

    // OBJECT-FIT: COVER math for full 100vw x 100svh edge-to-edge coverage
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Screen is wider than image (Desktop / Widescreen) -> match width, fill height
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      const fY = camera.focalY !== undefined ? camera.focalY : 0.42;
      drawY = (h - drawH) * fY;
    } else {
      // Screen is taller than image (Mobile / Tablet portrait) -> match height, fill width
      drawH = h;
      drawW = h * imgRatio;
      drawX = (w - drawW) * 0.5;
      drawY = 0;
    }

    // Apply smooth camera movement (Scale & Pan) with safety margin to prevent edge gaps
    const rawScale = camera.scale || 1.06;
    const panXVal = camera.panX || 0;
    const panYVal = camera.panY || 0;

    // Guarantee scale covers any pan offset so no background or cream gap is ever visible at edges
    const minScaleForPan = 1.0 + 2.4 * Math.max(Math.abs(panXVal), Math.abs(panYVal)) + 0.06;
    const scale = Math.max(rawScale, minScaleForPan);

    const panX = panXVal * w;
    const panY = panYVal * h;

    ctx.save();
    ctx.translate(w / 2 + panX, h / 2 + panY);
    ctx.scale(scale, scale);
    ctx.translate(-w / 2, -h / 2);

    // Draw the product image full-bleed
    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    ctx.restore();
  }, [preloadedImages]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    drawFrame(currentFrameRef.current, currentCameraRef.current);
  }, [drawFrame]);

  useEffect(() => {
    handleResize();
    const api = {
      draw: (i, camera) => {
        currentFrameRef.current = i;
        if (camera) currentCameraRef.current = camera;
        drawFrame(i, camera);
      }
    };
    if (onCanvasReady) onCanvasReady(api);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, onCanvasReady, drawFrame]);

  // Redraw once images become available
  useEffect(() => {
    if (preloadedImages && preloadedImages.length > 0) {
      handleResize();
      drawFrame(currentFrameRef.current, currentCameraRef.current);
    }
  }, [preloadedImages, handleResize, drawFrame]);

  return (
    <div
      className="cinematic-canvas-stage"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1A1410'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}

