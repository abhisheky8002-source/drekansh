import { motion } from 'motion/react';
import { Calendar, Phone, Clock, Award, ShieldCheck, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
      {/* Background radial graphic effect */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-[350px] h-[350px] rounded-full bg-sky-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content and Trust markers */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Top Minimal Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center space-x-2.5 bg-sky-50 border border-sky-100/80 px-3.5 py-1.5 rounded-full text-med-teal text-xs font-semibold tracking-wider uppercase shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Debuka Hospital, Ranchi</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-med-navy leading-[1.1]"
              >
                Expert Orthopedic Care for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-blue via-med-teal to-sky-500">
                  Pain-Free Living
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed"
              >
                Advanced bone, joint & orthopedic treatments with personalized patient care. Regain your active mobility under one of Ranchi's most reliable surgical specialists.
              </motion.p>
            </div>

            {/* Quick Contact & Availability Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg bg-white/70 backdrop-blur-xs border border-slate-100 rounded-2xl p-4.5 shadow-sm"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-med-teal">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    OPD TIMINGS
                  </span>
                  <span className="text-sm text-slate-800 font-bold">
                    9:00 AM – 5:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    PRIMARY FACILITY
                  </span>
                  <span className="text-sm text-slate-800 font-bold">
                    Debuka Hospital, Ranchi
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <button
                onClick={onBookClick}
                className="flex-1 bg-med-blue hover:bg-med-navy text-white font-semibold py-4 px-6 rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer transform active:scale-98"
              >
                <Calendar className="w-5 h-5 text-sky-300" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:9241197116"
                className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-med-teal" />
                <span>Call +91 92411 97116</span>
              </a>
            </motion.div>

            {/* Simple Trust Social Proof Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6 border-t border-slate-100 pt-6"
            >
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-300 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-slate-600">JD</div>
                  <div className="w-8 h-8 rounded-full bg-teal-300 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-teal-800">AM</div>
                  <div className="w-8 h-8 rounded-full bg-blue-300 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-blue-800">PK</div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-white font-mono">+</div>
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Trusted by 2,500+ Patients</span>
                </div>
              </div>

              <div className="h-6 w-[1px] bg-slate-200" />

              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-med-teal">100%</span>
                <span className="text-xs text-slate-500 font-medium leading-none block">Ethical Care<br />Focused</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Stunning Professional Doctor Portrait */}
          <div className="col-span-1 lg:col-span-5 relative flex justify-center py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4]"
            >
              {/* Outer Glow Ring / Frame borders */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-blue-100/50 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-med-blue/10 to-teal-100/20 transform rotate-2 -z-10" />
              
              {/* Image Container with high contrast card styles */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img
                  src="/src/assets/images/dr_debuka_portrait_1780224205205.png"
                  alt="Dr. Ekansh Debuka Portrait"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Patient Count Badging Layer */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-6 -right-6 bg-white border border-slate-100 p-4.5 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[190px]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">SPECIALTY</span>
                  <span className="text-xs font-extrabold text-slate-800 leading-tight block">
                    Trauma & Joint Specialist
                  </span>
                </div>
              </motion.div>

              {/* Rating Sticker Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-6 top-1/4 bg-med-navy text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-center max-w-[130px]"
              >
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">HEALTHCARE</span>
                <span className="text-xs font-bold leading-normal block mb-1">
                  Bone Care Excellence
                </span>
                <div className="flex items-center space-x-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
