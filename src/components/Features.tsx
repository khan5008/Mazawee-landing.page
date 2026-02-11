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
      title: "Seller Profiles & Global Sourcing",
      description: "Create your seller profile and showcase products imported from around the world. Connect with international suppliers and bring premium fashion, clothing, and essentials to Dubai's thriving marketplace.",
      items: ["Seller Dashboard", "Product Catalog", "International Sourcing"],
      imageLeft: true,
      image: "/assets/features.jpg"
    },
    {
      title: "Complete Marketplace Solution",
      description: "Manage your entire business from one platform. List products, track inventory, process orders, and communicate with buyers seamlessly. From fashion boutiques to essential goods suppliers.",
      items: ["Order Management", "Inventory Tracking", "Buyer Communication"],
      imageLeft: false,
      image: "/assets/mazawe2.png"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-amber-800 font-medium text-sm uppercase tracking-wide mb-2">
            Platform Features
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
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} features`}
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`${
                feature.imageLeft ? 'lg:order-2' : 'lg:order-1'
              } space-y-4 transform transition-all duration-1000 ease-out delay-200 flex flex-col justify-center ${
                visibleSections.has(index) 
                  ? 'translate-x-0 opacity-100' 
                  : feature.imageLeft 
                    ? 'translate-x-full opacity-0' 
                    : '-translate-x-full opacity-0'
              }`}>
                <h2 className="text-amber-950 leading-tight" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 5vw, 30px)', fontWeight: 500 }}>
                  {feature.title}
                </h2>
                
                <p className="text-amber-800 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 400 }}>
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