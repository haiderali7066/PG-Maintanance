'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
   HERO
════════════════════════════════════════════════════ */
function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28 px-6 lg:px-16" style={{ background: '#051A10' }}>
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,121,107,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[400px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(27,94,32,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(27,94,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,94,32,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20" style={{ background: 'linear-gradient(to right, #1B5E20, #00796B, #4DB6AC, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4DB6AC' }} />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: '#4DB6AC' }}>Our Story</p>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tighter mb-8">
              Built on<br />
              <span style={{ color: '#4DB6AC' }}>Trust &</span><br />
              Excellence
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Perfect General Maintenance was founded with a singular mission: to raise the standard of building maintenance across the UAE with professionalism, reliability, and integrity.
            </p>
          </motion.div>

          {/* Right side stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '10+', label: 'Years of Excellence', icon: '◈' },
              { value: '500+', label: 'Projects Delivered', icon: '✦' },
              { value: 'UAE', label: 'Nationwide Coverage', icon: '◉' },
              { value: '3', label: 'Core Service Pillars', icon: '⬡' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6 border flex flex-col gap-3"
                style={{ background: 'rgba(27,94,32,0.1)', borderColor: 'rgba(27,94,32,0.35)' }}
              >
                <span className="text-xl" style={{ color: '#4DB6AC' }}>{stat.icon}</span>
                <p className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(77,182,172,0.7)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   MISSION & VISION
════════════════════════════════════════════════════ */
function MissionVision() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-24 px-6 lg:px-16" style={{ background: '#ECEFF1' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>Our Purpose</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
            What Drives <span style={{ color: '#1B5E20' }}>Everything We Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white rounded-3xl p-10 shadow-sm group hover:shadow-lg transition-all duration-400 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #1B5E20, #00796B)' }} />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl"
              style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}>
              🎯
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>Our Mission</p>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4" style={{ color: '#0D2B14' }}>
              Reliable Maintenance,<br />Every Time
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              To deliver exceptional, reliable, and professional building maintenance services that ensure the safety, longevity, and operational efficiency of every property we serve — consistently exceeding client expectations across the UAE.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0D2B14 0%, #051A10 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #4DB6AC, #80CBC4)' }} />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl border"
              style={{ background: 'rgba(77,182,172,0.1)', borderColor: 'rgba(77,182,172,0.3)' }}>
              🌟
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{ color: '#4DB6AC' }}>Our Vision</p>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4 text-white">
              UAE's Most Trusted<br />Maintenance Partner
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              To be recognized as the UAE's premier maintenance company — known for our professionalism, integrity, and commitment to quality. We strive to set new industry benchmarks that inspire confidence in every client relationship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   OUR STORY
════════════════════════════════════════════════════ */
function OurStory() {
  const { ref, visible } = useReveal(0.1);

  const milestones = [
    { year: '2014', title: 'Founded', desc: 'Perfect General Maintenance was established in the UAE with a small but dedicated team committed to building maintenance excellence.' },
    { year: '2016', title: 'Commercial Expansion', desc: 'We expanded our service offerings to include commercial properties and large-scale facility management contracts.' },
    { year: '2019', title: 'Yasil Energy Group', desc: 'PGM joined the Yasil Energy Group — strengthening our capabilities, reach, and resources to serve a wider clientele.' },
    { year: '2022', title: 'UAE-Wide Coverage', desc: 'We achieved full UAE coverage, serving properties across all seven emirates with a growing team of certified technicians.' },
    { year: '2024', title: 'Digital-First Operations', desc: 'Launched our digital inspection and reporting system, giving clients real-time visibility into maintenance status.' },
  ];

  return (
    <section className="py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
            A Decade of<br /><span style={{ color: '#1B5E20' }}>Building Trust</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-0.5 md:-translate-x-px" style={{ background: 'linear-gradient(to bottom, #1B5E20, #00796B, #4DB6AC, rgba(77,182,172,0.1))' }} />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white z-10"
                  style={{ background: 'linear-gradient(135deg, #1B5E20, #00796B)', boxShadow: '0 0 12px rgba(0,121,107,0.4)' }} />

                {/* Year */}
                <div className={`hidden md:flex md:w-[calc(50%-2rem)] items-center ${i % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                  <span className="text-4xl font-extrabold tracking-tight" style={{ color: 'rgba(27,94,32,0.18)' }}>{m.year}</span>
                </div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300" style={{ borderColor: '#ECEFF1' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #1B5E20, #00796B)' }}>{m.year}</span>
                      <h3 className="font-extrabold text-base tracking-tight" style={{ color: '#0D2B14' }}>{m.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CORE VALUES
════════════════════════════════════════════════════ */
function CoreValues() {
  const { ref, visible } = useReveal(0.1);

  const values = [
    { icon: '🤝', title: 'Integrity', desc: 'We operate with complete transparency and honesty in every client interaction, proposal, and service delivery.' },
    { icon: '⚡', title: 'Reliability', desc: 'Our clients count on us. We show up on time, deliver on commitments, and maintain consistency in every task.' },
    { icon: '🎯', title: 'Excellence', desc: 'We hold ourselves to the highest standards of workmanship, continuously improving our methods and expertise.' },
    { icon: '🛡️', title: 'Safety', desc: 'Safety is non-negotiable. Every task is executed in full compliance with UAE health and safety regulations.' },
    { icon: '🌱', title: 'Sustainability', desc: 'We adopt environmentally responsible practices and recommend energy-efficient solutions for your facilities.' },
    { icon: '🔗', title: 'Partnership', desc: 'We build long-term relationships — not transactional ones. Your success and property health are our shared goals.' },
  ];

  return (
    <section className="py-28 px-6 lg:px-16" style={{ background: '#0D2B14' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#4DB6AC' }}>What We Stand For</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Core <span style={{ color: '#4DB6AC' }}>Values</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            These principles guide every decision, every hire, and every service we deliver across the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="border rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 group cursor-pointer"
              style={{ borderColor: 'rgba(27,94,32,0.4)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl border transition-all duration-300"
                style={{ background: 'rgba(27,94,32,0.15)', borderColor: 'rgba(77,182,172,0.2)' }}>
                {v.icon}
              </div>
              <h3 className="font-extrabold text-base tracking-tight text-white group-hover:text-[#4DB6AC] transition-colors">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   TEAM SECTION
════════════════════════════════════════════════════ */
function TeamSection() {
  const { ref, visible } = useReveal(0.1);

  const departments = [
    { icon: '🔧', title: 'Technical Team', count: '25+', desc: 'Certified technicians across plumbing, electrical, HVAC, and civil disciplines.' },
    { icon: '📊', title: 'Project Management', count: '8+', desc: 'Experienced PMs who coordinate complex multi-trade projects with precision.' },
    { icon: '🎧', title: 'Client Services', count: '6+', desc: 'Dedicated account managers ensuring seamless communication and responsiveness.' },
    { icon: '🏗️', title: 'Site Supervisors', count: '10+', desc: 'On-ground supervisors who maintain quality control across all active sites.' },
  ];

  return (
    <section className="py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00796B' }}>The People Behind PGM</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>
            A Team Built for<br /><span style={{ color: '#1B5E20' }}>Your Property</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-2xl text-base leading-relaxed">
            Every member of the PGM team is selected for their expertise, professionalism, and dedication to delivering maintenance excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {departments.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-3xl p-7 flex flex-col gap-4 border transition-all duration-300 cursor-pointer group"
              style={{ background: '#ECEFF1', borderColor: '#CFD8DC' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{d.icon}</span>
                <span className="text-3xl font-extrabold" style={{ color: 'rgba(27,94,32,0.2)' }}>{d.count}</span>
              </div>
              <h3 className="font-extrabold text-sm tracking-tight" style={{ color: '#0D2B14' }}>{d.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications/Compliance strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: '#ECEFF1', borderColor: '#A5D6A7' }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2" style={{ color: '#1B5E20' }}>Standards & Compliance</p>
            <h3 className="text-2xl font-extrabold tracking-tight" style={{ color: '#0D2B14' }}>Fully Licensed &<br />Insured in the UAE</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['UAE Licensed', 'Fully Insured', 'ISO Compliant', 'Safety Certified', 'Yasil Energy Group'].map((tag, i) => (
              <span key={i} className="text-xs font-bold px-4 py-2 rounded-full border uppercase tracking-wider"
                style={{ color: '#1B5E20', borderColor: 'rgba(27,94,32,0.35)', background: 'white' }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   PARENT COMPANY (YASIL ENERGY GROUP)
════════════════════════════════════════════════════ */
function ParentCompanySection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-24 px-6 lg:px-16 overflow-hidden" style={{ background: '#051A10' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
              style={{ background: 'rgba(0,121,107,0.12)', borderColor: 'rgba(77,182,172,0.3)' }}>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: '#4DB6AC' }}>Part of</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Yasil Energy<br /><span style={{ color: '#4DB6AC' }}>Group</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Perfect General Maintenance operates as a specialized subsidiary of Yasil Energy Group — a diversified UAE-based conglomerate with interests across energy, infrastructure, and facility services.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Being part of Yasil Energy Group gives PGM access to extensive resources, technical expertise, and a broader network — enabling us to deliver world-class maintenance solutions at competitive rates.
            </p>
            <div className="flex flex-wrap gap-5">
              {['Group Resources', 'Network Access', 'Technical Depth', 'Group Backing'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#80CBC4' }}>
                  <span style={{ color: '#4DB6AC' }}>◈</span> {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl p-10 border relative overflow-hidden"
              style={{ background: 'rgba(27,94,32,0.08)', borderColor: 'rgba(27,94,32,0.35)' }}>
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, #00796B, transparent)' }} />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}>
                  <span className="text-white font-extrabold text-sm">YEG</span>
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg">Yasil Energy Group</p>
                  <p className="text-sm" style={{ color: '#4DB6AC' }}>United Arab Emirates</p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { label: 'Sector Focus', value: 'Energy, Infrastructure & Facilities' },
                  { label: 'Base', value: 'United Arab Emirates' },
                  { label: 'PGM Role', value: 'Facility Maintenance Division' },
                  { label: 'Coverage', value: 'All 7 UAE Emirates' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 py-3 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(27,94,32,0.25)' }}>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(77,182,172,0.7)' }}>{item.label}</span>
                    <span className="text-sm font-semibold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   CTA
════════════════════════════════════════════════════ */
function AboutCTA() {
  return (
    <section className="relative py-28 px-6 lg:px-16 overflow-hidden bg-white">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-25 pointer-events-none" style={{ background: 'radial-gradient(circle, #A5D6A7, transparent)' }} />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #80CBC4, transparent)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#1B5E20' }}>Let's Work Together</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ color: '#0D2B14' }}>
            Ready to Experience<br />
            <span style={{ color: '#00796B' }}>PGM Difference?</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed mb-12">
            Join hundreds of satisfied property owners and managers who trust Perfect General Maintenance to keep their properties at their very best.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest cursor-pointer inline-block shadow-[0_0_32px_rgba(0,121,107,0.3)] hover:shadow-[0_0_44px_rgba(0,121,107,0.5)] transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #00796B 100%)' }}
              >
                Get in Touch
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-block"
                style={{ borderColor: '#0D2B14', color: '#0D2B14' }}
              >
                View Services
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
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#1B5E20] selection:text-white">
      <AboutHero />
      <MissionVision />
      <OurStory />
      <CoreValues />
      <TeamSection />
      <ParentCompanySection />
      <AboutCTA />
    </main>
  );
}