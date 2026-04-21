'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-green-900/30">
      <div className="max-w-[1200px] mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold">
              Perfect General Maintenance
            </h2>

            <p className="text-green-400 text-sm font-semibold mt-1">
              Reliable Facility Management
            </p>

            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Providing professional maintenance, repair, and facility management
              solutions for residential and commercial properties across the UAE.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-white/60 hover:text-green-400 transition">
                Home
              </Link>
              <Link href="/about" className="text-white/60 hover:text-green-400 transition">
                About
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-green-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              Contact
            </h3>

            <div className="text-sm text-white/60 space-y-2">
              <p>Abu Dhabi, UAE</p>
              <p>+971 XX XXX XXXX</p>
              <p>info@yasilenergy.com</p>
            </div>

            <p className="text-white/40 text-xs mt-4">
              Part of Yasil Energy Group
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-green-900/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-3">

          <p>© {new Date().getFullYear()} Perfect General Maintenance. Developed by Devntom Solutions</p>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-green-400 transition">Home</Link>
            <Link href="/about" className="hover:text-green-400 transition">About</Link>
            <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}