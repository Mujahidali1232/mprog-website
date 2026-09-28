'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { ImageProvider } from '@/context/ImageContext';
import { PictureSelectorModal } from '@/components/PictureSelector';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <ImageProvider>
        {children}
        <PictureSelectorModal />
      </ImageProvider>
    </LanguageProvider>
  );
};
