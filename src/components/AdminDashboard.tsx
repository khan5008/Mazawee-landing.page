'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function AdminDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageSet, setCurrentImageSet] = useState(0);
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

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
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
        <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-20">
          
          {/* Left Column - Mobile Phone Mockup */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="relative flex justify-center items-center">
              {/* Mobile Phone Frame - Static */}
              <div className="relative transform -rotate-12 hover:-rotate-6 transition-all duration-500">
                <div className="relative bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
                  <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden w-[140px] h-[280px] sm:w-[180px] sm:h-[360px] md:w-[240px] md:h-[480px] lg:w-[280px] lg:h-[560px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 lg:w-32 h-4 md:h-5 lg:h-6 bg-gray-900 rounded-b-2xl md:rounded-b-3xl z-10"></div>
                    
                    {/* Image Content - Changes */}
                    <div className="relative w-full h-full">
                      {currentImageSet === 0 && (
                        <Image
                          src="/assets/inclineimg.jpeg"
                          alt="Mobile App Screen 1"
                          fill
                          className="object-cover animate-fadeIn"
                        />
                      )}
                      {currentImageSet === 1 && (
                        <Image
                          src="/assets/inclineimg3.jpeg"
                          alt="Mobile App Screen 3"
                          fill
                          className="object-cover animate-fadeIn"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Phone Mockup */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative flex justify-center items-center">
              {/* Mobile Phone Frame - Static */}
              <div className="relative transform rotate-12 hover:rotate-6 transition-all duration-500">
                <div className="relative bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
                  <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden w-[140px] h-[280px] sm:w-[180px] sm:h-[360px] md:w-[240px] md:h-[480px] lg:w-[280px] lg:h-[560px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 lg:w-32 h-4 md:h-5 lg:h-6 bg-gray-900 rounded-b-2xl md:rounded-b-3xl z-10"></div>
                    
                    {/* Image Content - Changes */}
                    <div className="relative w-full h-full">
                      {currentImageSet === 0 && (
                        <Image
                          src="/assets/inclineimg2.jpeg"
                          alt="Mobile App Screen 2"
                          fill
                          className="object-cover animate-fadeIn"
                        />
                      )}
                      {currentImageSet === 1 && (
                        <Image
                          src="/assets/inclineimg4.jpeg"
                          alt="Mobile App Screen 4"
                          fill
                          className="object-cover animate-fadeIn"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
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