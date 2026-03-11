import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-[85vh] min-h-[600px] flex items-center text-white bg-primary bg-cover bg-center" 
      style={{ backgroundImage: "url('/campus_hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10"></div>
      <div className="container relative z-20 max-w-4xl">
        <span className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 animate-[fadeInDown_1s_ease]">
          Welcome to GCEE
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6 animate-[fadeInUp_1s_ease_0.2s_both]">
          Empowering the Future, Innovating the Present
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 animate-[fadeInUp_1s_ease_0.4s_both]">
          Government College of Engineering, Erode, established in 1984 under the auspices of the Institute of Road Transport, offers state-of-the-art education in engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_1s_ease_0.6s_both]">
          <a href="/admission" className="btn btn-primary w-full sm:w-auto">Apply Now</a>
          <a href="/overview" className="btn btn-secondary w-full sm:w-auto">Explore Campus</a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:flex absolute bottom-0 right-0 bg-white z-20 rounded-tl-lg overflow-hidden shadow-[-5px_-5px_15px_rgba(0,0,0,0.1)] animate-[slideInRight_1s_ease_0.8s_both]">
        <div className="p-6 text-center border-r border-slate-200 text-slate-800 hover:bg-primary hover:text-white transition-colors duration-300">
          <h3 className="font-sans text-3xl font-bold mb-1">1984</h3>
          <p className="text-sm font-medium opacity-80">Established</p>
        </div>
        <div className="p-6 text-center border-r border-slate-200 text-slate-800 hover:bg-primary hover:text-white transition-colors duration-300">
          <h3 className="font-sans text-3xl font-bold mb-1">Top 10</h3>
          <p className="text-sm font-medium opacity-80">Govt Colleges</p>
        </div>
        <div className="p-6 text-center border-r border-slate-200 text-slate-800 hover:bg-primary hover:text-white transition-colors duration-300">
          <h3 className="font-sans text-3xl font-bold mb-1">7+</h3>
          <p className="text-sm font-medium opacity-80">UG Programs</p>
        </div>
        <div className="p-6 text-center text-slate-800 hover:bg-primary hover:text-white transition-colors duration-300">
          <h3 className="font-sans text-3xl font-bold mb-1">95%</h3>
          <p className="text-sm font-medium opacity-80">Placement Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
