import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang } from '../i18n.tsx';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, toggleLang } = useLang();

  const navLinks = [
    { id: 'home', name: t.nav.home },
    { id: 'about', name: t.nav.about },
    { id: 'skills', name: t.nav.skills },
    { id: 'work', name: t.nav.work },
    { id: 'contact', name: t.nav.contact },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Language switch: shows the language you would switch to
  const langButton = (
    <button
      onClick={toggleLang}
      aria-label={t.nav.switchLabel}
      title={t.nav.switchLabel}
      className="min-w-9 h-8 px-2.5 rounded-full border border-[#151515] text-[#151515] text-xs font-bold hover:bg-[#151515] hover:text-white transition-colors cursor-pointer"
    >
      {t.nav.switchTo}
    </button>
  );

  return (
    <header className="w-full pt-6 pb-4 select-none">
      <div className="flex items-center justify-between">
        {/* Brand Logo — always Latin, so keep it LTR */}
        <a
          href="#home"
          dir="ltr"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="text-2xl font-black tracking-tight flex items-baseline transition-opacity hover:opacity-85"
        >
          <span className="text-[#151515]">MSF</span>
          <span className="text-[#F36B21] text-3xl leading-none">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#222]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, `#${link.id}`)}
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-[#F36B21] font-semibold' : 'text-[#2D2D2D] hover:text-[#151515]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <BrushUnderline className="w-5" />
                  </span>
                )}
              </a>
            );
          })}

          {/* Let's Talk Button with Arrow */}
          <div className="flex items-center gap-1.5 ms-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="bg-[#151515] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-black transition-colors shadow-xs"
            >
              {t.nav.talk}
            </a>
            <span className="inline-block text-[#F36B21] text-sm font-bold select-none rtl:-scale-x-100">
              →
            </span>
          </div>

          {langButton}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          {langButton}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="bg-[#151515] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            {t.nav.talk}
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#151515] rounded-md hover:bg-black/5"
            aria-label={t.nav.menu}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white rounded-2xl border border-[#EAE5E1] shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, `#${link.id}`)}
                  className={`py-1.5 px-2 rounded-lg flex items-center justify-between ${
                    isActive
                      ? 'text-[#F36B21] font-semibold bg-[#FFF3EB]'
                      : 'text-[#333] hover:bg-gray-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F36B21]" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
