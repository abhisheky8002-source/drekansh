import { motion } from 'motion/react';
import { Shield, Sparkles, Award, UserCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export default function About() {
  const trustBadges = [
    {
      title: "Orthopedic Specialist",
      desc: "Comprehensive diagnosis of structural bone and cartilage conditions",
      icon: Award,
      color: "bg-blue-50 text-med-teal"
    },
    {
      title: "Patient-Centered Care",
      desc: "Individualized therapy plans prioritizing minimal downtime and recovery",
      icon: HeartHandshake,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Surgical Expertise",
      desc: "Advanced training in trauma cases, joint reconstruction and arthroplasty",
      icon: Shield,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Advanced Treatment",
      desc: "State-of-the-art non-surgical and surgical medical treatment facilities",
      icon: Sparkles,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  const credentials = [
    { year: "Expertise", title: "Comprehensive Joint and Complex Trauma Care" },
    { year: "Affiliation", title: "Senior Consultant, Debuka Hospital Ranchi" },
    { year: "Focus Areas", title: "Hip/Knee Arthroplasty, Sports Medicine & Arthroscopy" },
    { year: "Philosophy", title: "Ethical, evidence-based orthopedic consulting" }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Doctor Imagery & Trust Badging Card */}
          <div className="col-span-1 lg:col-span-5 relative flex flex-col items-center">
            
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4]">
              {/* Abstract decorative frame backdrops */}
              <div className="absolute inset-0 rounded-[2rem] bg-slate-100 transform -rotate-3 -z-10" />
              <div className="absolute right-0 bottom-0 w-3/4 h-3/4 rounded-[2rem] bg-sky-50 -z-20" />

              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl bg-slate-50">
                <img
                  src="https://res.cloudinary.com/dr5obadvt/image/upload/v1780229254/587802656_17842679394634714_3646617993978590076_n_udyfjs.jpg"
                  alt="Dr. Ekansh Debuka consulting"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Card: Debuka Hospital accreditation info */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-slate-100 shadow-xl rounded-2xl p-5 text-center">
                <span className="text-xs font-bold text-med-teal uppercase tracking-wider block mb-1">
                  CURRENT AFFILIATION
                </span>
                <p className="text-sm font-extrabold text-med-navy leading-snug">
                  Debuka Hospital, Ranchi
                </p>
                <div className="flex items-center justify-center space-x-1.5 mt-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                  <span className="text-xs text-slate-500 font-medium">Verified Medical Practice</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Content Column */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-wider text-med-teal uppercase block">
                MEET THE SURGEON
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-med-navy">
                Dr. Ekansh Debuka
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-400 mt-1 uppercase tracking-widest">
                Orthopedic Surgeon & Bone Care Expert
              </p>
              <div className="h-1.5 w-16 bg-gradient-to-r from-med-blue to-med-teal rounded-full mt-3" />
            </div>

            {/* Surgeon Description from DOCTOR DETAILS */}
            <p className="text-slate-600 leading-relaxed font-medium text-base">
              Dr. Ekansh Debuka is an orthopedic surgeon at Debuka Hospital Ranchi, dedicated to providing advanced orthopedic treatment and compassionate patient care. With expertise in bone and joint disorders, trauma care, and orthopedic surgery, his focus is on helping patients recover mobility and drastically improve their overall quality of life.
            </p>

            {/* Quick credentials / highlights list */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Clinical Focus & Strengths
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex space-x-3.5 items-start p-3.5 rounded-xl bg-slate-50 border border-slate-100/50">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-med-teal shrink-0">
                      <span className="text-[10px] font-bold font-mono text-med-blue">0{idx+1}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">{cred.year}</span>
                      <span className="text-sm text-slate-800 font-bold block mt-0.5">{cred.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor's Quote card with a signature placeholder */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 border border-slate-100 rounded-2xl p-6 relative">
              <span className="text-4xl text-blue-200/50 font-serif absolute top-4 left-4 pointer-events-none">“</span>
              <p className="italic text-slate-600 text-sm md:text-base relative z-10 pl-6 pr-4">
                My mission is simple: to combine surgical precision with compassionate care, enabling patients to recover their active lifestyles. At Debuka Hospital, we treat each pathology with personalized dignity.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-150 pt-4 pl-6">
                <div>
                  <p className="text-xs font-bold text-med-navy">Dr. Ekansh Debuka</p>
                  <p className="text-[10px] text-slate-400 font-medium">Orthopedic Surgeon, Ranchi</p>
                </div>
                {/* Simulated luxury cursive/styled signature */}
                <div className="font-serif italic text-lg tracking-widest text-slate-500 font-medium pr-4 select-none opacity-80" style={{ fontFamily: 'Georgia, serif' }}>
                  Dr. E. Debuka
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Block Trust Badges Grid inside the About Section */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">
              Core Pillars of Practice
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-med-navy tracking-tight mt-2">
              Clinical Quality in Every Aspect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-slate-100 hover:border-blue-100 p-6 rounded-2xl shadow-xs transition-all duration-200 flex flex-col space-y-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${badge.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-800 tracking-tight">
                      {badge.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1.5">
                      {badge.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
