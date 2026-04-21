'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 border-b border-green-900/40 py-3'
          : 'bg-black/70 backdrop-blur-md border-b border-green-900/30 py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/pgmLogo.jpeg"
              alt="PGM"
              fill
              className="object-contain"
            />
          </div>

          <div className="leading-none">
            <p className="text-white font-bold text-sm">
              Perfect Maintenance
            </p>
            <p className="text-green-400 text-xs font-semibold">
              Facility Services UAE
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2 bg-green-950/30 px-2 py-2 rounded-full border border-green-800/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-green-400 hover:bg-green-900/20 px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_18px_rgba(34,197,94,0.25)]"
          >
            Request Service
          </Link>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-5 h-0.5 bg-white"></span>
          <span className="w-5 h-0.5 bg-white"></span>
          <span className="w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-green-900/30">
          <div className="px-6 py-4 flex flex-col gap-3">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-green-400 text-sm py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-green-600 text-white text-center py-2 rounded-full text-sm font-semibold mt-3"
            >
              Request Service
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}