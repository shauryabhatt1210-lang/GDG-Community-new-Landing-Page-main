import React from 'react';
import { 
  Github, Twitter, Linkedin, Youtube, MessageSquare, 
  Heart, ArrowUp, ExternalLink, ShieldAlert 
} from 'lucide-react';
import { communityInfo } from '../data/communityData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Mission', href: '#about' },
    { label: 'Developer Journey', href: '#journey' },
    { label: 'Upcoming Events', href: '#events' },
    { label: 'Member Projects', href: '#projects' },
    { label: 'Community FAQ', href: '#faq' },
    { label: 'Contact Organizers', href: '#contact' },
  ];

  const devResources = [
    { label: 'Google Developers Program', href: 'https://developers.google.com' },
    { label: 'Google Cloud Skills Boost', href: 'https://www.cloudskillsboost.google' },
    { label: 'Flutter & Dart Official Docs', href: 'https://docs.flutter.dev' },
    { label: 'Gemini Developer API', href: 'https://ai.google.dev' },
    { label: 'Google Solution Challenge', href: 'https://developers.google.com/community/gdsc-solution-challenge' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* 4-Color Google Accent Stripe */}
      <div className="h-1 google-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission Summary (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 font-mono font-bold text-2xl">
                <span className="text-[#4285F4]">&lt;</span>
                <span className="text-[#EA4335]">/</span>
                <span className="text-[#34A853]">&gt;</span>
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900 dark:text-white">
                  Google Developer Groups
                </span>
                <span className="block text-xs font-semibold text-slate-500">
                  On Campus • Developer Community
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Empowering students and local creators to build real software with Google technologies through peer learning, codelabs, and community hackathons.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub Org"
              >
                <Github size={17} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Discord Server"
              >
                <MessageSquare size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn Page"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Twitter X"
              >
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (Col 3) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Resources (Col 4) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Google Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {devResources.map((res) => (
                <li key={res.label}>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{res.label}</span>
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Support & Office (Col 5) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Demo Headquarters
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-slate-900 dark:text-white">CS Innovation Lab 402</p>
              <p>Campus Innovation Center</p>
              <p>12-Hour Hackathon Demo Edition</p>
              <p className="pt-2 text-blue-600 dark:text-blue-400 font-mono">organizers@gdgtech.dev</p>
            </div>
          </div>

        </div>

        {/* Official GDG Disclaimer as required */}
        <div className="py-6 px-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
            <ShieldAlert size={14} className="text-amber-500" />
            <span>Community Independence Disclaimer:</span>
          </div>
          <p>
            Google Developer Groups (GDG) On Campus is an independent developer organization. Activities, views, and opinions expressed here should in no way be linked to Google, the corporation. Google, Android, Flutter, Firebase, TensorFlow, and Google Cloud are trademarks of Google LLC.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 GDG On Campus. Built for the 12-Hour Hackathon.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold transition-colors focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
