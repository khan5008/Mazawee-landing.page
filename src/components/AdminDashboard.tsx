'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function AdminDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="app-experience" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-800 font-medium text-sm uppercase tracking-wide mb-4">
            Seamless Shopping Experience
          </p>
          <h2 className="text-amber-950 leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 400 }}>
            Mazawee App Experience
            <br />
            <span className="text-amber-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 400 }}>Shop global products, delivered locally in Dubai</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Web Dashboard */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="relative">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-white">
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

          {/* Right Column - Mobile App Preview */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative flex justify-center">
              <Image
                src="/assets/features1.jpg"
                alt="Mobile App Features"
                width={400}
                height={600}
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-amber-800 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400 }}>
            Experience the future of shopping in Dubai with our mobile-first marketplace. Browse thousands of products 
            from fashion and clothing to everyday essentials, all sourced globally by trusted Dubai-based sellers. 
            Enjoy secure payments, fast delivery, and a seamless shopping experience designed for modern consumers.
          </p>
        </div>
      </div>
    </section>
  );
}