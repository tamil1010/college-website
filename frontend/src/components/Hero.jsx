import React from "react";
import campusBg from "../assets/campus_bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${campusBg})` }}
      ></div>

      {/* Softer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-[#0f172a]/60 to-[#020617]/50"></div>

      {/* Decorative lines */}
      <div className="absolute top-20 left-10 w-40 h-[1px] bg-yellow-400/60"></div>
      <div className="absolute bottom-20 right-10 w-40 h-[1px] bg-yellow-400/60"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl px-6 text-white">

        {/* Tag line */}
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
          <div className="w-16 h-[2px] bg-yellow-400"></div>

          <span className="uppercase tracking-[0.25em] text-yellow-400 text-sm font-semibold">
            Excellence in Engineering Education
          </span>

          <div className="w-16 h-[2px] bg-yellow-400 hidden md:block"></div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
          Government College
          <br />
          <span className="text-yellow-400">
            of Engineering, Erode
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 border-l-4 border-yellow-400 pl-6">
          Established in 1984 under the Institute of Road Transport,
          the institution provides high quality engineering education,
          research innovation and professional excellence for future leaders.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded shadow-lg hover:bg-yellow-400 transition">
            Apply Now
          </button>

          <button className="border border-white/40 px-8 py-3 rounded backdrop-blur hover:bg-white/10 transition flex items-center gap-2">
            Explore Campus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h16" />
            </svg>
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center md:text-left">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">40+</h2>
            <p className="text-sm text-gray-400">Years of Excellence</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">8</h2>
            <p className="text-sm text-gray-400">Engineering Departments</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">5000+</h2>
            <p className="text-sm text-gray-400">Students</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">90%</h2>
            <p className="text-sm text-gray-400">Placement Rate</p>
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth"
          })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
      >
        <span className="text-xs text-yellow-400 uppercase tracking-widest mb-2">
          Scroll
        </span>

        <div className="w-[2px] h-12 bg-gradient-to-b from-yellow-400 to-transparent"></div>
      </div>

    </section>
  );
};

export default Hero;