'use client';

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
            Mobile First Design
          </p>
          <h2 className="text-amber-950 leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 400 }}>
            Mazawee App Experience
            <br />
            <span className="text-amber-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 400 }}>Everything you need, right in your pocket</span>
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
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-amber-400 rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>

          {/* Right Column - Mobile App Preview */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative flex justify-center">
              <div className="relative w-64 h-96 bg-amber-800 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-amber-700 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Mobile App</h3>
                    <p className="text-sm opacity-90">On-the-go Access</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-amber-300 rounded-full animate-bounce opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-amber-800 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400 }}>
            Experience seamless Islamic learning with our mobile-first design. Access comprehensive resources, 
            connect with scholars, and engage with the community wherever you are. The Mazawee app brings 
            trusted Islamic knowledge to your fingertips with an intuitive interface designed for modern users.
          </p>
        </div>
      </div>
    </section>
  );
}