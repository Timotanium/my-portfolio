import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange,
  projectTitle = '',
}) {
  const touchStartRef = useRef(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || {};
  const imageUrl = currentItem.image || currentItem;
  const imageTitle = currentItem.title || `Image ${currentIndex + 1}`;

  const handlePrev = (e) => {
    e?.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  // Mobile swipe gestures
  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current || !e.changedTouches || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between items-center bg-black/92 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Full-size image preview"
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-6xl flex justify-between items-center z-10 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col text-left">
          {projectTitle && (
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
              {projectTitle}
            </span>
          )}
          <h4 className="text-white text-base sm:text-lg md:text-xl font-bold truncate max-w-[240px] sm:max-w-md md:max-w-xl">
            {imageTitle}
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs sm:text-sm font-bold text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-700/80">
            {currentIndex + 1} / {images.length}
          </span>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 hover:border-indigo-400 active:scale-95 transition-all focus:outline-none"
            aria-label="Close preview (Esc)"
            title="Close (Esc)"
          >
            <X className="size-5 sm:size-6" />
          </button>
        </div>
      </div>

      {/* Center Image Display Area */}
      <div
        className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-indigo-400 backdrop-blur-md shadow-2xl active:scale-95 transition-all focus:outline-none"
            aria-label="Previous image (Left arrow)"
            title="Previous (←)"
          >
            <ChevronLeft className="size-5 sm:size-7" />
          </button>
        )}

        {/* Main Image */}
        <div className="relative max-h-[70vh] sm:max-h-[75vh] max-w-full flex items-center justify-center">
          <img
            key={imageUrl}
            src={imageUrl}
            alt={imageTitle}
            className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-xl border-2 border-zinc-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-200"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-indigo-400 backdrop-blur-md shadow-2xl active:scale-95 transition-all focus:outline-none"
            aria-label="Next image (Right arrow)"
            title="Next (→)"
          >
            <ChevronRight className="size-5 sm:size-7" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Bar & Controls */}
      <div
        className="w-full max-w-6xl flex flex-col items-center gap-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-full py-1 px-2">
            {images.map((item, idx) => {
              const thumbUrl = item.image || item;
              const active = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => onIndexChange(idx)}
                  className={`relative flex-shrink-0 w-12 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all active:scale-95 focus:outline-none ${
                    active
                      ? 'border-indigo-500 scale-105 shadow-[0_0_12px_rgba(99,102,241,0.6)]'
                      : 'border-zinc-700 opacity-60 hover:opacity-100 hover:border-zinc-500'
                  }`}
                  aria-label={`Jump to image ${idx + 1}`}
                >
                  <img
                    src={thumbUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Navigation hint */}
        <p className="hidden sm:block text-xs text-zinc-500 tracking-wider">
          Use ← / → keys or swipe to navigate • Esc or click backdrop to close
        </p>
      </div>
    </div>
  );
}
