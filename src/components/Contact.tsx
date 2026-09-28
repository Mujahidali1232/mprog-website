'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MapPin, Globe, CheckCircle, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'training',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: 'training', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080D0A] border-b border-[#1A2F25] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#DFCA9E]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#DFCA9E] font-semibold">
                {t.contact.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              {t.contact.title}
            </h2>
            <p className="text-xl sm:text-2xl text-[#DFCA9E] font-normal mb-6">
              {t.contact.subtitle}
            </p>
            <p className="text-sm sm:text-base text-[#B8C2BC] font-light leading-relaxed mb-10">
              {t.contact.description}
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              {/* Headquarters */}
              <div className="flex items-start gap-4 p-5 bg-[#0E1914] border border-[#1A2F25] rounded">
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded text-[#DFCA9E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-1">
                    {t.contact.headquartersLabel}
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">
                    {t.contact.companyName}
                  </div>
                  <div className="text-xs text-[#8C9991] leading-relaxed">
                    {t.contact.addressLine1} · {t.contact.addressLine2}
                    <br />
                    {t.contact.addressCity}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-[#0E1914] border border-[#1A2F25] rounded">
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded text-[#DFCA9E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-1">
                    {t.contact.emailLabel}
                  </div>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-[#DFCA9E] transition-colors"
                  >
                    {t.contact.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 p-5 bg-[#0E1914] border border-[#1A2F25] rounded">
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded text-[#DFCA9E] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-1">
                    {t.contact.websiteLabel}
                  </div>
                  <a
                    href="https://www.mprog.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#DFCA9E] transition-colors"
                  >
                    {t.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E1914] border border-[#1A2F25] rounded p-7 sm:p-10">
              <h3 className="text-2xl font-bold text-white mb-1.5">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#8C9991] mb-8 font-light">
                {t.contact.formSubtitle}
              </p>

              {status === 'success' ? (
                <div className="p-8 bg-[#0A100C] border border-[#DFCA9E]/40 rounded text-center">
                  <CheckCircle className="w-10 h-10 text-[#DFCA9E] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-sm text-[#B8C2BC] leading-relaxed max-w-md mx-auto mb-6">
                    {t.contact.form.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] bg-[#DFCA9E] text-[#080D0A] hover:bg-[#EFE1C6] transition-colors shadow-sm"
                  >
                    {t.contact.sendAnotherButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-3.5 bg-red-950/50 border border-red-800/60 text-xs text-red-300 rounded">
                      {t.contact.form.errorMessage}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-2">
                        {t.contact.form.nameLabel} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-sm bg-[#080D0A] border border-[#1A2F25] focus:border-[#DFCA9E]/60 focus:outline-none text-sm text-white placeholder-[#5A6860] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-2">
                        {t.contact.form.emailLabel} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-sm bg-[#080D0A] border border-[#1A2F25] focus:border-[#DFCA9E]/60 focus:outline-none text-sm text-white placeholder-[#5A6860] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-2">
                        {t.contact.form.companyLabel}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.form.companyPlaceholder}
                        className="w-full px-4 py-3 rounded-sm bg-[#080D0A] border border-[#1A2F25] focus:border-[#DFCA9E]/60 focus:outline-none text-sm text-white placeholder-[#5A6860] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-2">
                        {t.contact.form.serviceLabel}
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-[#080D0A] border border-[#1A2F25] focus:border-[#DFCA9E]/60 focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="training">{t.contact.form.serviceOptions.training}</option>
                        <option value="consulting">{t.contact.form.serviceOptions.consulting}</option>
                        <option value="events">{t.contact.form.serviceOptions.events}</option>
                        <option value="general">{t.contact.form.serviceOptions.general}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-2">
                      {t.contact.form.messageLabel} *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-sm bg-[#080D0A] border border-[#1A2F25] focus:border-[#DFCA9E]/60 focus:outline-none text-sm text-white placeholder-[#5A6860] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.12em] bg-[#DFCA9E] hover:bg-[#EFE1C6] text-[#080D0A] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
                  >
                    {status === 'submitting' ? (
                      <span>{t.contact.form.submittingButton}</span>
                    ) : (
                      <>
                        <span>{t.contact.form.submitButton}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
