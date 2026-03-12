import React from "react";

const NewsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

        {/* Upcoming Events */}
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-white">
              Upcoming Events
            </h2>
            <div className="w-20 h-[3px] bg-yellow-400 mt-3"></div>
          </div>

          <div className="space-y-6">

            <div className="flex gap-5 items-start bg-[#0f172a] p-5 rounded-xl shadow-md border border-yellow-500/20 hover:border-yellow-400 transition">

              <div className="w-16 text-center rounded-lg overflow-hidden border border-yellow-500/30">
                <div className="bg-[#020617] text-yellow-400 text-xs py-1 uppercase">
                  Jul
                </div>
                <div className="py-2">
                  <div className="text-xl font-bold text-yellow-400">12</div>
                  <div className="text-xs text-gray-400">2025</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">
                  2000 Batch Silver Jubilee Meet
                </h4>

                <p className="text-sm text-gray-400">
                  GCEE Main Auditorium
                </p>
              </div>

            </div>

            <a
              href="/events"
              className="inline-flex items-center text-yellow-400 font-semibold text-sm hover:text-white transition"
            >
              View Event Calendar →
            </a>

          </div>
        </div>


        {/* Campus Focus */}
        <div>

          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-white">
              Campus Focus
            </h2>
            <div className="w-20 h-[3px] bg-yellow-400 mt-3"></div>
          </div>

          <div className="space-y-4">

            {[
              "Research & Development",
              "Industrial Collaboration",
              "Extracurricular Clubs"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-yellow-500/20 rounded-xl p-5 flex justify-between items-center hover:border-yellow-400 transition"
              >

                <span className="font-semibold text-white">
                  {item}
                </span>

                <span className="text-yellow-400">→</span>

              </div>
            ))}

          </div>

        </div>


        {/* Student Glory */}
        <div>

          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-white">
              Student Glory
            </h2>
            <div className="w-20 h-[3px] bg-yellow-400 mt-3"></div>
          </div>

          <div className="space-y-5">

            <div className="bg-gradient-to-br from-[#020617] to-[#0f172a] text-white p-6 rounded-xl shadow-lg border border-yellow-500/20">

              <h3 className="text-xl font-serif font-bold mb-2">
                Roll of Honour
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Celebrating academic excellence and university rank holders.
              </p>

              <span className="text-yellow-400 font-semibold text-sm">
                Meet our toppers →
              </span>

            </div>


            <div className="bg-[#0f172a] border border-yellow-500/20 p-6 rounded-xl hover:border-yellow-400 transition">

              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                Special Achievements
              </h3>

              <p className="text-sm text-gray-400">
                Sports, Hackathons and co-curricular awards.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsSection;