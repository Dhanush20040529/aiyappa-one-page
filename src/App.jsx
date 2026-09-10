import React, { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinematicSection from './components/CinematicSection';
import CollectionSection from './components/CollectionSection';
import ProductSection from './components/ProductSection';
import ProductModal from './components/ProductModal';
import ShopWhatsApp from './components/ShopWhatsApp';
import ComingBack from './components/ComingBack';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLoadingComplete = useCallback((imagesArray) => {
    setPreloadedImages(imagesArray);
    setIsLoading(false);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-ivory)', minHeight: '100vh' }}>
      {/* 1. Elegant Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* 2. Sticky Navbar */}
      <Navbar />

      {/* 3. Maintenance Hero Section (Maintenance Content Only) */}
      <Hero />

      {/* 4. Full-Width Cinematic Textile Story Section */}
      <CinematicSection preloadedImages={preloadedImages} />

      {/* 5. Editorial Collection Cards */}
      <CollectionSection onSelectCategory={setSelectedCategory} />

      {/* 6. Filterable Product Grid */}
      <ProductSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenModal={setSelectedProduct}
      />

      {/* 7. Product Quick-View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* 8. WhatsApp Direct Shopping Banner */}
      <ShopWhatsApp />

      {/* 9. Coming Back Soon Section */}
      <ComingBack />

      {/* 10. Footer */}
      <Footer onSelectCategory={setSelectedCategory} />

      {/* 11. Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
