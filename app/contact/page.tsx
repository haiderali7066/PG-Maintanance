'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Link from 'next/link';

/* ════════════════════════════════════════════════════
   SHARED HOOK
════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  return { ref, visible: isInView };
}

/* ════════════════════════════════════════════════════
   TYPES
════════════════════════════════════════════════════ */
interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
}

/* ════════════════════════════════════════════════════
   HERO
════════════════════════════════════════════════════ */
function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28 px-6 lg:px-16" style={{ background: '#051A10' }}>
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 right-1/3 w-[550px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,121,107,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(27,94,32,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 3 }}
      />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(27,94,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(27,94,32,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #1B5E20, #00796B, #4DB6AC, transparent)' }} />

      {/* Group badge */}
      <div className="absolute top-24 right-12">
        <div className="rounded-2xl px-5 py-3 text-center border" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: '#4DB6AC' }}>Part of</p>
          <p className="text-white text-xs font-bold mt-0.5">Yasil Energy Group</p>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
            style={{ background: 'rgba(0,121,107,0.12)', borderColor: 'rgba(77,182,172,0.35)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4DB6AC' }} />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: '#4DB6AC' }}>Get In Touch</p>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.04] tracking-tighter mb-8">
            Let's Maintain<br />
            <span style={{ color: '#4DB6AC' }}>Your Property</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Whether you need a routine maintenance plan, an emergency repair, or a full facility assessment — our expert team is ready to deliver. Reach out today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CONTACT INFO CARDS
════════════════════════════════════════════════════ */
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Location',
    value: 'United Arab Emirates',
    sub: 'Serving all UAE emirates',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'Email',
    value: 'info@perfectgeneralmaintenance.ae',
    sub: 'Response within 24 hours',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Phone',
    value: '+971 XX XXX XXXX',
    sub: 'Available 7 days a week',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Response Time',
    value: 'Same-Day Response',
    sub: 'For emergency repair requests',
  },
];

function ContactInfoSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-14 px-6 lg:px-16 border-b" style={{ background: '#0D2B14', borderColor: 'rgba(27,94,32,0.4)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CONTACT_INFO.map((info, i) => (
          <motion.div
            key={i}
            ref={i === 0 ? ref : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="border rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 group cursor-pointer"
            style={{ borderColor: 'rgba(27,94,32,0.5)' }}
          >
            <div className="transition-colors" style={{ color: '#4DB6AC' }}>
              {info.icon}
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'rgba(77,182,172,0.6)' }}>{info.title}</p>
            <p className="text-white font-bold text-sm leading-tight">{info.value}</p>
            {info.sub && <p className="text-xs text-gray-600">{info.sub}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════════════════ */
function ContactForm() {
  const { ref, visible } = useReveal(0.1);
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', propertyType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = 'w-full border rounded-2xl px-5 py-4 text-sm placeholder-gray-400 focus:outline-none transition-all duration-300 font-medium';
  const inputStyle = { background: '#ECEFF1', borderColor: '#CFD8DC', color: '#0D2B14' };
  const labelClass = 'block text-[10px] font-bold uppercase tracking-widest mb-2';
  const labelStyle = { color: '#546E7A' };

  return (
    <section className="py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Left intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 flex flex-col justify-start pt-4"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#1B5E20' }}>Send a Message</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: '#0D2B14' }}>
            Tell Us About<br />
            <span style={{ color: '#00796B' }}>Your Property</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Fill out the form and one of our maintenance specialists will get back to you within 24 hours to discuss the best solution for your property.
          </p>

          {/* Trust points */}
          <div className="space-y-4">
            {[
              'Free initial property assessment',
              'Customized maintenance plans',
              'Transparent, fixed pricing',
              'No long-term lock-in required',
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1B5E20, #00796B)' }}>
                  <span className="text-white text-[10px] font-black">✓</span>
                </div>
                {t}
              </div>
            ))}
          </div>

          {/* Company card */}
          <div className="mt-12 border rounded-3xl p-6" style={{ background: '#ECEFF1', borderColor: '#CFD8DC' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B5E20, #00796B)' }}>
                <span className="text-white font-extrabold text-xs">PGM</span>
              </div>
              <div>
                <p className="font-extrabold text-xs" style={{ color: '#0D2B14' }}>Perfect General Maintenance</p>
                <p className="text-[10px]" style={{ color: '#00796B' }}>Yasil Energy Group · UAE</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Professional building and facility maintenance solutions for residential and commercial properties across the UAE.
            </p>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border rounded-3xl p-16 text-center h-full flex flex-col items-center justify-center"
              style={{ background: '#ECEFF1', borderColor: '#CFD8DC' }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(0,121,107,0.3)]"
                style={{ background: 'linear-gradient(135deg, #1B5E20, #00796B)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-3" style={{ color: '#0D2B14' }}>Message Received!</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Thank you for reaching out. One of our specialists will contact you within 24 hours to discuss your maintenance needs.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 border-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                style={{ borderColor: '#0D2B14', color: '#0D2B14' }}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <div className="border rounded-3xl p-8 md:p-10 shadow-sm bg-white" style={{ borderColor: '#ECEFF1' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass} style={labelStyle}>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith"
                    className={inputClass} style={inputStyle} required />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                    className={inputClass} style={inputStyle} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass} style={labelStyle}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+971 XX XXX XXXX"
                    className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Service Required *</label>
                  <select name="service" value={form.service} onChange={handleChange} className={inputClass} style={inputStyle} required>
                    <option value="" disabled>Select a service</option>
                    <option value="building-facility">Building & Facility Maintenance</option>
                    <option value="routine">Routine Maintenance</option>
                    <option value="on-demand">On-Demand Repair</option>
                    <option value="inspection">Initial Inspection</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass} style={labelStyle}>Property Type *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'residential', label: 'Residential', icon: '🏠' },
                    { value: 'commercial', label: 'Commercial', icon: '🏢' },
                    { value: 'office', label: 'Office', icon: '🖥️' },
                    { value: 'facility', label: 'Facility', icon: '🏗️' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, propertyType: opt.value })}
                      className="flex flex-col items-center gap-2 py-4 px-3 rounded-2xl border-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                      style={
                        form.propertyType === opt.value
                          ? { borderColor: '#1B5E20', background: 'linear-gradient(135deg, #1B5E20, #00796B)', color: '#fff' }
                          : { borderColor: '#CFD8DC', background: '#ECEFF1', color: '#546E7A' }
                      }
                    >
                      <span className="text-xl">{opt.icon}</span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className={labelClass} style={labelStyle}>Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe your property's maintenance needs, any specific issues, or questions you have..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={loading}
                className="w-full text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)', boxShadow: '0 0 28px rgba(0,121,107,0.3)' }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="30 60" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </motion.button>

              <p className="text-center text-gray-400 text-xs mt-5">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   WHAT TO EXPECT
════════════════════════════════════════════════════ */
function WhatToExpect() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-24 px-6 lg:px-16" style={{ background: '#ECEFF1' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>What to Expect</p>
          <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
            After You Reach Out
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { step: '01', icon: '📞', title: 'We Call You Back', desc: 'A maintenance specialist will contact you within 24 hours to understand your property\'s specific needs in detail.' },
            { step: '02', icon: '🔍', title: 'Free Site Assessment', desc: 'We visit your property to conduct a thorough inspection and document all maintenance requirements at no charge.' },
            { step: '03', icon: '📋', title: 'Custom Proposal', desc: 'You receive a transparent, itemized maintenance plan with clear pricing — no hidden costs, no surprises.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white border rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 group hover:shadow-lg"
              style={{ borderColor: '#CFD8DC' }}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #1B5E20, #00796B)' }}>
                  {item.icon}
                </div>
                <span className="text-4xl font-extrabold" style={{ color: 'rgba(27,94,32,0.12)' }}>{item.step}</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold tracking-tight mb-2 group-hover:text-[#1B5E20] transition-colors" style={{ color: '#0D2B14' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   EMERGENCY BANNER
════════════════════════════════════════════════════ */
function EmergencyBanner() {
  return (
    <section className="py-12 px-6 lg:px-16" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <span className="text-xl">⚡</span>
          </div>
          <div>
            <p className="text-white font-extrabold text-lg tracking-tight">Need Emergency Repairs?</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>Our on-demand team responds fast — same-day service available across the UAE.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a href="tel:+97100000000">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white px-8 py-3.5 rounded-full text-sm font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-block shadow-lg"
              style={{ color: '#1B5E20' }}
            >
              Call Now
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


/* ════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#1B5E20] selection:text-white">
      <ContactHero />
      <ContactInfoSection />
      <ContactForm />
      <WhatToExpect />
      <EmergencyBanner />
    </main>
  );
}