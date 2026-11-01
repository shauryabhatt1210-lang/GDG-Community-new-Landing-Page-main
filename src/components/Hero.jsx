import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Copy, Check } from 'lucide-react';

const COLORS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
const STAT_COLORS = ['bg-[#4285F4]', 'bg-[#EA4335]', 'bg-[#FBBC04]', 'bg-[#34A853]'];
const PHRASES = [
  'connect --build --grow',
  'gemini.generate("your idea")',
  'flutter run --release',
  'gcloud run deploy campus-app',
  'hackathon --team legofest',
];
const TECH = ['Gemini', 'Flutter', 'Google Cloud', 'Android 16', 'Firebase', 'TensorFlow', 'Kubernetes', 'Dart', 'BigQuery', 'Cloud Run'];

/* The hero's one big moment: a dot grid in the four Google colours that
   swells and lights up around the pointer, in 4x4 "brick" clusters. */
const DotField = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const GAP = 30;
    const pointer = { x: -9999, y: -9999 };
    let w = 0, h = 0, raf = 0, visible = true;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => { pointer.x = pointer.y = -9999; };

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      const dark = document.documentElement.classList.contains('dark');
      for (let y = GAP / 2, row = 0; y < h; y += GAP, row++) {
        for (let x = GAP / 2, col = 0; x < w; x += GAP, col++) {
          const d = Math.hypot(x - pointer.x, y - pointer.y);
          const near = Math.max(0, 1 - d / 180);
          const wave = reduce ? 0 : Math.max(0, (Math.sin(col * 0.35 + t / 1100) + Math.cos(row * 0.3 - t / 1400)) / 2);
          ctx.beginPath();
          ctx.arc(x, y, 1.1 + near * 3.8 + wave * 0.9, 0, Math.PI * 2);
          if (near > 0.02) {
            ctx.fillStyle = COLORS[((col >> 2) + (row >> 2)) % 4];
            ctx.globalAlpha = 0.4 + near * 0.6;
          } else {
            ctx.fillStyle = dark ? '#94a3b8' : '#475569';
            ctx.globalAlpha = (dark ? 0.2 : 0.18) + wave * 0.1;
          }
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    resize();
    raf = requestAnimationFrame(draw);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
    />
  );
};

export const Hero = ({ onOpenJoinModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState('gemini');
  const [copiedCode, setCopiedCode] = useState(false);
  const [typed, setTyped] = useState(PHRASES[0]);

  // Typed command line cycling through PHRASES
  useEffect(() => {
    let i = 0, n = PHRASES[0].length, dir = -1, timer;
    const tick = () => {
      const full = PHRASES[i];
      n += dir;
      setTyped(full.slice(0, n));
      let delay = dir > 0 ? 55 : 28;
      if (dir > 0 && n >= full.length) { dir = -1; delay = 2000; }
      else if (dir < 0 && n <= 0) { dir = 1; i = (i + 1) % PHRASES.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, []);

  const codeSnippets = {
    gemini: {
      lang: 'python',
      file: 'gemini_agent.py',
      badge: 'Multimodal AI',
      code: `import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_KEY"])
model = genai.GenerativeModel("gemini-1.5-pro")

# Stream live multimodal reasoning
response = model.generate_content([
    "How can GDG builders solve climate IoT?",
    sensor_telemetry_stream
])
print(f"Agent Action: {response.text}")`,
      output: `✓ Model: gemini-1.5-pro connected [14ms latency]
✓ Telemetry Analyzed: 120 Campus sensors online
🚀 Recommendation: Optimize HVAC scheduling for -28% kWh`
    },
    flutter: {
      lang: 'dart',
      file: 'campus_feed.dart',
      badge: 'Multiplatform UI',
      code: `class LegoFestFeed extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<Event>>(
      stream: GDGRepository.getEvents(),
      builder: (ctx, snapshot) => AnimatedListView(
        items: snapshot.data,
        itemBuilder: (event) => EventCard(event),
      ),
    );
  }
}`,
      output: `✓ Flutter 3.24 engine mounted @ 120 FPS
✓ Firebase Cloud Firestore stream synced
🚀 4,820 student clients connected`
    },
    cloud: {
      lang: 'go',
      file: 'cluster_deploy.go',
      badge: 'Cloud Run & GKE',
      code: `package main

import "github.com/gdg/kubedeploy"

func main() {
    cluster := kubedeploy.NewGKECluster("gdg-prod", "us-central1")
    cluster.AutoPilot(true)
    cluster.DeployMicroservice("api-v2", "gcr.io/gdg/api")
    cluster.WatchHealth()
}`,
      output: `✓ GKE Autopilot provisioned in us-central1
✓ Istio Ingress TLS certificate verified
🚀 Deployment 100% healthy across 3 zones`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const lines = ['Where student', 'developers build', 'with Google.'];

  return (
    <section id="home" className="relative pt-28 lg:pt-32 overflow-hidden">
      <DotField />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left: headline, command line, CTAs, numbers */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-[#34A853] animate-pulse" />
              GDG On Campus &middot; Fall 2026 cohort is open
            </motion.p>

            <h1 className="mt-5 font-display font-extrabold text-slate-900 dark:text-white text-[clamp(2.4rem,5.4vw,4.9rem)] leading-[1] whitespace-nowrap">
              {lines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                    {i === lines.length - 1 && (
                      <span className="ml-3 inline-grid grid-cols-2 gap-[0.07em] align-middle w-[0.5em] h-[0.5em]" aria-hidden="true">
                        {STAT_COLORS.map((c) => <span key={c} className={`${c} rounded-[0.08em]`} />)}
                      </span>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <p className="mt-6 font-mono text-sm sm:text-base text-slate-700 dark:text-slate-200 h-6" aria-label="Rotating example commands">
                <span className="text-[#34A853]">$</span> {typed}
                <span className="inline-block w-[0.55em] h-[1.1em] -mb-[0.2em] ml-0.5 bg-[#4285F4] animate-blink" />
              </p>

              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Hands-on workshops, hackathons and shipped projects with Gemini, Flutter, Android and Google Cloud. Free for every student, mentored by Google Developer Experts.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenJoinModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] shadow-lg shadow-blue-500/25 transition-colors"
                >
                  Join the community
                  <ArrowRight size={18} />
                </motion.button>
                <a
                  href="#events"
                  onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-slate-800 dark:text-slate-100 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-900 dark:hover:border-white transition-colors"
                >
                  <Calendar size={18} />
                  See upcoming events
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: code lab */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden bg-slate-950 shadow-2xl shadow-slate-900/30 ring-1 ring-slate-900/10 dark:ring-white/10">
              <div className="google-bar h-1" />
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">{codeSnippets[activeCodeTab].file}</span>
                <div role="tablist" className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl">
                  {[['gemini', 'Gemini'], ['flutter', 'Flutter'], ['cloud', 'Cloud']].map(([tab, label]) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeCodeTab === tab}
                      onClick={() => setActiveCodeTab(tab)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                        activeCodeTab === tab ? 'bg-[#1A73E8] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 font-mono text-xs">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCodeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <pre className="text-slate-300 overflow-x-auto leading-relaxed min-h-[11.5rem]"><code>{codeSnippets[activeCodeTab].code}</code></pre>
                    <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 whitespace-pre-line leading-relaxed">
                      {codeSnippets[activeCodeTab].output}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={handleCopyCode}
                  className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  {copiedCode ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  {copiedCode ? 'Copied' : 'Copy snippet'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology marquee */}
      <div className="relative mt-16 lg:mt-24 border-y border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee py-4" aria-hidden="true">
          {[...TECH, ...TECH].map((name, i) => (
            <span key={i} className="flex items-center gap-3 px-8 font-display text-lg font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-[3px]" style={{ background: COLORS[i % 4] }} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
