'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';

/* ════════════════════════════════════════════════════
   TYPES
════════════════════════════════════════════════════ */
interface Slide {
  tag: string;
  headline: string;
  sub: string;
  img: string;
  cta: string;
  ctaLink: string;
}
interface StatItem { value: string; label: string; icon: string; }
interface ServiceCard { icon: React.ReactNode; title: string; desc: string; items: string[]; delay: number; }
interface StrengthItem { icon: string; title: string; desc: string; }
interface ClientType { icon: string; title: string; desc: string; }
interface TestimonialType { name: string; role: string; content: string; rating: number; }
interface ProcessStep { step: string; icon: string; title: string; desc: string; }

/* ════════════════════════════════════════════════════
   SHARED HOOK
════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  return { ref, visible: isInView };
}

/* ════════════════════════════════════════════════════
   HERO CAROUSEL DATA
════════════════════════════════════════════════════ */
const SLIDES: Slide[] = [
  {
    tag: 'Professional Building Maintenance',
    headline: 'Keeping Your\nFacility Flawless',
    sub: 'Perfect General Maintenance delivers reliable, efficient, and professional building maintenance solutions for residential and commercial properties across the UAE.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    cta: 'Explore Services',
    ctaLink: '/services',
  },
  {
    tag: 'Routine & Preventive Maintenance',
    headline: 'Prevent Problems\nBefore They Start',
    sub: 'Our scheduled inspection and preventive maintenance programs keep your property running safely and efficiently — every day, without interruption.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    cta: 'Learn More',
    ctaLink: '/services',
  },
  {
    tag: 'On-Demand Repair Services',
    headline: 'Fast Response.\nSkilled Hands.',
    sub: 'When something breaks, our skilled technicians respond quickly with expert repair solutions — minimizing downtime for your residential or commercial property.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    cta: 'Contact Us',
    ctaLink: '/contact',
  },
];

/* ════════════════════════════════════════════════════
   HERO CAROUSEL
════════════════════════════════════════════════════ */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length, 1), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 6500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const slide = SLIDES[current];

  const variants = {
    enter: (d: number) => ({ x: d * 80, opacity: 0, scale: 1.02 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d * -80, opacity: 0, scale: 0.98 }),
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden" style={{ background: '#051A10' }}>
      {/* Background image */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <img src={slide.img} alt={slide.headline} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Multi-layer overlays for depth */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(105deg, rgba(5,26,16,0.96) 0%, rgba(5,26,16,0.78) 45%, rgba(5,26,16,0.25) 100%)' }} />
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(5,26,16,0.75) 0%, transparent 50%)' }} />

      {/* Organic texture overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #1B5E20 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00796B 0%, transparent 50%)' }} />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20" style={{ background: 'linear-gradient(to right, #1B5E20, #00796B, #4DB6AC, transparent)' }} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 lg:px-20 pb-32 max-w-7xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`content-${current}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
              style={{ background: 'rgba(0,121,107,0.15)', borderColor: 'rgba(77,182,172,0.4)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4DB6AC' }} />
              <p className="text-[#4DB6AC] text-[11px] font-bold uppercase tracking-[0.3em]">{slide.tag}</p>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.04] tracking-tighter mb-7 max-w-4xl whitespace-pre-line"
              style={{ textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}>
              {slide.headline}
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10 font-light">
              {slide.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={slide.ctaLink}>
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-block shadow-[0_0_28px_rgba(0,121,107,0.45)] hover:shadow-[0_0_40px_rgba(0,121,107,0.65)]"
                  style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}
                >
                  {slide.cta}
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="border text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-block hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  About Us
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 right-16 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`transition-all duration-500 rounded-full ${i === current ? 'w-9 h-2' : 'w-2 h-2'}`}
            style={{ background: i === current ? '#4DB6AC' : 'rgba(255,255,255,0.3)' }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300" style={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300" style={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* Group badge */}
      {/* <div className="absolute top-24 right-12 z-20">
        <div className="rounded-2xl px-5 py-3 text-center border" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-[9px] text-[#4DB6AC] uppercase tracking-widest font-bold">Part of</p>
          <p className="text-white text-xs font-bold mt-0.5">Yasil Energy Group</p>
        </div>
      </div> */}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hidden md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</p>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <rect x="6" y="4" width="2" height="5" rx="1" fill="#4DB6AC" className="animate-bounce" />
        </svg>
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   STATS / TRUST BAR
════════════════════════════════════════════════════ */
const STATS: StatItem[] = [
  { value: '10+', label: 'Years Experience', icon: '◈' },
  { value: '500+', label: 'Projects Completed', icon: '✦' },
  { value: 'UAE', label: 'Wide Coverage', icon: '◉' },
  { value: '100%', label: 'Quality Committed', icon: '⬡' },
];

function StatsBar() {
  return (
    <section className="border-b py-9 px-6 lg:px-16" style={{ background: '#0D2B14', borderColor: 'rgba(27,94,32,0.4)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center flex flex-col items-center gap-1"
          >
            <span className="text-[#4DB6AC] text-lg mb-1">{s.icon}</span>
            <p className="text-3xl font-extrabold text-white tracking-tight">{s.value}</p>
            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'rgba(77,182,172,0.7)' }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   ABOUT STRIP
════════════════════════════════════════════════════ */
function AboutStrip() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#1B5E20' }}>Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6" style={{ color: '#0D2B14' }}>
            UAE's Trusted<br />
            <span style={{ color: '#00796B' }}>Maintenance Partner</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-5">
            Perfect General Maintenance is a UAE-based company under Yasil Energy Group, specializing in professional building and facility maintenance solutions for residential and commercial properties.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            We focus on delivering reliable, efficient, and high-quality maintenance services to ensure the smooth operation, safety, and longevity of your facilities — backed by over a decade of expertise.
          </p>

          {/* Certifications/trust chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['ISO Compliant', 'Licensed in UAE', 'Insured & Certified', 'Yasil Energy Group'].map((tag, i) => (
              <span key={i} className="text-[11px] font-bold px-4 py-2 rounded-full border uppercase tracking-wider" style={{ color: '#1B5E20', borderColor: 'rgba(27,94,32,0.3)', background: '#E8F5E9' }}>
                {tag}
              </span>
            ))}
          </div>

          <Link href="/about">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
              style={{ background: '#0D2B14' }}
            >
              Discover Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: 'Reliable Service', icon: '◈', bg: '#E8F5E9', border: '#A5D6A7' },
            { label: 'Skilled Technicians', icon: '✦', bg: '#E0F2F1', border: '#80CBC4' },
            { label: 'Fast Response', icon: '◉', bg: '#E8F5E9', border: '#A5D6A7' },
            { label: 'Scalable Solutions', icon: '⬡', bg: '#E0F2F1', border: '#80CBC4' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="border rounded-2xl p-6 flex flex-col gap-3 cursor-pointer"
              style={{ background: item.bg, borderColor: item.border }}
            >
              <span className="text-xl" style={{ color: '#1B5E20' }}>{item.icon}</span>
              <p className="font-bold text-sm leading-snug" style={{ color: '#0D2B14' }}>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   PROCESS SECTION (NEW)
════════════════════════════════════════════════════ */
const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', icon: '🔍', title: 'Assess', desc: 'We conduct a thorough on-site inspection to evaluate your property\'s maintenance requirements and identify any immediate concerns.' },
  { step: '02', icon: '📋', title: 'Plan', desc: 'A customized maintenance plan is crafted with transparent pricing, timelines, and clearly defined scope of work tailored to your property.' },
  { step: '03', icon: '⚙️', title: 'Execute', desc: 'Our certified technicians carry out all work with precision, adhering to UAE safety standards and delivering results on time.' },
  { step: '04', icon: '✅', title: 'Verify', desc: 'We follow up with quality checks, post-service reports, and ensure your complete satisfaction before closing every job.' },
];

function ProcessSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 lg:px-16" style={{ background: '#ECEFF1' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>How We Work</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
              Our Process,<br /><span style={{ color: '#1B5E20' }}>Your Peace of Mind</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            Every maintenance engagement follows a structured 4-step process — designed for clarity, safety, and lasting results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] hidden lg:block" style={{ height: '2px', background: 'linear-gradient(to right, #1B5E20, #00796B, #4DB6AC, #80CBC4)', opacity: 0.3 }} />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-400 relative group"
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}>
                  {step.icon}
                </div>
                <span className="text-5xl font-extrabold" style={{ color: 'rgba(27,94,32,0.1)' }}>{step.step}</span>
              </div>
              <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full mt-2" style={{ background: 'linear-gradient(to right, #1B5E20, #00796B)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   SERVICES OVERVIEW
════════════════════════════════════════════════════ */
const SERVICES: ServiceCard[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Building & Facility Maintenance',
    desc: 'Complete end-to-end maintenance solutions for buildings of all types — keeping your property in peak condition year-round.',
    items: ['Structural maintenance & civil works', 'Plumbing & electrical systems', 'Facade & exterior upkeep', 'Interior finishing & repairs'],
    delay: 0,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Routine Maintenance',
    desc: 'Scheduled inspections and servicing plans that prevent costly breakdowns and keep your systems running efficiently.',
    items: ['Scheduled inspections & reports', 'HVAC & MEP servicing', 'Preventive upkeep programs', 'Compliance & safety audits'],
    delay: 0.12,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'On-Demand Repair Services',
    desc: 'Quick response repair solutions delivered by skilled technicians — reducing downtime and restoring your facility fast.',
    items: ['Emergency breakdown response', 'Multi-trade skilled technicians', 'Same-day service available', 'Residential & commercial repairs'],
    delay: 0.24,
  },
];

function ServicesOverview() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 lg:px-16" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>What We Do</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
            Our Core<br /><span style={{ color: '#1B5E20' }}>Services</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-2xl text-base leading-relaxed">
            Three focused service pillars, each built around reliability, speed, and professional excellence for UAE properties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: s.delay, duration: 0.65 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer bg-white border"
              style={{ borderColor: '#ECEFF1' }}
            >
              <div className="h-1.5 transition-all duration-500" style={{ background: 'linear-gradient(to right, #1B5E20, #00796B)' }} />
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: '#E8F5E9', color: '#1B5E20' }}>
                  <div className="group-hover:text-white transition-colors duration-300" style={{ color: '#1B5E20' }}>
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: '#0D2B14' }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <div className="space-y-2.5">
                  {s.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#00796B' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/services">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border-2 px-10 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
              style={{ borderColor: '#0D2B14', color: '#0D2B14' }}
            >
              View All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   STRENGTHS — BENTO GRID
════════════════════════════════════════════════════ */
const STRENGTHS: StrengthItem[] = [
  { icon: '◈', title: 'Reliable Delivery', desc: 'We consistently deliver on our commitments — on time, every time, without compromise on quality.' },
  { icon: '⬡', title: 'Skilled Team', desc: 'Our technicians are trained, certified, and experienced across all maintenance disciplines and property types.' },
  { icon: '◉', title: 'Fast Response', desc: 'Quick turnaround times ensure minimal disruption to your operations and daily residential life.' },
  { icon: '✦', title: 'Scalable Solutions', desc: 'From single units to entire portfolios — our services scale to match your property size and complexity.' },
];

function StrengthsSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>Our Advantage</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
          Why Choose<br /><span style={{ color: '#1B5E20' }}>Perfect General</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STRENGTHS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="rounded-3xl p-8 flex flex-col gap-4 cursor-pointer group transition-all duration-300"
            style={{ background: '#ECEFF1' }}
          >
            <span className="text-2xl transition-colors duration-300" style={{ color: '#1B5E20' }}>{item.icon}</span>
            <h3 className="text-base font-extrabold tracking-tight transition-colors duration-300" style={{ color: '#0D2B14' }}>{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   TESTIMONIALS (NEW)
════════════════════════════════════════════════════ */
const TESTIMONIALS: TestimonialType[] = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Property Manager · Dubai',
    content: 'Perfect General Maintenance has been managing our 3-building residential complex for over 2 years. Their preventive maintenance approach has dramatically reduced emergency calls and tenant complaints.',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    role: 'Facilities Director · Abu Dhabi',
    content: 'Exceptional service quality and professionalism. The team responded to our emergency plumbing issue within hours, minimizing disruption to our commercial tenants. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Khalid Mansoor',
    role: 'Real Estate Developer · Sharjah',
    content: 'We\'ve engaged PGM for multiple handover projects and post-handover maintenance. Their detailed reporting and transparent pricing make them a trusted partner for our portfolio.',
    rating: 5,
  },
];

function TestimonialsSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 lg:px-16 overflow-hidden" style={{ background: '#051A10' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#4DB6AC' }}>Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Trusted by UAE's<br /><span style={{ color: '#4DB6AC' }}>Leading Properties</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65 }}
              className="rounded-3xl p-8 flex flex-col gap-6 border group hover:border-[#00796B]/50 transition-all duration-400"
              style={{ background: 'rgba(27,94,32,0.08)', borderColor: 'rgba(27,94,32,0.3)' }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-5xl font-serif leading-none" style={{ color: '#1B5E20' }}>"</div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">{t.content}</p>

              <div className="pt-4 border-t" style={{ borderColor: 'rgba(27,94,32,0.3)' }}>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#4DB6AC' }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CLIENTS / WHO WE SERVE
════════════════════════════════════════════════════ */
const CLIENTS: ClientType[] = [
  { icon: '🏠', title: 'Property Owners', desc: 'Protecting the value and comfort of residential homes and investment properties across the UAE.' },
  { icon: '🏢', title: 'Facility Managers', desc: 'Streamlined maintenance programs for complex multi-facility operations and portfolios.' },
  { icon: '💼', title: 'Businesses', desc: 'Keeping commercial spaces operational, compliant, and professionally maintained.' },
  { icon: '🏗️', title: 'Real Estate Companies', desc: 'Portfolio-wide maintenance solutions that enhance property value and tenant satisfaction.' },
];

function ClientsSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 lg:px-16 overflow-hidden" style={{ background: '#0D2B14' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#4DB6AC' }}>Our Clients</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Who We<br /><span style={{ color: '#4DB6AC' }}>Serve</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl text-base leading-relaxed">
            From individual property owners to large real estate portfolios, our maintenance solutions are built for every scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENTS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
              whileHover={{ y: -6 }}
              className="border rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer group"
              style={{ borderColor: 'rgba(27,94,32,0.5)' }}
            >
              <span className="text-3xl">{c.icon}</span>
              <h3 className="text-base font-extrabold text-white group-hover:text-[#4DB6AC] transition-colors tracking-tight">{c.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   UAE COVERAGE BELT (NEW)
════════════════════════════════════════════════════ */
function CoverageBelt() {
  const emirates = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'];
  return (
    <section className="py-6 overflow-hidden border-y" style={{ background: '#ECEFF1', borderColor: '#CFD8DC' }}>
      <div className="flex items-center gap-0 whitespace-nowrap">
        <motion.div
          className="flex items-center gap-12 pr-12"
          animate={{ x: [0, -800] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {[...emirates, ...emirates, ...emirates].map((e, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#1B5E20' }}>✦</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#0D2B14' }}>{e}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CTA SECTION
════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-28 px-6 lg:px-16 overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #A5D6A7 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #80CBC4 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#1B5E20' }}>Ready to Begin?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ color: '#0D2B14' }}>
            Need Professional<br />
            <span style={{ color: '#00796B' }}>Maintenance Services?</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed mb-12">
            Get in touch with Perfect General Maintenance to schedule an inspection, set up a routine maintenance plan, or request an on-demand repair across the UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-block shadow-[0_0_32px_rgba(0,121,107,0.3)] hover:shadow-[0_0_44px_rgba(0,121,107,0.5)]"
                style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}
              >
                Contact Us Today
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-block"
                style={{ borderColor: '#0D2B14', color: '#0D2B14' }}
              >
                Our Services
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#1B5E20] selection:text-white">
      <HeroCarousel />
      <StatsBar />
      <AboutStrip />
      <ProcessSection />
      <ServicesOverview />
      <StrengthsSection />
      <TestimonialsSection />
      <ClientsSection />
      <CoverageBelt />
      <CTASection />
    </main>
  );
}