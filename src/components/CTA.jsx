import React, { useState } from 'react';
import { 
  Sparkles, Send, CheckCircle2, MessageSquare, 
  Github, ExternalLink, ArrowRight, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CTA = ({ onOpenJoinModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }

    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative colored glow circles */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-14 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Google Colors Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 google-bar" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <Sparkles size={14} />
                <span>Next Cohort Open</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Ready to Shape the Future of Tech With Us?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Get instant access to free Google Cloud credits, weekly codelabs, hackathon teams, and exclusive LegoFest tickets.
              </p>

              {/* Instant Newsletter / Quick Join Form */}
              <form onSubmit={handleSubscribe} className="pt-2 max-w-md">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your student or personal email..."
                    required
                    className="flex-1 px-4 py-3 rounded-full text-sm bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md active:scale-95 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <span>Get Updates</span>
                    <Send size={15} />
                  </button>
                </div>

                {subscribed && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-400 animate-in fade-in">
                    <CheckCircle2 size={16} />
                    <span>Welcome aboard! You're now subscribed to GDG events and announcements.</span>
                  </div>
                )}

                <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    Zero spam
                  </span>
                  <span>•</span>
                  <span>100% Free Forever</span>
                  <span>•</span>
                  <span>Unsubscribe anytime</span>
                </div>
              </form>
            </div>

            {/* Right Action / Community Channels */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/60 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-1">
                Direct Community Channels
              </h3>
              <p className="text-xs text-slate-300 mb-2">
                Join our real-time discussion servers to ask questions, share project ideas, and team up.
              </p>

              {/* Primary Join Button */}
              <button
                onClick={onOpenJoinModal}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md active:scale-95 transition-all"
              >
                <Sparkles size={16} className="text-blue-600" />
                <span>Claim Official Member Pass</span>
                <ArrowRight size={16} />
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <MessageSquare size={16} className="text-indigo-400" />
                  <span>Discord (1.8k)</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <Github size={16} className="text-slate-300" />
                  <span>GitHub Org</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
