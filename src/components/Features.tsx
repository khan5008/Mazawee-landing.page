'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Features() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.1, rootMargin: '0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const features = [
    {
      title: "Discover & Learn",
      description: "Access a comprehensive library of articles, videos, and audio content about Islam. Explore answers to frequently asked questions and engage with a curated knowledge base.",
      items: ["Text & Articles", "Videos", "Audios"],
      imageLeft: true,
      image: "/assets/features.jpg"
    },
    {
      title: "Interactive Video Conferencing",
      description: "Join live video sessions with esteemed scholars. Schedule appointments and participate in ongoing discussions.",
      items: ["Video Conferencing", "Appointments", "Chat Sessions"],
      imageLeft: false,
      image: "/assets/mazawee2.png"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-amber-800 font-medium text-sm uppercase tracking-wide mb-2">
            Key Features Section
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => { sectionRefs.current[index] = el; }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                feature.imageLeft ? '' : 'lg:grid-flow-col-dense'
              }`}
            >
              {/* Image Section */}
              <div className={`${
                feature.imageLeft ? 'lg:order-1' : 'lg:order-2'
              } transform transition-all duration-1000 ease-out ${
                visibleSections.has(index) 
                  ? 'translate-x-0 opacity-100' 
                  : feature.imageLeft 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
              }`}>
                <div className="relative">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} features`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`${
                feature.imageLeft ? 'lg:order-2' : 'lg:order-1'
              } space-y-4 transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has(index) 
                  ? 'translate-x-0 opacity-100' 
                  : feature.imageLeft 
                    ? 'translate-x-full opacity-0' 
                    : '-translate-x-full opacity-0'
              }`}>
                <h2 className="text-amber-950 leading-tight" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 500 }}>
                  {feature.title}
                </h2>
                
                <p className="text-amber-800 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400 }}>
                  {feature.description}
                </p>

                <div className="space-y-2 pt-2">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-amber-900" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}