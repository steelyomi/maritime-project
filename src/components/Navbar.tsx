"use client";

import { useState, useEffect } from "react";
import { Menu, X, Anchor } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Ports", href: "#ports" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a2342] shadow-lg py-3"
          : "bg-[#0a2342]/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c9a84c] rounded-full flex items-center justify-center">
              <Anchor className="w-5 h-5 text-[#0a2342]" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                Mariplus
              </p>
              <p className="text-[#c9a84c] text-xs font-medium tracking-wide">
                Services Limited
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-200 hover:text-[#c9a84c] text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#c9a84c] hover:bg-[#f0d080] text-[#0a2342] px-5 py-2 rounded-full text-sm font-bold transition-colors duration-200 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a2342] border-t border-[#c9a84c]/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-200 hover:text-[#c9a84c] text-base font-medium transition-colors text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="bg-[#c9a84c] hover:bg-[#f0d080] text-[#0a2342] px-5 py-2 rounded-full text-sm font-bold transition-colors mt-2 w-full cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}
