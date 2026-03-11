import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram, GraduationCap, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto relative bg-slate-950 text-slate-300 font-sans border-t border-slate-800 overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]"></div>

      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Locate Us Column */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:border-b after:border-dashed after:border-secondary/60">Locate Us</h3>
          <ul className="flex flex-col mt-4">
            {['GCEE IN GOOGLE MAP', 'HOW TO REACH GCEE'].map((item, i) => (
              <li key={i} className="border-b border-slate-800/50 last:border-0 hover:bg-slate-900/40 transition-colors">
                <Link to="/" className="group flex items-center py-3.5 text-[13px] font-medium text-slate-400 hover:text-white transition-all px-2">
                  <span className="text-secondary mr-2 text-lg leading-none group-hover:text-primary group-hover:translate-x-1 transition-all">&raquo;</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Downloads Column */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:border-b after:border-dashed after:border-secondary/60">Downloads</h3>
          <ul className="flex flex-col mt-4">
            {['ACADEMIC SCHEDULE', 'STAFF FORMS'].map((item, i) => (
              <li key={i} className="border-b border-slate-800/50 last:border-0 hover:bg-slate-900/40 transition-colors">
                <Link to="/" className="group flex items-center py-3.5 text-[13px] font-medium text-slate-400 hover:text-white transition-all px-2">
                  <span className="text-secondary mr-2 text-lg leading-none group-hover:text-primary group-hover:translate-x-1 transition-all">&raquo;</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links Column */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:border-b after:border-dashed after:border-secondary/60">Quick Links</h3>
          <ul className="flex flex-col mt-4">
            {['MANDATORY DISCLOSURE', 'HELP DESK', 'EDC', 'IPDC', 'GCEE MAIL', 'NPTEL', 'GCEE EXAM CELL', 'GCEE(IRTT) ALUMNI'].map((item, i) => (
              <li key={i} className="border-b border-slate-800/50 last:border-0 hover:bg-slate-900/40 transition-colors">
                <Link to="/" className="group flex items-center py-2.5 text-[13px] font-medium text-slate-400 hover:text-white transition-all px-2">
                  <span className="text-secondary mr-2 text-lg leading-none group-hover:text-primary group-hover:translate-x-1 transition-all">&raquo;</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Us Column */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:border-b after:border-dashed after:border-secondary/60">Contact Us</h3>
          
          <div className="flex flex-col gap-4 text-[13px] text-slate-400 mt-4">
            <p className="leading-relaxed px-2 font-medium text-slate-300">
              Government College of Engineering(IRTT),<br/>
              Erode - 638 316,<br/>
              Tamilnadu, India.
            </p>
            
            <a href="mailto:gceeprincipal@gmail.com" className="flex items-center gap-2 text-[#00ffff] hover:text-white transition-colors px-2 font-medium">
              <Mail size={16} className="shrink-0" />
              <span>gceeprincipal@gmail.com</span>
            </a>
            
            <div className="flex flex-col gap-3 mt-1 px-2 border-t border-slate-800/50 pt-4">
              <div className="flex items-start gap-3 group hover:text-slate-200 transition-colors cursor-pointer">
                <div className="bg-slate-800/80 p-1.5 rounded-md group-hover:bg-primary transition-colors text-secondary group-hover:text-white shrink-0 mt-0.5">
                  <Phone size={12} />
                </div>
                <span className="mt-1">Principal: 9280091825</span>
              </div>
              <div className="flex items-start gap-3 group hover:text-slate-200 transition-colors cursor-pointer">
                <div className="bg-slate-800/80 p-1.5 rounded-md group-hover:bg-primary transition-colors text-secondary group-hover:text-white shrink-0 mt-0.5">
                  <Phone size={12} />
                </div>
                <span className="mt-1">Help Desk: 9280091826, +91 0424 2533579</span>
              </div>
              <div className="flex items-start gap-3 group hover:text-slate-200 transition-colors cursor-pointer">
                <div className="bg-slate-800/80 p-1.5 rounded-md group-hover:bg-primary transition-colors text-secondary group-hover:text-white shrink-0 mt-0.5">
                  <Phone size={12} />
                </div>
                <span className="mt-1">Students Admission : 9280091827</span>
              </div>
              <div className="flex items-start gap-3 group hover:text-slate-200 transition-colors cursor-pointer">
                <div className="bg-slate-800/80 p-1.5 rounded-md group-hover:bg-primary transition-colors text-secondary group-hover:text-white shrink-0 mt-0.5">
                  <Phone size={12} />
                </div>
                <span className="mt-1">Accounts Office: 9280091828</span>
              </div>
              <div className="flex items-start gap-3 group hover:text-slate-200 transition-colors cursor-pointer">
                <div className="bg-slate-800/80 p-1.5 rounded-md group-hover:bg-primary transition-colors text-secondary group-hover:text-white shrink-0 mt-0.5">
                  <Phone size={12} />
                </div>
                <span className="mt-1">Exam Cell: 9280091829</span>
              </div>
              <div className="flex items-start gap-3 group hover:text-slate-200 transition-colors cursor-pointer">
                <div className="bg-slate-800/80 p-1.5 rounded-md group-hover:bg-primary transition-colors text-secondary group-hover:text-white shrink-0 mt-0.5">
                  <Phone size={12} />
                </div>
                <span className="mt-1">Placement Cell: 9280091830</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Legal / Credits Bar */}
      <div className="bg-[#0b0f19] py-6 relative border-t border-slate-800/50 shadow-inner">
        <div className="container flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
          
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="text-[13px] tracking-wide">
              <span className="text-slate-400">Designed & Maintained By:</span> <span className="text-secondary font-medium">GCEE Website Administrators, Department of IT, GCE, Erode</span>
            </div>
            <div className="text-[12px] text-slate-500">
              Copyright &copy; {new Date().getFullYear()} - All Rights Reserved By <span className="text-slate-300 font-semibold">GCE, Erode</span>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 mt-1 text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
              <a href="#" className="hover:text-secondary transition-colors">Anti-Ragging Committee</a>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <a href="#" className="hover:text-secondary transition-colors">Grievance Redressal : B.E/B.Tech</a>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <span className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer">
                Visit Anti-Ragging Site <span className="text-secondary mx-1">|</span> 1800-180-5522 (Toll Free)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop} 
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-md hover:-translate-y-1" 
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="group-hover:animate-bounce" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
