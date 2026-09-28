'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { GlobalReach } from '@/components/GlobalReach';
import { Certifications } from '@/components/Certifications';
import { References } from '@/components/References';
import { MediaGallery } from '@/components/MediaGallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080D0A] text-[#F5F6F4] font-sans">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About & Philosophy */}
        <About />

        {/* 3 Core Pillars: Training, Consulting, Events */}
        <Services />

        {/* 4-Step Process & Methodology */}
        <Process />

        {/* Global Reach (25+ Countries) */}
        <GlobalReach />

        {/* Certifications & Audited Excellence */}
        <Certifications />

        {/* References: Automotive, Hospitality, Motor Shows & VIPs */}
        <References />

        {/* Interactive Media Showcase & Videos */}
        <MediaGallery />

        {/* Consultation Inquiry & Contact */}
        <Contact />
      </main>

      {/* Corporate Luxury Footer */}
      <Footer />
    </div>
  );
}
