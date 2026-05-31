import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Eye, Briefcase, UserCheck, Flame, Scale } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    {
      title: "Experienced Orthopedic Care",
      desc: "Years of surgical consulting and trauma treatments at Debuka Hospital Ranchi, solving critical joint pathologies.",
      icon: Briefcase,
      color: "bg-blue-50 text-med-blue"
    },
    {
      title: "Personalized Treatment Model",
      desc: "Every skeleton has a unique structural balance. We design bespoke clinical maps matched perfectly to your life pace.",
      icon: UserCheck,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Compassionate Consultation",
      desc: "Reducing patient anxiety through patient-centered explanations, empathetic pacing, and clear joint model visualizers.",
      icon: HeartHandshake,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Advanced Diagnostic Rigor",
      desc: "utilizing state-of-the-art musculoskeletal studies to pin-point real, mechanical pressure points before suggesting surgery.",
      icon: Eye,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Focus on Long-Term Recovery",
      desc: "We don't just eliminate local pain; we rebuild your natural joint muscle strength, ensuring long-term physical robustness.",
      icon: ShieldCheck,
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Ethical Patient Care",
      desc: "Absolute commitment to surgery only when strictly indicated. Transparent second opinions and non-surgical recommendations.",
      icon: Scale,
      color: "bg-slate-100 text-slate-800"
    }
  ];

  return (
    <section id="why-dr-debuka" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      
      {/* Decorative ambient elements */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-100/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Brand Accolade Message */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-med-teal uppercase">
              GOLD STANDARDS OF SURGERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-med-navy tracking-tight leading-tight">
              Why Patients Trust <br className="hidden sm:inline" />
              Dr. Ekansh Debuka
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-med-blue to-med-teal rounded-full" />
            
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Orthopedic health is fundamental to independence. At Debuka Hospital, our core values represent a standard of surgical precision, clinical integrity, and modern hospitality. 
            </p>

            {/* Clinical Trust Photo Overlay */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-100 shadow-md">
              <img 
                src="https://res.cloudinary.com/dr5obadvt/image/upload/v1780229254/587802656_17842679394634714_3646617993978590076_n_udyfjs.jpg" 
                alt="Dr. Ekansh Debuka clinical consultation" 
                className="w-full h-52 object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/15 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-xs font-bold text-white tracking-wide">
                  Clinical Consultation & Joint Diagnostics
                </p>
              </div>
            </div>

            {/* Quick trust stat blocks */}
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-100 p-4.5 rounded-2xl shadow-xs">
                <span className="text-2xl font-extrabold text-med-teal block leading-none">98.4%</span>
                <span className="text-xs text-slate-400 font-semibold block mt-1 uppercase tracking-wider">Patient Trust</span>
              </div>
              <div className="bg-white border border-slate-100 p-4.5 rounded-2xl shadow-xs">
                <span className="text-2xl font-extrabold text-slate-800 block leading-none">100%</span>
                <span className="text-xs text-slate-400 font-bold block mt-1 uppercase tracking-wider">Ethical Ethics</span>
              </div>
            </div>

            <div className="border border-sky-100/60 bg-sky-50/50 p-5 rounded-2xl flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-med-teal shrink-0 mt-0.5" />
              <p className="text-xs text-med-blue font-semibold leading-relaxed">
                We are fully compliant with ISO clinical guidelines and modern surgical safety checklists at Debuka Hospital's tertiary orthopedics ward.
              </p>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="col-span-1 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, borderborderColor: "rgba(30,62,98,0.15)" }}
                    className="bg-white border border-slate-100/85 p-6 rounded-2xl shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${point.color}`}>
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight leading-snug">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
