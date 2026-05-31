import { motion } from 'motion/react';
import { MessageCircle, FileText, ClipboardList, Shield, Stethoscope, Search, UserCheck, Activity } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      stepNum: "01",
      title: "Comprehensive Consultation",
      tagline: "Discuss Your Concerns & Feel Heard",
      desc: "Dr. Debuka listens to your orthopedic history, conducts detailed range-of-motion tests, and evaluates how pain restricts your daily living.",
      icon: Stethoscope,
      bgStyle: "bg-blue-50 text-med-blue border-blue-100",
      accent: "#1e3e62",
      image: "/src/assets/images/ortho_arthritis_consult_1780225023047.png"
    },
    {
      stepNum: "02",
      title: "Advanced Bone & Joint Diagnosis",
      tagline: "Pinpoint the Root Pathology",
      desc: "Reviewing high-resolution digital X-Rays, MRIs, or density scans to capture the precise structural and ligament condition of your joints.",
      icon: Search,
      bgStyle: "bg-sky-50 text-med-teal border-sky-150",
      accent: "#0284c7",
      image: "/src/assets/images/spine_xray_mri_diagnostics_1780225237777.png"
    },
    {
      stepNum: "03",
      title: "Customized Treatment Plan",
      tagline: "No Generic Prescriptions",
      desc: "We discuss conservative remedies first (PRP, customized motion physical therapy). Surgery is outlined only when indicated for maximum recovery.",
      icon: ClipboardList,
      bgStyle: "bg-indigo-50 text-indigo-650 border-indigo-100",
      accent: "#4f46e5",
      image: "/src/assets/images/dr_operating_precision_1780225219369.png"
    },
    {
      stepNum: "04",
      title: "Guided Recovery & Care Checks",
      tagline: "Restoring Your Pain-Free Freedom",
      desc: "Post-intervention physical therapy coaching and regular doctor follow-ups ensure your joint cartilage sets perfectly and stays mobile.",
      icon: Activity,
      bgStyle: "bg-emerald-50 text-emerald-650 border-emerald-100",
      accent: "#0d9488",
      image: "/src/assets/images/patient_rehab_recovery_1780225255368.png"
    }
  ];

  return (
    <section id="patient-journey" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-slate-50 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-extrabold tracking-widest text-med-teal uppercase">
            PATHWAY TO WELLNESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-med-navy mt-4">
            Your Treatment Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-3 leading-relaxed">
            We prioritize transparent communication. Here is what to expect from the moment you call Dr. Debuka to your final post-recovery follow-up.
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-med-blue to-med-teal rounded-full mx-auto mt-6" />
        </div>

        {/* Modern Medical Timeline (Alternating or Side-Locked Layout for perfect mobile compliance) */}
        <div className="relative">
          
          {/* Central Connecting path for widescreen */}
          <div className="absolute left-[31px] md:left-1/2 top-10 bottom-10 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
          
          {/* Left Connecting path for mobile viewports */}
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-100 md:hidden" />

          {/* Timeline Grid Rows */}
          <div className="space-y-12 md:space-y-20 relative">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.stepNum} 
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Outer Spacing Block to balance grid */}
                  <div className="hidden md:block w-1/2" />

                  {/* Bullet Hub Pin Indicator */}
                  <div className="absolute left-[8px] md:left-1/2 top-1.5 -translate-x-1/2 z-20">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-md timeline-pulse">
                      <div className="w-4 h-4 rounded-full bg-med-teal" />
                    </div>
                  </div>

                   {/* actual Timeline Cards */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 p-6 md:p-8 rounded-3xl transition-all duration-300 shadow-xs relative overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        {/* Step index overlay */}
                        <span className="absolute top-4 right-6 text-3xl font-extrabold text-slate-200/40 font-mono select-none">
                          {step.stepNum}
                        </span>

                        {/* Step illustrative cover image */}
                        {step.image && (
                          <div className="h-44 w-full rounded-2xl overflow-hidden relative mb-6 border border-slate-150/70 bg-slate-100 group">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                          </div>
                        )}

                        {/* Icon line */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${step.bgStyle}`}>
                          <StepIcon className="w-6 h-6" />
                        </div>

                        {/* Content headings */}
                        <p className="text-xs font-bold text-med-teal uppercase tracking-wider">
                          {step.tagline}
                        </p>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight mt-1 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Anxiety reduction note block */}
        <div className="mt-20 max-w-2xl mx-auto bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            A PATIENT-CENTERED ASSURANCE
          </p>
          <p className="text-sm font-semibold text-slate-600 mt-2">
            "Over 75% of orthopedic conditions can be managed successfully through personalized conservative care patterns without undergoing mechanical operations."
          </p>
          <p className="text-xs font-bold text-slate-400 mt-2">— Dr. Ekansh Debuka</p>
        </div>

      </div>
    </section>
  );
}
