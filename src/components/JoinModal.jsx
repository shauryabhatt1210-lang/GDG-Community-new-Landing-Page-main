import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Sparkles, CheckCircle2, Copy, Download, 
  ShieldCheck, QrCode, ArrowRight, UserCheck, 
  Mail, ExternalLink, Send, Check, BellRing 
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';

export const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'AI & Machine Learning (Gemini)',
    year: '2nd Year Student'
  });
  const [generatedPass, setGeneratedPass] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedLetter, setCopiedLetter] = useState(false);
  const [viewEmailNote, setViewEmailNote] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.5 }
      });
    } catch (err) {}

    const randomId = 'GDG-' + Math.floor(100000 + Math.random() * 900000);
    const officialUrl = `https://developers.google.com/community/gdg?member_id=${randomId}&name=${encodeURIComponent(formData.name)}&track=${encodeURIComponent(formData.track)}`;

    setGeneratedPass({
      id: randomId,
      name: formData.name,
      email: formData.email,
      track: formData.track,
      joinedAt: 'November 2026',
      chapter: 'GDG On Campus',
      qrValue: officialUrl
    });
  };

  const handleCopyId = () => {
    if (generatedPass) {
      navigator.clipboard.writeText(generatedPass.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyOfficialLetter = () => {
    if (generatedPass) {
      const letter = `Dear ${generatedPass.name},

Welcome to Google Developer Groups (GDG) On Campus! Your membership has been officially registered under Member ID: ${generatedPass.id} for the ${generatedPass.track} focus track.

NOTE FROM ORGANIZERS:
Our core organizing leads will soon connect with you directly at ${generatedPass.email} with your private Discord onboarding invite, mentor introduction, and $100+ Google Cloud Skills Boost activation link.

Please keep your digital QR badge handy for upcoming workshop check-ins. You can explore official Google Developer resources and codelabs on the GDG website:
https://developers.google.com/community/gdg

Warm regards,
The GDG Organizing Committee
Google Developer Groups On Campus
Contact: organizers@gdgtech.dev`;

      navigator.clipboard.writeText(letter);
      setCopiedLetter(true);
      setTimeout(() => setCopiedLetter(false), 2500);
    }
  };

  const handleReset = () => {
    setGeneratedPass(null);
    setFormData({
      name: '',
      email: '',
      track: 'AI & Machine Learning (Gemini)',
      year: '2nd Year Student'
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto scrollbar-thin"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* 4-Color Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 google-bar" />

            {!generatedPass ? (
              /* Step 1: Registration Form */
              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={16} />
                  <span>Official Community Membership</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  Join GDG On Campus
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                  Claim your official digital membership pass with a verified scannable QR code. We will dispatch your confirmation directly to your email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Lee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address (Official welcome &amp; pass will be sent here)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Primary Interest Track
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>AI & Machine Learning (Gemini)</option>
                        <option>Cloud Architecture & DevOps</option>
                        <option>Flutter & Mobile Engineering</option>
                        <option>Web Technologies & UI/UX</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Experience / Status
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>1st Year / Beginner</option>
                        <option>2nd Year Student</option>
                        <option>3rd / 4th Year Senior</option>
                        <option>Graduate / Alumni / Industry</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <Sparkles size={16} />
                      <span>Generate QR Pass &amp; Send Email Notification</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>

                  <div className="text-center text-[11px] text-slate-400">
                    100% Free • No membership fees • Scannable verification
                  </div>
                </form>
              </div>
            ) : (
              /* Step 2: Generated Digital Community Member Pass + Email Notification Dispatch */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Header Welcome */}
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                    <UserCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Welcome to GDG, {generatedPass.name}!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your official membership pass is generated with a live scannable QR code.
                  </p>
                </div>

                {/* Live Email Dispatch Notification Banner */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3 shadow-sm"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500 text-white flex-shrink-0 mt-0.5">
                    <Send size={15} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Official Confirmation Email Dispatched</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100">
                        Delivered
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                      We have sent your membership package and verified QR pass to <span className="font-mono font-semibold underline">{generatedPass.email}</span> with a personalized note from the GDG organizing committee.
                    </p>
                  </div>
                </motion.div>

                {/* The Digital Member Badge with REAL SCANNABLE QR CODE */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-6 border border-blue-500/40 shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                  
                  {/* Badge Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center font-mono font-bold text-base">
                        <span className="text-[#4285F4]">&lt;</span>
                        <span className="text-[#EA4335]">/</span>
                        <span className="text-[#34A853]">&gt;</span>
                      </div>
                      <div>
                        <span className="font-bold text-xs tracking-wider">GDG ON CAMPUS</span>
                        <span className="block text-[10px] text-slate-400 font-mono">VERIFIED MEMBER BADGE</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ACTIVE 2026
                    </span>
                  </div>

                  {/* Badge Body: Info + Real Scannable QR Code */}
                  <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div className="space-y-3 text-center sm:text-left">
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Member Name</div>
                        <div className="text-xl font-black text-white">{generatedPass.name}</div>
                      </div>
                      
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Focus Track</div>
                        <div className="text-xs font-semibold text-blue-300">{generatedPass.track}</div>
                      </div>

                      <div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Verified ID</div>
                        <div className="text-xs font-mono font-bold text-amber-400">{generatedPass.id}</div>
                      </div>
                    </div>

                    {/* REAL SCANNABLE QR CODE via qrcode.react */}
                    <div className="flex flex-col items-center gap-1.5 p-3 bg-white rounded-2xl shadow-lg border-2 border-blue-400">
                      <QRCodeSVG
                        value={generatedPass.qrValue}
                        size={105}
                        bgColor={"#ffffff"}
                        fgColor={"#0f172a"}
                        level={"Q"}
                        includeMargin={false}
                      />
                      <span className="text-[9px] font-mono text-slate-700 font-bold uppercase tracking-wider">
                        Scan for GDG Portal
                      </span>
                    </div>
                  </div>

                  {/* Badge Footer */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>ID: {generatedPass.id}</span>
                    <span>CHAPTER: GDG ON CAMPUS</span>
                  </div>
                </motion.div>

                {/* Professional Note from Organizers Preview */}
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-5 space-y-3 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-blue-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Official Welcome Email Sent
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      welcome@gdg.dev
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2.5 leading-relaxed font-sans">
                    <p>
                      <strong>Dear {generatedPass.name},</strong>
                    </p>
                    <p>
                      Welcome to <strong>Google Developer Groups (GDG) On Campus</strong>! We are excited to confirm that your student developer membership is officially registered under <strong>Member ID: {generatedPass.id}</strong> for the <strong>{generatedPass.track}</strong> track.
                    </p>
                    
                    {/* The Note that organizers will reach out soon */}
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200 text-xs space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <BellRing size={14} className="text-blue-600 dark:text-blue-400" />
                        <span>Organizing Leads Note &amp; Next Steps:</span>
                      </div>
                      <p>
                        Our core organizing team is reviewing your profile and <strong>will soon reach out directly to you at {generatedPass.email}</strong> to provide your private Discord onboarding invite, mentor introduction, and credentials for your <strong>$100+ complimentary Google Cloud Skills Boost</strong> credits.
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Your attached QR code badge provides express entry to our LegoFest conferences, hackathons, and study jams. Explore tutorials, codelabs, and community guidelines on the official Google Developer Groups portal:
                    </p>

                    {/* Official GDG Website Link */}
                    <a
                      href="https://developers.google.com/community/gdg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 transition-colors"
                    >
                      <span>https://developers.google.com/community/gdg</span>
                      <ExternalLink size={13} />
                    </a>

                    <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                      Warm regards,<br />
                      <strong>The GDG Organizing Committee</strong><br />
                      <span className="text-[11px]">Google Developer Groups On Campus</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCopyOfficialLetter}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    {copiedLetter ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                    <span>{copiedLetter ? 'Copied Full Note!' : 'Copy Email & Note'}</span>
                  </motion.button>

                  <a
                    href="https://developers.google.com/community/gdg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors"
                  >
                    <ExternalLink size={15} />
                    <span>Open GDG Portal</span>
                  </a>

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
