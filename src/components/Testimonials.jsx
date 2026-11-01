import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/communityData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            <Sparkles size={14} />
            <span>Member Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hear From Builders In Our Community
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Real stories from students, hackathon champions, and alumni now building at Google and leading tech ventures.
          </p>
        </div>

        {/* Desktop 3-Card Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <Quote size={20} />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Animated Carousel View */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600">
                  <Quote size={20} />
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                "{testimonialsData[currentIndex].quote}"
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
                <img
                  src={testimonialsData[currentIndex].avatar}
                  alt={testimonialsData[currentIndex].name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {testimonialsData[currentIndex].title}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {testimonialsData[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-1.5">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
