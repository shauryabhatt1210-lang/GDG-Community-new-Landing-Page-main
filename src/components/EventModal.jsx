import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Ticket, Calendar, MapPin, CheckCircle2, 
  Sparkles, ExternalLink, Download, Clock, Blocks 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const EventModal = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dietaryOrNotes: ''
  });
  const [ticket, setTicket] = useState(null);

  if (!event) return null;

  const isLegoEvent = event.title.toLowerCase().includes('lego');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      confetti({
        particleCount: isLegoEvent ? 120 : 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: isLegoEvent ? ['#E3000B', '#FFE800', '#006CB7', '#00852B'] : undefined
      });
    } catch (err) {}

    const ticketNumber = (isLegoEvent ? 'LEGO-' : 'TICK-') + Math.floor(10000 + Math.random() * 90000);
    setTicket({
      ticketNumber,
      name: formData.name,
      email: formData.email,
      eventTitle: event.title,
      eventDate: event.date.fullDate,
      eventTime: event.date.time,
      venue: event.venue
    });
  };

  const handleReset = () => {
    setTicket(null);
    setFormData({ name: '', email: '', dietaryOrNotes: '' });
    onClose();
  };

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.venue);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <AnimatePresence>
      {event && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border shadow-2xl overflow-hidden p-6 sm:p-8 z-10 ${
              isLegoEvent ? 'border-[#E3000B]' : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Top Accent Line */}
            {isLegoEvent ? (
              <div className="absolute top-0 left-0 right-0 h-2 grid grid-cols-4">
                <div className="bg-[#E3000B]" />
                <div className="bg-[#FFE800]" />
                <div className="bg-[#006CB7]" />
                <div className="bg-[#00852B]" />
              </div>
            ) : (
              <div className="absolute top-0 left-0 right-0 h-1.5 google-bar" />
            )}

            {!ticket ? (
              /* Step 1: RSVP Form */
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider">
                  {isLegoEvent ? (
                    <span className="text-[#E3000B] flex items-center gap-1.5 font-black">
                      <Blocks size={16} />
                      <span>LEGOFEST BUILDATHON PASS</span>
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <Ticket size={16} />
                      <span>EVENT RSVP &amp; REGISTRATION</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
                  {event.title}
                </h3>

                {/* Event Summary Pill */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1 mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-blue-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{event.date.fullDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-amber-500" />
                    <span>{event.date.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-emerald-500" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address (for ticket QR code)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {isLegoEvent ? "Team Name or Solo Hacker / Dietary Notes" : "Questions or Dietary Requests (optional)"}
                    </label>
                    <input
                      type="text"
                      placeholder={isLegoEvent ? "e.g. Team BrickMasters, Vegetarian" : "e.g. Vegetarian, Need accessibility ramp"}
                      value={formData.dietaryOrNotes}
                      onChange={(e) => setFormData({ ...formData, dietaryOrNotes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold shadow-md transition-all ${
                        isLegoEvent
                          ? 'bg-[#FFE800] hover:bg-[#FFF04D] text-slate-900 border-2 border-[#B38600]'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      <Ticket size={16} />
                      <span>{isLegoEvent ? "Claim LegoFest Brick Pass" : "Confirm Free Registration & Get Ticket"}</span>
                    </motion.button>
                  </div>

                  <div className="text-center text-[11px] text-slate-400">
                    {isLegoEvent ? "Includes Official Minifigure & Swag Kit" : "Guaranteed admission badge • Instant email confirmation"}
                  </div>
                </form>
              </div>
            ) : (
              /* Step 2: Digital Boarding Pass Ticket */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                    <CheckCircle2 size={26} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    You're Registered, {ticket.name}!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your digital event pass is confirmed. Show this barcode at check-in.
                  </p>
                </div>

                {/* Boarding Pass Ticket Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className={`relative rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white p-5 border shadow-xl overflow-hidden ${
                    isLegoEvent ? 'border-[#E3000B]' : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-700">
                    <div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold ${isLegoEvent ? 'text-[#FFE800]' : 'text-rose-400'}`}>
                        {isLegoEvent ? "OFFICIAL LEGOFEST PASS" : "EVENT PASS"}
                      </span>
                      <div className="text-base font-bold text-white leading-tight">{ticket.eventTitle}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-mono">PASS NO.</span>
                      <span className="text-xs font-mono font-bold text-amber-400">{ticket.ticketNumber}</span>
                    </div>
                  </div>

                  <div className="py-4 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">ATTENDEE</span>
                      <span className="font-semibold text-white">{ticket.name}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">DATE &amp; TIME</span>
                      <span className="font-semibold text-white">{event.date.month} {event.date.day} • {ticket.eventTime}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-slate-400 block uppercase">VENUE LOCATION</span>
                      <span className="font-semibold text-white">{ticket.venue}</span>
                    </div>
                  </div>

                  {/* Barcode Graphic */}
                  <div className="pt-3 border-t border-dashed border-slate-700 flex flex-col items-center">
                    <div className="h-9 w-full flex items-center justify-center gap-1 opacity-80">
                      {[4,2,6,1,5,3,2,6,4,2,5,3,6,1,4,2,6,3,1,5,2,4,6,3,2,5,4,2,6,1,3,5].map((h, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-sm"
                          style={{ height: `${h * 4 + 8}px`, width: `${(i % 3 === 0) ? 3 : 2}px` }}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-1">GDG-{ticket.ticketNumber} • SCAN AT ENTRANCE</span>
                  </div>
                </motion.div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={generateGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors"
                  >
                    <Calendar size={15} />
                    <span>Add to Google Calendar</span>
                    <ExternalLink size={13} />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleReset}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    <span>Done</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
