'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ImageSelectionMap {
  hero: string;
  about: string;
  pillar1: string;
  pillar2: string;
  pillar3: string;
  [key: string]: string;
}

export interface LibraryImage {
  id: string;
  src: string;
  title: string;
  resolution: string;
  category: 'training' | 'events' | 'hero' | 'general';
}

export const ALL_LIBRARY_IMAGES: LibraryImage[] = [
  { id: 'prod-pres-1', src: '/assets/images/Product presentation 1.jpg', title: 'Product Presentation & Keynote', resolution: 'Master High-Res', category: 'hero' },
  { id: 'modaration', src: '/assets/images/Modaration.JPG', title: 'Stage Moderation & Keynote Presentation', resolution: 'Master High-Res', category: 'events' },
  { id: 'prod-train-1', src: '/assets/images/Product Training 1.JPG', title: 'Product & Technical Training I', resolution: 'Master High-Res', category: 'training' },
  { id: 'prod-train-2', src: '/assets/images/Product Training 2.JPG', title: 'Product & Technical Training II', resolution: 'Master High-Res', category: 'training' },
  { id: 'event-1', src: '/assets/images/Event 1.jpg', title: 'Automotive Event & Live Stage Presentation', resolution: 'Master High-Res', category: 'events' },
  { id: 'event-2', src: '/assets/images/Event 2.JPG', title: 'Vehicle Launch & Brand Activation', resolution: 'Master High-Res', category: 'events' },
  { id: 'event-3', src: '/assets/images/Event 3.JPG', title: 'Automotive Exhibition & Live Presentation', resolution: 'Master High-Res', category: 'events' },
  { id: 'event-4', src: '/assets/images/Event 4.jpeg', title: 'VIP Guest Activation & Event Experience', resolution: 'Master High-Res', category: 'events' },
  { id: 'event-5', src: '/assets/images/Event 5.jpg', title: 'Showroom Opening & Brand Experience', resolution: 'Master High-Res', category: 'events' },
  { id: 'event-6', src: '/assets/images/Event 6.jpg', title: 'International Motor Show Highlights', resolution: 'Master High-Res', category: 'events' },
  { id: 'concorso', src: '/assets/images/Concorso de eleganze.jpg', title: 'Concorso d\'Eleganza Villa d\'Este', resolution: 'Master High-Res', category: 'events' },
  { id: 'gims', src: '/assets/images/Exhibition Genva motor show.JPG', title: 'Geneva International Motor Show', resolution: 'Master High-Res', category: 'events' },
  { id: 'exhibition', src: '/assets/images/Exhibition.jpg', title: 'Exhibition & Brand Showcase', resolution: 'Master High-Res', category: 'events' },
  { id: 'iaa-munich', src: '/assets/images/IAA Munich 2026.JPEG', title: 'IAA Mobility Munich Exhibition', resolution: 'Master High-Res', category: 'events' },
  { id: 'modaratio', src: '/assets/images/Modaratio.JPG', title: 'Live Stage Moderation', resolution: 'Master High-Res', category: 'events' },
  { id: 'prod-pres-2', src: '/assets/images/Product Presentation 2.jpg', title: 'Flagship Product Presentation', resolution: 'Master High-Res', category: 'events' },
  { id: 'prod-pres-main', src: '/assets/images/Product presentation.JPG', title: 'Live Vehicle Presentation', resolution: 'Master High-Res', category: 'events' },
  { id: 'training-main', src: '/assets/images/training .JPG', title: 'Interactive Sales & Product Training', resolution: 'Master High-Res', category: 'training' },
  { id: 'training-6', src: '/assets/images/Training 6.JPG', title: 'Showroom & Retail Team Coaching', resolution: 'Master High-Res', category: 'training' },
  { id: 'vip-1', src: '/assets/images/VIP 1.JPG', title: 'VIP Delegation & Guest Hosting I', resolution: 'Master High-Res', category: 'events' },
  { id: 'vip-2', src: '/assets/images/VIP 2.JPG', title: 'VIP Delegation & Guest Hosting II', resolution: 'Master High-Res', category: 'events' },
  { id: 'vip-main', src: '/assets/images/vip.jpg', title: 'Exclusive VIP Hospitality Experience', resolution: 'Master High-Res', category: 'events' },
];

const DEFAULT_SELECTIONS: ImageSelectionMap = {
  hero: '/assets/images/Product presentation 1.jpg',
  about: '/assets/images/Modaration.JPG',
  pillar1: '/assets/images/Product Training 1.JPG',
  pillar2: '/assets/images/Product Training 2.JPG',
  pillar3: '/assets/images/Event 1.jpg',
};

interface ImageContextType {
  images: ImageSelectionMap;
  setImageForSection: (sectionKey: string, imageSrc: string) => void;
  resetToDefaults: () => void;
  isSelectorOpen: boolean;
  setIsSelectorOpen: (open: boolean) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImageSelectionMap>(DEFAULT_SELECTIONS);
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mprog_custom_images');
      if (saved && saved.trim()) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setImages(parsed);
        }
      }
    } catch {
      // fallback to default
    }
  }, []);

  const setImageForSection = (sectionKey: string, imageSrc: string) => {
    setImages((prev) => {
      const updated = { ...prev, [sectionKey]: imageSrc };
      try {
        localStorage.setItem('mprog_custom_images', JSON.stringify(updated));
      } catch {
        // ignore storage error
      }
      return updated;
    });
  };

  const resetToDefaults = () => {
    setImages(DEFAULT_SELECTIONS);
    try {
      localStorage.removeItem('mprog_custom_images');
    } catch {
      // ignore
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        setImageForSection,
        resetToDefaults,
        isSelectorOpen,
        setIsSelectorOpen,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
