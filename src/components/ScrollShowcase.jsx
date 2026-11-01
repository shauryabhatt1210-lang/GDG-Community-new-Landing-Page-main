import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Sparkles, Code2, Trophy, Award, ArrowRight, 
  Terminal, Cpu, Flame, Users, CheckCircle2 
} from 'lucide-react';

export const ScrollShowcase = ({ onOpenJoinModal }) => {
  const containerRef = useRef(null);

  // Hook to track vertical scroll within this 300vh tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth out progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform vertical scroll progress (0 to 1) into horizontal translation
  // Moves from 0% to approximately -72% to bring all 4 cards across the screen
  const x = useTransform(smoothProgress, [0, 1], ['5%', '-76%']);

  // Dynamic ambient glow color shifting as you scroll down
  const bgGlow = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    [
      'rgba(66, 133, 244, 0.22)', // Google Blue
      'rgba(234, 67, 53, 0.22)',  // Google Red
      'rgba(251, 188, 4, 0.22)',  // Google Yellow
      'rgba(52, 168, 83, 0.22)'   // Google Green
    ]
  );

  const cards = [
    {
      stage: '01',
      title: 'Discover & Onboard',
      tagline: 'Zero Prerequisites • Instant Free Cloud Credits',
      description: 'You don\'t need computer science experience. Day one unlocks access to $100+ free Google Cloud credits, private Discord study channels, and an active circle of peer mentors.',
      accent: '#4285F4',
      accentBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      badge: 'Google Cloud & Community',
      features: [
        '$100+ Free Google Cloud Skills credits',
        'Beginner zero-to-one weekly codelabs',
        'Direct peer study pods & Discord voice lounge',
        'Free official welcome swags & stickers'
      ],
      codePreview: {
        title: 'welcome_onboard.sh',
        cmd: '$ gdg join --chapter on-campus',
        res: '✓ Access granted: 2,500+ student network\n✓ Cloud project: gcp-student-workspace-2026\n🚀 Welcome aboard, builder!'
      }
    },
    {
      stage: '02',
      title: 'Hands-On Tech Mastery',
      tagline: 'Gemini AI • Flutter 3 • Kubernetes Sprints',
      description: 'Leave theoretical slides behind. Dive straight into live multimodal Gemini 1.5 Pro inference, reactive Flutter state machines, and microservice container deployments.',
      accent: '#EA4335',
      accentBg: 'bg-red-500/10 text-red-400 border-red-500/30',
      badge: 'AI & Mobile Engineering',
      features: [
        'Live Gemini 1.5 Pro Multimodal Codelabs',
        'Flutter cross-platform apps @ 120 FPS',
        '1-on-1 code reviews from Google Developer Experts',
        'Verified Google Cloud Digital Skill Badges'
      ],
      codePreview: {
        title: 'gemini_agent.py',
        cmd: 'from google_dev import GeminiAgent',
        res: 'model = GeminiAgent(model="gemini-1.5-pro")\n>>> stream = model.stream_multimodal(video, voice)\n✓ Latency: 16ms | Accuracy: 98.4%'
      }
    },
    {
      stage: '03',
      title: 'The 48h Hackathon Sprint',
      tagline: 'LegoFest • College Web Buildathon • Shipped MVPs',
      description: 'Form teams at Alan Turing Hall, MMMUT for our premier LegoFest hackathon. Build playful, modular, LEGO-themed college websites and campus portals in 24 to 48 hours.',
      accent: '#FBBC04',
      accentBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      badge: 'LegoFest @ Alan Turing Hall',
      features: [
        '$3,500+ in Hackathon prize pools & LEGO sets',
        'Hosted at Alan Turing Hall, MMMUT',
        'Senior web architect mentors on-call',
        'Live prototype pitching in front of VC judges'
      ],
      codePreview: {
        title: 'hackathon_status.json',
        cmd: 'GET /api/legofest/hackathon-status',
        res: '{\n  "team": "CampusBricks",\n  "venue": "Alan Turing Hall, MMMUT",\n  "project": "LEGO-Themed College Portal",\n  "status": "Deployed Live"\n}'
      }
    },
    {
      stage: '04',
      title: 'Global Stage & Career Launch',
      tagline: 'Google Solution Challenge • Top Tech Hiring',
      description: 'Present your solution at the United Nations Sustainable Development Goals global challenge. GDG members routinely fast-track into engineering roles at Google and tech unicorns.',
      accent: '#34A853',
      accentBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      badge: 'Career Acceleration',
      features: [
        'Global Google Solution Challenge finalist track',
        'Alumni network at Google, Microsoft, Stripe',
        'Direct resume forwarding to hiring sponsors',
        'Leadership reference letters from Google community'
      ],
      codePreview: {
        title: 'career_offer.log',
        cmd: '$ gdg career --status',
        res: '✓ Google Cloud Verified Developer Certified\n✓ Solution Challenge Global Top 50\n🚀 Recruiter Contact: Google Engineering Team\nStatus: Interview Fast-Track Scheduled'
      }
    }
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative h-[340vh] bg-slate-950 text-white select-none"
    >
      {/* Sticky Window Container (Sticks as user scrolls vertically down 340vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10">
        
        {/* Dynamic Animated Ambient Background Glow (Changes color as cards slide) */}
        <motion.div
          style={{ background: bgGlow }}
          className="absolute inset-0 blur-[130px] rounded-full pointer-events-none transition-colors duration-500"
        />

        {/* Section Header (Fixed inside sticky view) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800/80 border border-slate-700 text-slate-300 backdrop-blur-md mb-2">
                <Sparkles size={14} className="text-amber-400" />
                <span>Interactive Scroll Experience</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                How You Transform With Us{' '}
                <span className="text-slate-400 font-normal text-xl sm:text-2xl block sm:inline">
                </span>
              </h2>
            </div>

            {/* Scroll Indicator Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Cards Track */}
        <div className="relative w-full overflow-visible py-4 z-10">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 items-center"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="w-[88vw] sm:w-[620px] lg:w-[720px] shrink-0 h-[460px] sm:h-[490px] rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-slate-700 transition-colors"
              >
                {/* Colored Top Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: card.accent }}
                />

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-black font-mono" style={{ color: card.accent }}>
                      {card.stage}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${card.accentBg}`}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold mb-3" style={{ color: card.accent }}>
                    {card.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                    {card.description}
                  </p>
                </div>

                {/* Card Middle: Feature Checklist & Interactive Terminal Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-slate-800/80 my-2">
                  <div className="space-y-2">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} style={{ color: card.accent }} className="flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Micro Code Terminal */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/90 font-mono text-[11px] text-slate-400 space-y-1 overflow-hidden">
                    <div className="text-[10px] text-slate-500 pb-1 border-b border-slate-800 flex items-center justify-between">
                      <span>{card.codePreview.title}</span>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.accent }} />
                    </div>
                    <div className="text-slate-200 font-semibold truncate pt-1">{card.codePreview.cmd}</div>
                    <div className="text-emerald-400 whitespace-pre-line text-[10px] leading-tight">
                      {card.codePreview.res}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action button */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-mono text-slate-500">
                    STAGE {card.stage} OF 04
                  </span>
                  <button
                    onClick={onOpenJoinModal}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <span>Start This Stage</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Interactive Scroll Progress Bar & Stage Dots */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Stage Pills */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs font-mono">
              <span className="text-blue-400 font-bold">01. Discover</span>
              <span className="text-slate-600">➔</span>
              <span className="text-red-400 font-bold">02. Master</span>
              <span className="text-slate-600">➔</span>
              <span className="text-amber-400 font-bold">03. Hack</span>
              <span className="text-slate-600">➔</span>
              <span className="text-emerald-400 font-bold">04. Launch</span>
            </div>

            {/* Track Progress Bar */}
            <div className="w-full sm:w-64 h-2 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-gradient-to-r from-blue-500 via-red-500 via-amber-500 to-emerald-500 origin-left"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
