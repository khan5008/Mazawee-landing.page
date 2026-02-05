'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Background image container with better clarity */}
      <div className="relative w-full h-20 md:h-24">
        <Image
          src="/assets/newbg.png"
          alt="Navigation background"
          fill
          className="object-cover object-center brightness-90 contrast-110"
          priority
          quality={100}
        />
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        
        {/* Navigation content overlay */}
        <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/whitelogo.png"
                alt="Mazawee Logo"
                width={180}
                height={70}
                className="h-14 md:h-18 w-auto drop-shadow-xl filter brightness-100 contrast-110"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-14">
            <Link 
              href="/" 
              className="text-white hover:text-amber-100 transition-all duration-300 font-bold text-xl drop-shadow-lg hover:scale-105"
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="text-white hover:text-amber-100 transition-all duration-300 font-bold text-xl drop-shadow-lg hover:scale-105 scroll-smooth"
            >
              Features
            </Link>
            <Link 
              href="#app-experience" 
              className="text-white hover:text-amber-100 transition-all duration-300 font-bold text-xl drop-shadow-lg hover:scale-105"
            >
              App Experience
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-amber-100 transition-all duration-300 font-bold text-xl drop-shadow-lg hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href="/signup"
              className="bg-white text-amber-900 px-8 py-4 md:px-10 md:py-4 rounded-full font-bold hover:bg-amber-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg md:text-xl shadow-xl border-2 border-white/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-white p-4 hover:text-amber-100 transition-all duration-300 drop-shadow-lg hover:scale-110">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}