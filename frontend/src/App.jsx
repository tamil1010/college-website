import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import Recruiters from './components/Recruiters';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      {/* Additional sections can be added here like Academics, Departments, etc */}
      <section className="py-20 text-center bg-white">
        <div className="container">
          <h2 className="title-underline">Welcome to GCEE Virtual Tour</h2>
          <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed mt-12">
            Government College of Engineering, Erode is an Autonomous Institution, Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai. The institute provides an excellent environment for learning engineering and technology with highly qualified faculty members and state-of-the-art laboratory facilities.
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
      <div className="container text-center">
        <h1 className="text-5xl font-serif text-primary mb-4">{title}</h1>
        <p className="text-xl text-slate-500 mb-8">This section is currently under construction.</p>
        <a href="/" className="btn btn-primary mt-8">Go Back Home</a>
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
            {/* Catch all */}
            <Route path="*" element={<DefaultPage title="Page Not Found" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
