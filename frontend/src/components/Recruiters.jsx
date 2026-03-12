import React, { useState } from "react";

import cognizant from "../assets/recruiters/cognizant.png";
import zoho from "../assets/recruiters/zoho.png";
import tcs from "../assets/recruiters/tcs.png";
import techmahindra from "../assets/recruiters/techmahindra.png";
import tafe from "../assets/recruiters/tafe.png";
import polaris from "../assets/recruiters/polaris.png";
import nokia from "../assets/recruiters/nokia.png";
import infoview from "../assets/recruiters/infoview.png";
import infosys from "../assets/recruiters/infosys.png";
import ibm from "../assets/recruiters/ibm.png";
import hcl from "../assets/recruiters/hcl.png";
import csscorp from "../assets/recruiters/csscorp.png";
import capgemini from "../assets/recruiters/capgemini.png";
import cadence from "../assets/recruiters/cadence.png";
import hexaware from "../assets/recruiters/hexaware.png";

const recruiters = [
  cognizant,
  zoho,
  tcs,
  techmahindra,
  tafe,
  polaris,
  nokia,
  infoview,
  infosys,
  ibm,
  hcl,
  csscorp,
  capgemini,
  cadence,
  hexaware
];

const Recruiters = () => {

  const [selectedLogo, setSelectedLogo] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-serif text-white font-bold">
            Our Campus Recruiters
          </h2>

          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Top multinational companies recruit our students every year,
            proving the strong academic foundation of GCE Erode.
          </p>

        </div>


        {/* Recruiter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {recruiters.map((logo, index) => (

            <div
              key={index}
              onClick={() => setSelectedLogo(logo)}
              className="cursor-pointer bg-[#0f172a] border border-yellow-500/20 rounded-xl p-8 flex items-center justify-center shadow-lg hover:border-yellow-400 hover:-translate-y-2 hover:shadow-yellow-400/20 transition duration-300"
            >

              <img
                src={logo}
                alt="Recruiter"
                className="h-14 object-contain hover:scale-110 transition duration-300"
              />

            </div>

          ))}

        </div>

      </div>


      {/* Popup Modal */}
      {selectedLogo && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="relative bg-[#0f172a] border border-yellow-500/20 rounded-xl p-10 shadow-2xl">

            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-500"
            >
              ✕
            </button>

            <img
              src={selectedLogo}
              alt="Recruiter"
              className="max-h-[220px] object-contain"
            />

          </div>

        </div>

      )}

    </section>
  );
};

export default Recruiters;