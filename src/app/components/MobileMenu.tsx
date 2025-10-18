'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BASE_PATH } from '@/lib/config';

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
    <div className="md:hidden bg-white shadow-md" role="region" aria-label="Mobile navigation">
      <ul className="flex flex-col space-y-4 px-4 py-4">
        <li>
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="block hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="block hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className="block hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Expertise
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center" aria-label="Main navigation">
        <div className="flex items-center gap-2">
          <Image
            src={`${BASE_PATH}/images/logo-1.png`}
            alt="Jack Dong's logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-secondary">Jack Dong</span>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">About</a></li>
          <li><a href="#projects" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Portfolio</a></li>
          <li><a href="#skills" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Expertise</a></li>
          <li><a href="#contact" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Contact</a></li>
        </ul>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}