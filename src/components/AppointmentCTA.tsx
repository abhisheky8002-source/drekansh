import { motion } from 'motion/react';
import { Calendar, Phone, Clock, BadgeCheck, PhoneCall } from 'lucide-react';

interface AppointmentCTAProps {
  onBookClick: () => void;
}

export default function AppointmentCTA({ onBookClick }: AppointmentCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-med-navy to-med-blue text-white relative overflow-hidden">
      {/* Absolute decorative graphic circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/5 rounded-full blur-3xl pointer-events-none -translate-x-24 -translate-y-24" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-med-teal/10 rounded-full blur-3xl pointer-events-none translate-x-24 translate-y-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Verification icon indicator */}
        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
          <BadgeCheck className="w-4 h-4 text-sky-300 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-100">
            Debuka Hospital Orthopedics Panel Approved
          </span>
        </div>

        {/* Lead titles */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Book Your Orthopedic <br className="sm:hidden" />
            Consultation Today
          </h2>
          <p className="text-base sm:text-lg text-blue-105 font-medium max-w-xl mx-auto opacity-90 leading-relaxed">
            Get professional orthopedic care and personalized treatment guidance. Restore your movement comfort with Ranchi's ethical surgical expert.
          </p>
        </div>

        {/* Dynamic hours display badge */}
        <div className="inline-block bg-med-navy/50 border border-slate-700 p-4.5 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-semibold">
            <div className="flex items-center space-x-2 text-sky-300">
              <Clock className="w-4 h-4" />
              <span>Available Timings:</span>
            </div>
            <div className="text-white">
              Monday – Saturday, 9:00 AM – 5:00 PM
            </div>
          </div>
        </div>

        {/* Instant Action CTA blocks */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto pt-4">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto bg-white hover:bg-slate-150 text-med-navy font-extrabold px-8 py-4.5 rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition-all duration-200 transform active:scale-98 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-med-teal" />
            <span>Book Appointment</span>
          </button>

          <a
            href="tel:9241197116"
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white/80 hover:bg-white/5 text-white font-extrabold px-8 py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-200"
          >
            <PhoneCall className="w-5 h-5 text-sky-300" />
            <span>Call +91 92411 97116</span>
          </a>
        </div>

        {/* Localized trust assurance bar */}
        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
          Over 2,500+ successful joint surgeries and local outpatient consults conducted safely
        </p>

      </div>
    </section>
  );
}
