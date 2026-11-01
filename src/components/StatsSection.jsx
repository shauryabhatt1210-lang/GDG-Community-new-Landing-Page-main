import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Calendar, FolderGit2, ArrowUpRight } from 'lucide-react';
import { communityInfo } from '../data/communityData';
import { AnimatedCounter } from './AnimatedCounter';

export const StatsSection = () => {
  const statIcons = {
    blue: Users,
    red: Calendar,
    yellow: Award,
    green: FolderGit2
  };

  const colorStyles = {
    blue: {
      border: 'hover:border-blue-500/50',
      text: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      badge: 'text-blue-700 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300'
    },
    red: {
      border: 'hover:border-red-500/50',
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950/40',
      badge: 'text-red-700 bg-red-100 dark:bg-red-900/50 dark:text-red-300'
    },
    yellow: {
      border: 'hover:border-amber-500/50',
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      badge: 'text-amber-700 bg-amber-100 dark:bg-amber-900/50 dark:text-amber-300'
    },
    green: {
      border: 'hover:border-emerald-500/50',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/40',
      badge: 'text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50 dark:text-emerald-300'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-10 bg-slate-100/60 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {communityInfo.stats.map((stat, idx) => {
            const Icon = statIcons[stat.color] || Users;
            const style = colorStyles[stat.color];

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm ${style.border} transition-colors group cursor-default`}
              >
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`p-2.5 rounded-xl ${style.bg} ${style.text}`}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${style.badge}`}>
                    {stat.change}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono flex items-center">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified Impact</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
