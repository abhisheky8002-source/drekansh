import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Stethoscope, Briefcase, Zap, ShieldAlert, Sparkles, Smile, X, CheckSquare, Calendar, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onBookClick: (preselectedService?: string) => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Joint Pain Treatment",
      shortDesc: "Diagnosis and treatments for severe chronic & acute joint pain.",
      icon: Activity,
      color: "from-blue-550 to-sky-600 animate-pulse-slow",
      badge: "Non-Surgical & Surgical",
      image: "/src/assets/images/sports_injury_rehab_1780225004756.png",
      details: {
        symptoms: ["Stiffness in morning", "Pain upon walking", "Swelling around joints", "Grating sensations during motion"],
        treatments: ["Intra-articular PRP injections", "Custom physical therapy routing", "Minimally invasive arthroscopic cleanup", "Advanced anti-pathological therapies"],
        recovery: "Immediate relief in non-surgical programs; full surgical recovery in 2-4 weeks using modern protocols."
      }
    },
    {
      id: 2,
      title: "Fracture & Trauma Care",
      shortDesc: "Emergency emergency and long-term structural bone injury management.",
      icon: ShieldAlert,
      color: "from-rose-500 to-orange-500",
      badge: "24/7 Trauma Assist",
      image: "/src/assets/images/trauma_bone_fracture_1780224987483.png",
      details: {
        symptoms: ["Severe bone pain post-fall", "Deformity or limb shortening", "Inability to bear body weight", "Open wounds or compounding injuries"],
        treatments: ["Intra-medullary nailing", "Rigid anatomical locking plating", "Closed reduction & specialized casting", "External skeletal fixation for complex trauma"],
        recovery: "Early mobilized physical therapy to restore bone loading. Cast intervals span 4-8 weeks."
      }
    },
    {
      id: 3,
      title: "Sports Injury Treatment",
      shortDesc: "Recovery-focused advanced treatment for sports-related active injuries.",
      icon: Zap,
      color: "from-emerald-500 to-teal-500",
      badge: "Athletic Excellence",
      image: "/src/assets/images/sports_injury_rehab_1780225004756.png",
      details: {
        symptoms: ["Ligament tears (ACL/MCL)", "Meniscal instability", "Rotator cuff tendonitis", "Acute ankle/shoulder sprains"],
        treatments: ["Arthroscopic ligament reconstruction", "Meniscal suture repair methods", "Muscle-tendon conditioning therapy", "Functional rehabilitation return-to-sport scaling"],
        recovery: "Gradual athletic activity resumption within 6 weeks to 6 months depending on injury grade."
      }
    },
    {
      id: 4,
      title: "Knee & Hip Care",
      shortDesc: "Specialized orthopedic support, reconstruction and surgical treatment.",
      icon: Sparkles,
      color: "from-indigo-500 to-blue-600",
      badge: "Arthroplasty Specialists",
      image: "/src/assets/images/knee_joint_implant_1780224969917.png",
      details: {
        symptoms: ["Bone-on-bone knee friction", "Severe groin/hip pain from osteoarthritis", "Limping due to developmental joint dysplasia", "Avascular necrosis (AVN) of femoral head"],
        treatments: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Partial/Unicondylar joint resurfacing", "Joint preserving osteotomies"],
        recovery: "Assisted walking started within 24 hours of joint operations. Normal navigation in 3-4 weeks."
      }
    },
    {
      id: 5,
      title: "Arthritis Management",
      shortDesc: "Comprehensive clinical pain control and active mobility solutions.",
      icon: Smile,
      color: "from-amber-500 to-amber-600",
      badge: "Geriatric & Rheumatoid Care",
      image: "/src/assets/images/ortho_arthritis_consult_1780225023047.png",
      details: {
        symptoms: ["Symmetrical multi-joint aches", "Systemic inflammatory flares", "Progressively restrictive motion range", "Rheumatoid joint deformities"],
        treatments: ["Custom designed pharmacotherapy", "Viscosupplementation gel targets", "Low-impact orthopedic wellness planning", "Bone alignment corrective surgery"],
        recovery: "Designed as a continuous quality-of-life monitoring program aimed at preserving natural cartilage."
      }
    },
    {
      id: 6,
      title: "Orthopedic Consultation",
      shortDesc: "Personalized specialist treatment planning, diagnostics and opinion.",
      icon: Stethoscope,
      color: "from-teal-500 to-sky-600",
      badge: "Expert Second Opinions",
      image: "/src/assets/images/clinic_interior_1780224222316.png",
      details: {
        symptoms: ["Chronic un-diagnosed physical limps", "Persistent back, neck or spine pain", "Surgical advice checks", "Post-surgical rehabilitation progress checks"],
        treatments: ["Digital X-Ray / MRI diagnostics analysis", "Clinical physical orthopedic tests", "Step-by-step physical health profiling", "Multi-modal referral planning"],
        recovery: "Detailed consultation report provided immediately to plan appropriate patient roadmap."
      }
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-100/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-med-teal uppercase bg-blue-50 border border-blue-100 py-1.5 px-4 rounded-full inline-block">
            SPECIALTIES & PROCEDURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-med-navy mt-4">
            Orthopedic Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-3 leading-relaxed">
            Dr. Ekansh Debuka provides tailored treatment paths designed to eliminate mechanical joint pain, restore structural bone integrity, and speed up recovery times.
          </p>
        </div>

        {/* Services Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 10px 30px -10px rgba(11,25,44,0.08)" }}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col justify-between transition-all duration-350 relative group cursor-pointer"
                onClick={() => setSelectedService(idx)}
              >
                <div>
                  {/* Service Section Image Thumbnail */}
                  <div className="h-44 w-full relative overflow-hidden bg-slate-50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/15 to-transparent" />
                    
                    {/* Badge absolute overlay on top right */}
                    <span className="absolute top-3.5 right-3.5 text-[9px] font-bold text-slate-800 bg-white/95 backdrop-blur-xs shadow-xs px-2.5 py-1 rounded-md tracking-wider">
                      {service.badge}
                    </span>

                    {/* Icon absolute overlay offset at bottom-left */}
                    <div className="absolute -bottom-5 left-5 w-11 h-11 rounded-xl bg-white text-med-blue flex items-center justify-center border border-slate-150 shadow-md group-hover:bg-med-blue group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5.5 h-5.5 text-med-teal group-hover:text-sky-300" />
                    </div>
                  </div>

                  <div className="p-6 pt-8 relative">
                    {/* Subtle Accent corner bar */}
                    <div className="absolute top-0 left-10 right-10 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-med-teal group-hover:to-teal-400 rounded-b-full transition-all duration-300" />

                    <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-2 group-hover:text-med-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-med-blue group-hover:text-med-teal flex items-center space-x-1">
                    <span>Explore details</span>
                    <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono font-bold">OPD Practice</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service Dialog modal state */}
        <AnimatePresence>
          {selectedService !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              {/* Dialog Panel wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden relative z-10"
              >
                {/* Header graphic representing diagnostic context with image background */}
                <div className="relative min-h-[180px] flex flex-col justify-end px-6 py-8 text-white bg-slate-950">
                  {/* Background Image */}
                  <img
                    src={services[selectedService].image}
                    alt={services[selectedService].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  
                  {/* Content (Z-Indexed) */}
                  <div className="relative z-10">
                    <p className="text-xs font-bold text-sky-300 tracking-widest uppercase mb-1">
                      {services[selectedService].badge}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                      {services[selectedService].title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-slate-950/50 hover:bg-slate-950/80 border border-white/10 text-white p-2 rounded-xl z-20 backdrop-blur-xs transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Patient Information Content */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
                  
                  {/* Grid: Indicators vs Remedies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column A: Indicators / Symptoms */}
                    <div className="space-y-3.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span>Common Indications</span>
                      </h4>
                      <ul className="space-y-2">
                        {services[selectedService].details.symptoms.map((sym, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 font-medium">
                            <CheckSquare className="w-4 h-4 text-slate-350 shrink-0 mt-0.5" />
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column B: Treatments / Intervention */}
                    <div className="space-y-3.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span>Clinical Options</span>
                      </h4>
                      <ul className="space-y-2">
                        {services[selectedService].details.treatments.map((tr, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-700 font-semibold">
                            <CheckSquare className="w-4 h-4 text-med-teal shrink-0 mt-0.5" />
                            <span>{tr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Recovery expectations */}
                  <div className="border-t border-slate-100 pt-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Recovery Horizon & Care Philosophy
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-semibold bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {services[selectedService].details.recovery}
                    </p>
                  </div>

                  {/* Actions inside the detailed model view */}
                  <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium text-center sm:text-left">
                      Consult Dr. Debuka at Debuka Hospital, Ranchi
                    </span>
                    <div className="flex items-center space-x-3 w-full sm:w-auto">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="flex-1 sm:flex-initial border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold px-5 py-2.5 rounded-xl text-sm"
                      >
                        Close Details
                      </button>
                      <button
                        onClick={() => {
                          const title = services[selectedService].title;
                          setSelectedService(null);
                          onBookClick(title);
                        }}
                        className="flex-1 sm:flex-initial bg-med-blue hover:bg-med-navy text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-sm flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-4 h-4 text-sky-200" />
                        <span>Book for This Service</span>
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
