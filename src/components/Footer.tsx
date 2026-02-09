'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Download Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-8">
            <Link
              href="/join"
              className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 hover:shadow-lg transition-all duration-300 text-lg"
            >
              Join Us
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/assets/newbg.png"
              alt="Download background"
              width={1200}
              height={300}
              className="w-full h-64 md:h-80 object-cover rounded-3xl"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800/80 to-amber-900/80 rounded-3xl flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Download Now
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Now Available on both Android & iOS - Start Shopping Today!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs font-medium">GET IT ON</div>
                        <div className="text-base font-bold">Google Play</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs font-medium">Download on the</div>
                        <div className="text-base font-bold">App Store</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <Image
                  src="/assets/whitelogo.png"
                  alt="Mazawee Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto filter brightness-0"
                />
              </div>
              <p className="text-amber-800 leading-relaxed mb-6 max-w-md" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400 }}>
                Dubai's Premier Marketplace - Connecting Global Sellers with Local Buyers.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h3 className="text-amber-950 font-bold text-lg mb-4">Quick Access</h3>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-amber-800 hover:text-amber-900 transition-colors duration-300">Platform Features</Link></li>
                <li><Link href="#" className="text-amber-800 hover:text-amber-900 transition-colors duration-300">For Sellers</Link></li>
                <li><Link href="#" className="text-amber-800 hover:text-amber-900 transition-colors duration-300">For Buyers</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-amber-950 font-bold text-lg mb-4">Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-amber-800 hover:text-amber-900 transition-colors duration-300"
                  >
                    Contact Us
                  </button>
                </li>
                <li><Link href="/privacy" className="text-amber-800 hover:text-amber-900 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-amber-800 hover:text-amber-900 transition-colors duration-300">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-amber-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-700 text-sm mb-4 md:mb-0">
              © 2024 Mazawee. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-amber-700 hover:text-amber-900 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-amber-700 hover:text-amber-900 text-sm transition-colors duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}