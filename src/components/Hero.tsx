"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a2342 0%, #0e3d6b 40%, #0e6b8c 100%)",
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#c9a84c", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#0e6b8c", filter: "blur(100px)" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Wave shape at bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.06"
          />
          <path
            d="M0,100 C480,60 960,120 1440,80 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.04"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#c9a84c]/40 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Licensed Maritime Services
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
          Navigating Nigerian
          <br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #c9a84c, #f0d080)" }}>
            Ports with Precision
          </span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Mariplus Services Limited delivers comprehensive maritime and logistics
          solutions — from vessel arrival to final cargo delivery — with
          accountability, speed, and commercial discipline across all major
          Nigerian ports.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#c9a84c] hover:bg-[#f0d080] text-[#0a2342] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-[#c9a84c]/30 cursor-pointer"
          >
            Explore Our Services
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 border border-white/30 cursor-pointer"
          >
            Get a Proposal
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-16 pt-10 border-t border-white/10 animate-fade-in-up delay-500">
          {[
            { value: "5+", label: "Major Ports Covered" },
            { value: "72hr", label: "Reefer Container Target" },
            { value: "100%", label: "Licensed & Compliant" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#c9a84c] transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
