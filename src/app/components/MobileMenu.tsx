'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BASE_PATH } from '@/lib/config';
import Link from 'next/link';

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-gray-700 hover:text-primary smooth-hover"
      aria-label="Toggle mobile menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg" role="region" aria-label="Mobile navigation">
      <ul className="flex flex-col space-y-2 px-4 py-4">
        <li>
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="block text-gray-700 hover:text-primary hover:bg-indigo-50 px-4 py-2 rounded-md smooth-hover focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block text-gray-700 hover:text-primary hover:bg-indigo-50 px-4 py-2 rounded-md smooth-hover focus:outline-none focus:ring-2 focus:ring-primary"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="block text-gray-700 hover:text-primary hover:bg-indigo-50 px-4 py-2 rounded-md smooth-hover focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className="block text-gray-700 hover:text-primary hover:bg-indigo-50 px-4 py-2 rounded-md smooth-hover focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Expertise
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block text-gray-700 hover:text-primary hover:bg-indigo-50 px-4 py-2 rounded-md smooth-hover focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <Image
              src={`${BASE_PATH}/images/logo-1.png`}
              alt="Jack Dong's logo"
              width={40}
              height={40}
              className="relative rounded-full"
            />
          </div>
          <span className="text-2xl font-bold text-gradient-primary hover:opacity-80 smooth-hover">
            Jack Dong
          </span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a 
              href="#hero" 
              className="text-gray-700 hover:text-primary smooth-hover font-medium relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full smooth-hover"></span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary smooth-hover font-medium relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full smooth-hover"></span>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-primary smooth-hover font-medium relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full smooth-hover"></span>
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-primary smooth-hover font-medium relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Expertise
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full smooth-hover"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-primary smooth-hover font-medium relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full smooth-hover"></span>
            </a>
          </li>
        </ul>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}