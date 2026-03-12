import React from "react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-gray-300 border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* About */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            About College
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Government College of Engineering (IRTT), Erode provides
            high quality engineering education with strong academic
            excellence, innovation culture, and industry collaboration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer transition">Admissions</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Departments</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Placements</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Facilities</li>
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            Downloads
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer transition">Academic Schedule</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Staff Forms</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Mandatory Disclosure</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-400">

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-yellow-400"/>
              Erode - 638316, Tamil Nadu
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-400"/>
              gceerode@yahoo.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-yellow-400"/>
              0424-2533948
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#020617] border-t border-yellow-500/20 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Government College of Engineering, Erode
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full shadow-lg transition"
      >
        <ArrowUp size={18}/>
      </button>

    </footer>
  );
};

export default Footer;