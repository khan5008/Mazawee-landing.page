'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section 
      ref={heroRef}
      className="h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Column - Content with slide-in animation */}
          <div className={`space-y-4 lg:space-y-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="space-y-4">
              <h1 className="text-amber-950 leading-tight">
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 500 }}>Welcome to</span>
                <br />
                <span className="text-amber-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '46px', fontWeight: 600 }}>Mazawee App</span>
              </h1>
              
              <h2 className="text-amber-900 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '22px', fontWeight: 500 }}>
                Dubai's Premier Marketplace for Global Products
              </h2>
              
              <p className="text-amber-800 leading-relaxed max-w-xl" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400 }}>
                Connect with sellers across Dubai who bring the world's finest products to your doorstep. 
                From international fashion and clothing to everyday essentials, discover a curated marketplace 
                where Dubai-based sellers import and offer premium products from around the globe. 
                Shop everything you need in one convenient platform.
              </p>
            </div>

            {/* Single CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 hover:shadow-lg transition-all duration-300 text-base"
              >
                Contact Us
              </button>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-row gap-4 pt-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>
              
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Video with slide-in animation */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative">
              <div className="relative aspect-[16/10] w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-gray-100 p-2">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/assets/website.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={() => setIsContactModalOpen(false)} 
    />
    </>
  );
}