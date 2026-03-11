import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-primary text-white text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91-424-2533279</span>
            <span className="flex items-center gap-2"><Mail size={14} /> principal@gcee.ac.in</span>
          </div>
          <div className="flex gap-6">
            <Link to="/alumni" className="hover:text-secondary transition-colors">Alumni</Link>
            <Link to="/library" className="hover:text-secondary transition-colors">Library</Link>
            <Link to="/nirf" className="hover:text-secondary transition-colors">NIRF</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
      
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 glass' : 'bg-white shadow-sm'}`}>
        <div className="container flex justify-between items-center py-4 px-4 lg:py-0">
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-md">GCEE</div>
            <div>
              <h1 className="text-xl font-bold font-serif text-primary leading-tight m-0">Government College of Engineering, Erode</h1>
              <p className="text-xs text-slate-500 font-medium m-0">Approved by AICTE | Affiliated to Anna University</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sm font-semibold text-slate-800 py-6 relative outline-none hover:text-primary transition-colors group">Home
                <span className="absolute bottom-6 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
            <div className="group relative py-6">
              <a href="#about" className="flex items-center gap-1 text-sm font-semibold text-slate-800 outline-none hover:text-primary transition-colors">About Us <ChevronDown size={14} /></a>
              <div className="dropdown-menu absolute top-full left-0 bg-white min-w-[200px] shadow-lg rounded-md opacity-0 invisible translate-y-3 transition-all duration-300 flex flex-col z-50">
                <Link to="/overview" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Overview</Link>
                <Link to="/principal" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Principal</Link>
                <Link to="/gallery" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Gallery</Link>
                <Link to="/fees" className="px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Fees Details</Link>
              </div>
            </div>
            <div className="group relative py-6">
              <a href="#academics" className="flex items-center gap-1 text-sm font-semibold text-slate-800 outline-none hover:text-primary transition-colors">Academics <ChevronDown size={14} /></a>
              <div className="dropdown-menu absolute top-full left-0 bg-white min-w-[200px] shadow-lg rounded-md opacity-0 invisible translate-y-3 transition-all duration-300 flex flex-col z-50">
                <Link to="/ug-courses" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">UG Courses</Link>
                <Link to="/pg-courses" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">PG Courses</Link>
                <Link to="/science-humanities" className="px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Science & Humanities</Link>
              </div>
            </div>
            <Link to="/admission" className="text-sm font-semibold text-slate-800 py-6 relative outline-none hover:text-primary transition-colors group">Admission
                <span className="absolute bottom-6 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
            <div className="group relative py-6">
              <a href="#campus" className="flex items-center gap-1 text-sm font-semibold text-slate-800 outline-none hover:text-primary transition-colors">Campus <ChevronDown size={14} /></a>
              <div className="dropdown-menu absolute top-full left-0 bg-white min-w-[200px] shadow-lg rounded-md opacity-0 invisible translate-y-3 transition-all duration-300 flex flex-col z-50">
                <Link to="/campus-events" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Campus Events</Link>
                <Link to="/student-clubs" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Student Clubs</Link>
                <Link to="/nss" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">NSS</Link>
                <Link to="/hostel" className="px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Hostels</Link>
              </div>
            </div>
            <div className="group relative py-6">
              <a href="#cells" className="flex items-center gap-1 text-sm font-semibold text-slate-800 outline-none hover:text-primary transition-colors">Cells & Committees <ChevronDown size={14} /></a>
              <div className="dropdown-menu absolute top-full left-0 bg-white min-w-[200px] shadow-lg rounded-md opacity-0 invisible translate-y-3 transition-all duration-300 flex flex-col z-50">
                <Link to="/grievance" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Grievance Redressal</Link>
                <Link to="/anti-ragging" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Anti Ragging</Link>
                <Link to="/counselling" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Student Counselling</Link>
                <Link to="/industry-cell" className="px-6 py-3 text-sm font-medium text-slate-800 border-b border-slate-200 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Institution-Industry Cell</Link>
                <Link to="/r-and-d" className="px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-primary hover:pl-8 transition-all">Research and Development</Link>
              </div>
            </div>
          </nav>

          <button className="lg:hidden text-primary focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-4 py-4 shadow-inner border-t border-slate-100">
            <ul className="flex flex-col gap-4">
                <li><Link to="/" className="block font-semibold text-slate-800 pb-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="block font-semibold text-slate-800 pb-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/academics" className="block font-semibold text-slate-800 pb-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>Academics</Link></li>
                <li><Link to="/admission" className="block font-semibold text-slate-800 pb-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>Admission</Link></li>
                <li><Link to="/campus" className="block font-semibold text-slate-800 pb-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>Campus</Link></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
