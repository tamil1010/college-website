import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsRoom from "./components/NewsRoom";
import NewsSection from "./components/NewsSection";
import Recruiters from "./components/Recruiters";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <NewsRoom />
      <NewsSection />

      <section className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] py-20">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
      Welcome to Government College of Engineering, Erode
    </h2>

    <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-4 mb-6"></div>

    <p className="text-gray-400 leading-relaxed">
      Government College of Engineering, Erode is an Autonomous Institution,
      Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai.
      The institute provides an excellent environment for learning engineering
      and technology with highly qualified faculty members and state-of-the-art
      laboratory facilities.
    </p>

  </div>

</section>

      <Recruiters />
    </>
  );
}

function DefaultPage({ title }) {
  return (
    <div className="py-20 min-h-[50vh] flex items-center justify-center bg-slate-50">
      <div className="max-w-3xl text-center px-4">

        <h1 className="text-5xl font-serif text-blue-700 mb-4">
          {title}
        </h1>

        <p className="text-xl text-slate-500 mb-8">
          This section is currently under construction.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <Header />

        <main className="flex-1">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<DefaultPage title="About Us" />} />
            <Route path="/overview" element={<DefaultPage title="Overview" />} />
            <Route path="/principal" element={<DefaultPage title="Principal's Desk" />} />
            <Route path="/admission" element={<DefaultPage title="Admissions" />} />
            <Route path="/academics" element={<DefaultPage title="Academics" />} />
            <Route path="/campus" element={<DefaultPage title="Campus Life" />} />
            <Route path="/contact" element={<DefaultPage title="Contact Us" />} />

            <Route path="*" element={<DefaultPage title="Page Not Found" />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;