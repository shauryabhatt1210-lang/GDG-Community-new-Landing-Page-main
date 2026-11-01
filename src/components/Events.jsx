import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Users, ArrowRight, Clock, 
  Sparkles, Ticket, Check, BellRing, Blocks, 
  Award, Trophy, Gift, Zap, Laptop, Layers 
} from 'lucide-react';
import { eventsData } from '../data/communityData';

export const Events = ({ onOpenRSVPModal }) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // LegoFest is the ONE BIG FLAGSHIP EVENT
  const legoFestEvent = eventsData.find((e) => e.id === 1) || eventsData[0];
  // Rest of the events remain as they are
  const otherEvents = eventsData.filter((e) => e.id !== 1);

  // Live Countdown Timer for LegoFest 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="events" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
              <Calendar size={14} />
              <span>Flagship Gatherings &amp; Hackathons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Community Events &amp; Workshops
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Join hands-on software buildathons, codelabs, and tech sprints. Experience our flagship LegoFest 2026 mega-event and level up your engineering skills.
            </p>
          </motion.div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Upcoming ({eventsData.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'past'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Past Archives
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'upcoming' ? (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-14"
            >
              
              {/* ====================================================================== */}
              {/* THE ONE BIG FLAGSHIP EVENT: LEGOFEST 2026 (STYLED LIKE REFERENCE SHOT) */}
              {/* ====================================================================== */}
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FFD500] via-[#FFCC00] to-[#FFAE00] shadow-2xl shadow-amber-500/15 border border-amber-300/60 text-slate-900">
                
                {/* Subtle Geometric Skyline / Brick Pattern in Background */}
                <div 
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#000000 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="flex flex-col lg:flex-row min-h-[580px]">
                  
                  {/* Left Side: Sleek Dark Navy Vertical Dock / Activity Bar (Like Reference Shot) */}
                  <div className="w-full lg:w-20 bg-slate-950 flex lg:flex-col items-center justify-between p-4 border-b lg:border-b-0 lg:border-r border-slate-800 text-slate-400 flex-shrink-0 z-10">
                    {/* Top Iconic LEGO Red Brand Badge */}
                    <div className="w-12 h-12 rounded-xl bg-[#E3000B] flex items-center justify-center text-white font-black text-xs shadow-md tracking-tighter">
                      LEGO
                    </div>

                    {/* Middle Tool Icons */}
                    <div className="flex lg:flex-col items-center gap-4 text-slate-400">
                      <div className="p-2 rounded-xl bg-slate-900 text-amber-400 shadow-inner">
                        <Blocks size={18} />
                      </div>
                      <div className="p-2 rounded-xl hover:text-white transition-colors">
                        <Laptop size={18} />
                      </div>
                      <div className="p-2 rounded-xl hover:text-white transition-colors">
                        <Trophy size={18} />
                      </div>
                      <div className="p-2 rounded-xl hover:text-white transition-colors">
                        <Gift size={18} />
                      </div>
                    </div>

                    {/* Bottom LEGO Minifigure Smile Indicator */}
                    <div className="w-8 h-8 rounded-full bg-[#FFD500] text-slate-950 flex items-center justify-center font-bold text-xs shadow-sm">
                      ●‿●
                    </div>
                  </div>

                  {/* Center & Right: Main Showcase Content */}
                  <div className="flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10">
                    
                    {/* Top Row: Meta Badges + Date Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-950 text-white shadow-sm">
                          ANNUAL FLAGSHIP 2026
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E3000B] text-white shadow-sm">
                          COLLEGE WEB BUILDATHON
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-800 shadow-sm">
                          {legoFestEvent.seatsRemaining} Seats Left
                        </span>
                      </div>

                      {/* Date & Time pill */}
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                        <Calendar size={14} className="text-[#E3000B]" />
                        <span>Nov 28, 2026 • 9:00 AM - 6:00 PM</span>
                      </div>
                    </div>

                    {/* Middle Area: Massive 3D White Title + Smiling Minifigure Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
                      
                      {/* Left: Huge Bold 3D White Typography */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="text-xs font-black uppercase tracking-widest text-slate-800/80">
                          BUILD A LEGO-THEMED WEBSITE FOR COLLEGE
                        </div>

                        {/* GIANT BOLD 3D WHITE TITLE */}
                        <div className="relative">
                          <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] leading-none select-none">
                            LEGOFEST
                          </h3>
                          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2">
                            <span>2026 EDITION</span>
                            <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-[#E3000B] text-white">
                              COLLEGE SPRINT
                            </span>
                          </div>
                        </div>

                        {/* Short, crisp introduction */}
                        <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed max-w-lg">
                          Team up to design and develop playful, modular, LEGO-themed web platforms for our college campus. From student club hubs and digital noticeboards to gamified campus maps, assemble responsive web magic brick-by-brick!
                        </p>

                        {/* Venue & Perks */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-slate-800 pt-1">
                          <span className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-lg">
                            <MapPin size={15} className="text-[#E3000B]" />
                            <span className="text-slate-900 font-extrabold">Alan Turing Hall, MMMUT</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Trophy size={15} className="text-slate-900" />
                            <span>$3,500 Cash &amp; Collector LEGO Sets</span>
                          </span>
                        </div>

                        {/* Primary Action Button */}
                        <div className="pt-3 flex flex-wrap items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => onOpenRSVPModal(legoFestEvent)}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-black text-white bg-slate-950 hover:bg-slate-900 shadow-xl shadow-slate-950/25 transition-all"
                          >
                            <Ticket size={20} className="text-[#FFD500]" />
                            <span>Register For LegoFest (Free)</span>
                            <ArrowRight size={18} />
                          </motion.button>

                          <span className="text-xs font-bold text-slate-800">
                            Includes Custom Minifigure &amp; Lunch
                          </span>
                        </div>
                      </div>

                      {/* Right: Minifigure Character Illustration */}
                      <div className="lg:col-span-5 flex justify-center items-center relative">
                        <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[5/4] flex items-center justify-center">
                          <img
                            src={legoFestEvent.image}
                            alt="LEGO Minifigure Builder waving"
                            className="w-full h-full object-contain filter drop-shadow-2xl"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Bottom Area: 3 Modular Detail Pills + Tactile Countdown Timer */}
                    <div className="pt-8 border-t border-amber-400/60 mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      
                      {/* Left: 3 Modular Cards */}
                      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white/60">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-black uppercase text-slate-500">Track 01</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E3000B] text-white">CAMPUS</span>
                          </div>
                          <div className="text-xs font-black text-slate-900">College Web Portal</div>
                          <div className="text-[11px] text-slate-600">Lego-Themed Campus UI</div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white/60">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-black uppercase text-slate-500">Track 02</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#006CB7] text-white">WEB DEV</span>
                          </div>
                          <div className="text-xs font-black text-slate-900">Modern Web Sprints</div>
                          <div className="text-[11px] text-slate-600">React &amp; Tailwind Stack</div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white/60">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-black uppercase text-slate-500">Venue</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#00852B] text-white">OFFLINE</span>
                          </div>
                          <div className="text-xs font-black text-slate-900">Alan Turing Hall</div>
                          <div className="text-[11px] text-slate-600">MMMUT Campus Hub</div>
                        </div>
                      </div>

                      {/* Right: Tactile LEGO Countdown Timer Tile Block */}
                      <div className="md:col-span-5 bg-slate-950 text-white p-4 rounded-2xl shadow-xl border border-slate-800">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#FFD500] flex items-center gap-1.5">
                            <Clock size={13} />
                            <span>LegoFest Starts In</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">Alan Turing Hall • MMMUT</span>
                        </div>

                        {/* 4 Clean Countdown Tiles */}
                        <div className="grid grid-cols-4 gap-2 text-center font-mono">
                          <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                            <span className="block text-xl sm:text-2xl font-black text-white leading-none">
                              {timeLeft.days}
                            </span>
                            <span className="text-[9px] text-slate-400 uppercase font-sans font-bold">Days</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                            <span className="block text-xl sm:text-2xl font-black text-white leading-none">
                              {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                            <span className="text-[9px] text-slate-400 uppercase font-sans font-bold">Hours</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                            <span className="block text-xl sm:text-2xl font-black text-white leading-none">
                              {String(timeLeft.minutes).padStart(2, '0')}
                            </span>
                            <span className="text-[9px] text-slate-400 uppercase font-sans font-bold">Mins</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                            <span className="block text-xl sm:text-2xl font-black text-amber-400 leading-none">
                              {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                            <span className="text-[9px] text-slate-400 uppercase font-sans font-bold">Secs</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>


              {/* ======================================================== */}
              {/* REST OF THE EVENTS (AS THEY ARE)                         */}
              {/* ======================================================== */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      More Upcoming Workshops &amp; Sprints
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Weekly study jams, codelabs, and deep-dive technical talks.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {otherEvents.length} Sessions Available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        {/* 16:9 Event Poster Visual */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                          <img
                            src={event.image}
                            alt={`${event.title} conference poster`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          
                          {/* Badge Pill Overlay */}
                          <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
                            {event.badge}
                          </div>

                          {/* Seats Badge */}
                          <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span>{event.seatsRemaining} seats</span>
                          </div>

                          {/* Date Badge in Corner */}
                          <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2 border border-slate-200/60 dark:border-slate-700/60 shadow-lg text-center min-w-[55px]">
                            <div className="text-[10px] font-extrabold uppercase text-rose-600 dark:text-rose-400">
                              {event.date.month}
                            </div>
                            <div className="text-lg font-black text-slate-900 dark:text-white leading-none font-mono">
                              {event.date.day}
                            </div>
                          </div>
                        </div>

                        {/* Event Details Content */}
                        <div className="p-5">
                          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                            <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold truncate">
                              <Sparkles size={13} />
                              {event.type}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                            {event.title}
                          </h4>

                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1.5 truncate">
                              <Clock size={13} className="text-slate-400 flex-shrink-0" />
                              <span>{event.date.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5 truncate">
                              <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                              <span>{event.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="px-5 py-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500 truncate max-w-[120px]">
                          {event.speakers}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onOpenRSVPModal(event)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                        >
                          <Ticket size={14} />
                          <span>RSVP Free</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ) : (
            /* Past Highlights Tab Content */
            <motion.div
              key="past"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 mx-auto flex items-center justify-center">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Over 30+ Archived Workshops &amp; LegoFests
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                Missed a past session? All slide decks, codelab GitHub repos, and video replays are archived on our YouTube and Community Drive for all registered members.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('upcoming')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 transition-colors"
              >
                <span>Back to Upcoming Events</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
