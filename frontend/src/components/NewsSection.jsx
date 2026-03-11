import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, ChevronRight, Award, Megaphone } from 'lucide-react';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Attempting to fetch from backend, fallback to mock data if it fails
    const fetchData = async () => {
      try {
        const newsRes = await axios.get('http://localhost:5000/api/news');
        setNews(newsRes.data);
      } catch (err) {
        setNews([
          { _id: '1', title: 'Pre-Incubation Centre Inaugurated at GCE Erode', date: new Date().toISOString(), isNew: true },
          { _id: '2', title: 'LABMAN Probe Sonicator at Mechanical Department', date: new Date(Date.now() - 86400000).toISOString(), isNew: true },
          { _id: '3', title: 'Congratulation to the students placed in TCS (July 2024)', date: new Date(Date.now() - 5 * 86400000).toISOString(), isNew: false },
          { _id: '4', title: '1998 Batch Alumni Silver Jubilee Meet', date: new Date(Date.now() - 10 * 86400000).toISOString(), isNew: false }
        ]);
      }

      try {
        const eventsRes = await axios.get('http://localhost:5000/api/events');
        setEvents(eventsRes.data);
      } catch (err) {
        setEvents([
          { _id: '1', title: 'National Level Technical Symposium', eventDate: new Date(Date.now() + 5 * 86400000).toISOString() },
          { _id: '2', title: 'Workshop on AI and Machine Learning', eventDate: new Date(Date.now() + 12 * 86400000).toISOString() },
          { _id: '3', title: 'Annual Sports Meet 2024', eventDate: new Date(Date.now() + 20 * 86400000).toISOString() }
        ]);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-20 bg-slate-50" id="news-events">
      <div className="container">
        <h2 className="title-underline">Latest Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* News Room Column */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary flex flex-col hover:-translate-y-1">
            <div className="bg-primary text-white p-4 flex items-center gap-3">
              <Megaphone className="text-secondary" size={24} />
              <h3 className="text-xl font-sans font-semibold m-0">From Our News Room</h3>
            </div>
            <div className="p-6 flex-grow custom-scrollbar overflow-y-auto max-h-[350px]">
              <ul className="flex flex-col gap-5">
                {news.map((item, index) => (
                  <li key={item._id} className={`${index !== news.length - 1 ? 'border-b border-dashed border-slate-200 pb-5' : ''}`}>
                    <div className="flex items-center gap-3 mb-2 text-xs text-slate-500">
                      <span>{formatDate(item.date)}</span>
                      {item.isNew && <span className="bg-red-500 text-white px-2 py-0.5 rounded-full font-semibold animate-pulse">New</span>}
                    </div>
                    <a href={item.link || '#'} className="font-semibold text-slate-800 leading-snug hover:text-primary-light block">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <a href="/news" className="flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-secondary">View All News <ChevronRight size={16} /></a>
            </div>
          </div>

          {/* Events Column */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary flex flex-col hover:-translate-y-1">
            <div className="bg-primary text-white p-4 flex items-center gap-3">
              <Calendar className="text-secondary" size={24} />
              <h3 className="text-xl font-sans font-semibold m-0">Upcoming Events</h3>
            </div>
            <div className="p-6 flex-grow">
              <ul className="flex flex-col gap-5">
                {events.map((item, index) => (
                  <li key={item._id} className={`flex gap-4 items-center ${index !== events.length - 1 ? 'border-b border-dashed border-slate-200 pb-5' : ''}`}>
                    <div className="bg-slate-50 border border-slate-200 rounded-md min-w-[60px] text-center p-2 flex flex-col">
                      <span className="text-2xl font-bold text-primary leading-none">{new Date(item.eventDate).getDate()}</span>
                      <span className="text-xs uppercase font-semibold text-secondary">{new Date(item.eventDate).toLocaleString('default', { month: 'short' })}</span>
                    </div>
                    <div>
                      <a href={`/events/${item._id}`} className="font-semibold text-slate-800 leading-snug hover:text-primary-light block">{item.title}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 mt-auto">
              <a href="/events" className="flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-secondary">View All Events <ChevronRight size={16} /></a>
            </div>
          </div>

          {/* Achievements Column */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary flex flex-col hover:-translate-y-1">
            <div className="bg-primary text-white p-4 flex items-center gap-3">
              <Award className="text-secondary" size={24} />
              <h3 className="text-xl font-sans font-semibold m-0">Student Achievements</h3>
            </div>
            <div className="p-6 flex-grow text-center">
              <div>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Students" className="w-full h-[180px] object-cover rounded-md mb-4" />
                <h4 className="text-lg font-bold text-primary mb-2">TCS Placements 2024</h4>
                <p className="text-sm text-slate-500">Congratulations to the 150+ students placed in top MNCs this academic year!</p>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 mt-auto">
              <a href="/achievements" className="flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-secondary">View All Achievements <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
