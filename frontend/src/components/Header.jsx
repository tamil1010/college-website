import React, { useState, useEffect } from "react";
import collegeLogo from "../assets/college_logo.png";
import tnLogo from "../assets/tn_logo.png";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 font-serif">

      {/* Top Bar */}
      <div className="bg-[#020617] text-gray-300 text-xs py-2 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto flex justify-between px-4">

          <div className="flex gap-4">
            <a href="mailto:gceerode@yahoo.com" className="hover:text-yellow-400 transition">
              gceerode@yahoo.com
            </a>

            <span className="text-gray-500">|</span>

            <a href="tel:+914242533948" className="hover:text-yellow-400 transition">
              0424-2533948
            </a>
          </div>

          <div className="flex gap-4">
            <a href="/admissions" className="text-yellow-400 hover:text-white transition">
              Admissions 2025
            </a>

            <span className="text-gray-500">|</span>

            <a href="/login" className="hover:text-yellow-400 transition">
              Student Login
            </a>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 bg-[#020617]/95 backdrop-blur-md shadow-xl py-2 border-b border-yellow-500/20"
            : "relative bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* Logo */}
          <div className="flex items-center gap-4">

            <img
              src={collegeLogo}
              alt="College Logo"
              className="w-14 h-14 object-contain"
            />

            <div className="text-white leading-tight">
              <h1 className="text-xl font-bold tracking-wide">
                Government College of Engineering
              </h1>

              <p className="text-xs text-gray-400">
                Affiliated to Anna University
              </p>
            </div>

          </div>

          {/* Menu */}
          <nav className="hidden lg:flex gap-8 text-sm text-gray-300 font-semibold">

            <a className="hover:text-yellow-400 transition">HOME</a>
            <a className="hover:text-yellow-400 transition">ABOUT</a>
            <a className="hover:text-yellow-400 transition">ACADEMICS</a>
            <a className="hover:text-yellow-400 transition">PLACEMENT</a>
            <a className="hover:text-yellow-400 transition">FACILITIES</a>
            <a className="hover:text-yellow-400 transition">ALUMNI</a>

            <a className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400 transition">
              CONTACT
            </a>

          </nav>

          {/* TN Logo */}
          <img
            src={tnLogo}
            alt="TN Logo"
            className="w-14 h-14 hidden md:block object-contain"
          />

        </div>
      </div>

    </header>
  );
};

export default Header;