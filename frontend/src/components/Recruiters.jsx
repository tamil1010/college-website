import React from 'react';

const recruiters = [
  { name: 'Cognizant', color: 'text-blue-500' },
  { name: 'ZOHO', color: 'text-red-500' },
  { name: 'TCS', color: 'text-blue-800' },
  { name: 'Tech Mahindra', color: 'text-red-700' },
  { name: 'TAFE', color: 'text-green-600' },
  { name: 'Polaris', color: 'text-blue-700' },
  { name: 'NOKIA', color: 'text-blue-900' },
  { name: 'InfoView', color: 'text-orange-500' },
  { name: 'Infosys', color: 'text-blue-500' },
  { name: 'IBM', color: 'text-blue-600' },
  { name: 'HCL', color: 'text-sky-600' },
  { name: 'CSS CORP', color: 'text-cyan-600' },
];

const Recruiters = () => {
  return (
    <section className="pt-16 bg-white overflow-hidden">
      <div className="container px-4 mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center relative max-w-fit mx-auto pb-6">
          Our Campus Recruiters
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-secondary"></span>
        </h2>
        <p className="text-center text-slate-400 mt-8 max-w-2xl mx-auto text-sm leading-relaxed">
          We pride ourselves on our strong industry connections. Our graduates are consistently<br className="hidden md:block"/> recruited by top-tier global organizations.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mb-16 mt-12">
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-5">
          {recruiters.map((recruiter, index) => (
            <div 
              key={`logo-${index}`}
              className="w-28 h-16 md:w-36 md:h-20 lg:w-40 lg:h-24 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className={`text-sm md:text-base lg:text-lg font-bold tracking-tight ${recruiter.color}`}>
                {recruiter.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stay connected section */}
      <div className="bg-[#0b0f19] border-t border-slate-700 w-full mt-20">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-center lg:justify-start lg:pl-48 gap-6 md:gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-slate-800/80 p-3 rounded-full shrink-0 border border-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div>
              <h3 className="text-white text-[16px] font-bold tracking-wide">Stay connected with GCEE</h3>
              <p className="text-[12px] text-slate-400 mt-1">Subscribe for the latest news, updates, and academic announcements.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full max-w-md ml-auto lg:mr-48">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent border border-slate-700 rounded-sm px-4 py-2.5 text-[13px] text-white focus:outline-none focus:border-secondary w-full"
            />
            <button className="bg-secondary hover:bg-secondary-hover text-slate-900 px-6 py-2.5 rounded-sm font-bold text-[13px] transition-all shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
