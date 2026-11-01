import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Users2, Trophy, Award, Target, Compass, 
  CheckCircle2, ArrowRight, HeartHandshake, Sparkles, Zap
} from 'lucide-react';
import { communityInfo } from '../data/communityData';

export const About = ({ onOpenJoinModal }) => {
  const [activeTab, setActiveTab] = useState('pillars');

  const benefitIcons = {
    Code2: Code2,
    Users2: Users2,
    Trophy: Trophy,
    Award: Award
  };

  const benefitColors = {
    blue: {
      text: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/60',
      border: 'hover:border-blue-500/50',
    },
    red: {
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950/60',
      border: 'hover:border-red-500/50',
    },
    yellow: {
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/60',
      border: 'hover:border-amber-500/50',
    },
    green: {
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      border: 'hover:border-emerald-500/50',
    }
  };

  const journeySteps = [
    { step: "01", title: "Join & Onboard", desc: "Get your GDG Member Pass, join Discord, and get $100+ free Google Cloud credits." },
    { step: "02", title: "Attend Hands-On Jams", desc: "Participate in weekly Gemini AI & Flutter codelabs guided by senior students and GDEs." },
    { step: "03", title: "Build & Ship Teams", desc: "Team up in LegoFest 24h Hackathons and solve real campus & global sustainability issues." },
    { step: "04", title: "Career & Global Stage", desc: "Pitch at the Global Solution Challenge, earn skill badges, and interview with top sponsors." },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            <Sparkles size={14} />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging The Gap Between Classroom Theory &amp; Real-World Tech
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Google Developer Groups (GDG) On Campus is a student-led organization designed to help aspiring software engineers turn curiosity into scalable products. We learn together, code together, and grow together.
          </p>
        </motion.div>

        {/* Mission & Vision Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Target size={26} />
            </div>
            <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-3">
              Our Mission
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Hands-On Software Excellence For Everyone
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {communityInfo.mission}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <CheckCircle2 size={16} />
              <span>Free peer codelabs &amp; mentorship sessions</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Compass size={26} />
            </div>
            <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 mb-3">
              Our Vision
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Empowering Next-Gen Global Leaders
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {communityInfo.vision}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Global Google Developer Solutions Challenge track</span>
            </div>
          </motion.div>

        </div>

        {/* Interactive View Switcher: Member Benefits vs Builder Roadmap */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeTab === 'pillars' ? 'Core Member Benefits' : 'Your 4-Stage Builder Journey'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                {activeTab === 'pillars' ? 'Everything you unlock upon joining GDG On Campus.' : 'How we take you from curiosity to production deployments.'}
              </p>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('pillars')}
                className={`relative px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'pillars'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Member Perks (4)
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`relative px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'roadmap'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Growth Roadmap
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'pillars' ? (
              <motion.div
                key="pillars"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {communityInfo.benefits.map((benefit) => {
                  const Icon = benefitIcons[benefit.icon] || Code2;
                  const color = benefitColors[benefit.color];

                  return (
                    <motion.div
                      key={benefit.id}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className={`p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl ${color.border} transition-colors group flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className={`p-3 rounded-xl ${color.bg} ${color.text}`}
                          >
                            <Icon size={24} />
                          </motion.div>
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {benefit.badge}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {benefit.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
                        <span>Member Exclusive</span>
                        <Zap size={14} className="text-amber-500" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {journeySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative shadow-sm"
                  >
                    <div className="text-3xl font-black font-mono text-blue-600 dark:text-blue-400 mb-3">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom callout strip */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <HeartHandshake size={32} className="flex-shrink-0" />
              <div>
                <h4 className="font-bold text-base sm:text-lg">Open to all majors &amp; all skill levels</h4>
                <p className="text-blue-100 text-xs sm:text-sm">No prior development experience required. Come as you are, leave as a builder.</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenJoinModal}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-blue-700 hover:bg-blue-50 shadow-sm whitespace-nowrap"
            >
              Get Your Member Pass
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
