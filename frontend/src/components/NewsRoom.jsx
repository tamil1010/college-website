import React from "react";

const news = [
  {
    id: "01",
    title: "PRE-INCUBATION CENTRE AT GCE ERODE",
    text: "Our college has been sanctioned a Pre-Incubator by StartUpTN to support student innovation.",
    date: "Jul 15, 2025"
  },
  {
    id: "02",
    title: "LABMAN PROBE SONICATOR INSTALLED",
    text: "Mechanical department upgraded its facilities with a LABMAN Probe Sonicator.",
    date: "Jul 10, 2025"
  },
  {
    id: "03",
    title: "PROUD STUDENT PLACEMENT",
    text: "Our MEC(E) Student Vishwanmoorthy got placed in Sierra Support Centre Pvt Ltd.",
    date: "Jul 05, 2025"
  },
  {
    id: "04",
    title: "ECE STUDENTS PLACEMENT",
    text: "Students R. Gowtham and C.S. Ahana Priya got placed in Cadence Design.",
    date: "Jun 28, 2025"
  }
];

const NewsRoom = () => {
  return (
    <section className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] py-24 relative overflow-hidden">

      {/* background decoration */}
      <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-blue-900 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -left-32 w-[320px] h-[320px] bg-yellow-900 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Campus Updates
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            From Our News Room
          </h2>

          <div className="w-24 h-[3px] bg-yellow-400 mx-auto mt-4"></div>

        </div>

        {/* news container */}
        <div className="bg-[#0f172a] rounded-2xl shadow-xl border border-yellow-500/20 overflow-hidden">

          {/* header */}
          <div className="bg-[#020617] px-6 py-4 flex items-center justify-between border-b border-yellow-500/20">

            <h3 className="text-white text-xl font-serif font-semibold">
              Latest Announcements
            </h3>

            <span className="text-xs text-yellow-400 uppercase tracking-widest">
              GCE Erode
            </span>

          </div>

          {/* news list */}
          <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">

            {news.map((item, index) => (
              <div
                key={item.id}
                className="group flex gap-5 border-b border-slate-700 pb-5 last:border-0 hover:bg-[#020617] rounded-lg transition p-3"
              >

                {/* number */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#020617] border border-yellow-400 text-yellow-400 font-bold">
                  {index + 1}
                </div>

                {/* content */}
                <div className="flex-1">

                  <div className="flex justify-between flex-wrap gap-2 mb-2">

                    <h4 className="font-semibold text-white group-hover:text-yellow-400 transition">
                      {item.title}
                    </h4>

                    <span className="text-xs text-gray-400 bg-[#020617] px-2 py-1 rounded">
                      {item.date}
                    </span>

                  </div>

                  <p className="text-sm text-gray-400 mb-2">
                    {item.text}
                  </p>

                  <a
                    href={`/news/${item.id}`}
                    className="text-sm font-semibold text-yellow-400 hover:text-white transition"
                  >
                    Read More →
                  </a>

                </div>

              </div>
            ))}

          </div>

          {/* footer */}
          <div className="px-6 py-4 bg-[#020617] border-t border-yellow-500/20 flex justify-end">

            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition">
              View All News
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NewsRoom;