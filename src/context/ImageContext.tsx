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
  { id: 'hero-saidi', src: '/assets/images/hero-saidi-bmw7.jpg', title: 'Saidi & BMW 7 Series Flagship', resolution: '5760 x 3840 (Master)', category: 'hero' },
  { id: 'event-keynote', src: '/assets/images/event-keynote-stage.jpg', title: 'Keynote & Stage Presentation', resolution: '9504 x 6336 (Master)', category: 'events' },
  { id: 'training-coaching', src: '/assets/images/training-coaching-car.jpg', title: 'In-Vehicle Coaching & Showroom', resolution: '6000 x 4000 (Master)', category: 'training' },
  { id: 'consulting-dealership', src: '/assets/images/consulting-dealership-1.jpg', title: 'Dealership & Retail Consulting', resolution: '6000 x 4000 (Master)', category: 'training' },
  { id: 'event-bmw-i8', src: '/assets/images/event-bmw-i8-delegation.jpg', title: 'BMW i8 Delegation Presentation', resolution: '2448 x 2448 (Master)', category: 'events' },
  { id: 'event-gims', src: '/assets/images/event-bmw-genius-gims.jpg', title: 'Geneva Motor Show (GIMS)', resolution: '5184 x 3456 (Master)', category: 'events' },
  { id: 'event-atmosphere', src: '/assets/images/event-atmosphere-wide.jpg', title: 'International Motor Show Atmosphere', resolution: '5472 x 3648 (Master)', category: 'events' },
  { id: 'event-bmw7-vip', src: '/assets/images/event-bmw7-vip.jpg', title: 'BMW 7 Series VIP Experience', resolution: '5568 x 3840 (Master)', category: 'events' },
  { id: 'event-vip-hospitality', src: '/assets/images/event-vip-hospitality.jpg', title: 'Luxury VIP Guest Hospitality', resolution: '4000 x 5000 (Master)', category: 'events' },
  { id: 'training-bmw-xm', src: '/assets/images/training-bmw-xm.jpg', title: 'BMW XM High-Performance Training', resolution: '6000 x 4000 (Master)', category: 'training' },
  { id: 'training-classroom', src: '/assets/images/training-classroom.jpg', title: 'Interactive Workshop & Classroom', resolution: '6000 x 4000 (Master)', category: 'training' },
  { id: 'training-group', src: '/assets/images/training-group.jpg', title: 'Group Training & Team Coaching', resolution: '6000 x 4000 (Master)', category: 'training' },
  { id: 'training-connecteddrive', src: '/assets/images/training-connecteddrive.jpg', title: 'ConnectedDrive Digital Innovations', resolution: '3264 x 2448 (Master)', category: 'training' },
  { id: 'training-product', src: '/assets/images/training-product.jpg', title: 'Product Genius Specialist Training', resolution: '6000 x 4000 (Master)', category: 'training' },
];

const DEFAULT_SELECTIONS: ImageSelectionMap = {
  hero: '/assets/images/hero-saidi-bmw7.jpg',
  about: '/assets/images/event-keynote-stage.jpg',
  pillar1: '/assets/images/training-coaching-car.jpg',
  pillar2: '/assets/images/consulting-dealership-1.jpg',
  pillar3: '/assets/images/event-bmw-i8-delegation.jpg',
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
      if (saved) {
        setImages(JSON.parse(saved));
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
