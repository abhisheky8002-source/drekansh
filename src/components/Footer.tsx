import { Phone, Mail, Instagram, MapPin, Activity, HelpCircle, ArrowUp, Calendar } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-med-navy text-white pt-16 pb-12 relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-base font-bold tracking-tight">
                Dr. Ekansh Debuka
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-semibold leading-relaxed">
              Orthopedic Surgeon Consultant at Debuka Hospital Lalpur, Ranchi. Dedicated to restoring patient joint flexibility, relieving chronic pain, and conducting ethical bone surgeries.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/dr_ekanshdebuka" 
                target="_blank" 
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-slate-800/80 hover:text-rose-400 flex items-center justify-center border border-white/5 transition-all"
                aria-label="Instagram Handle"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <span className="text-xs text-slate-400 font-bold">@dr_ekanshdebuka</span>
            </div>
          </div>

          {/* Quick links navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-med-teal cursor-pointer">
                  Home Landing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-med-teal cursor-pointer">
                  Meet Dr. Debuka (About)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-med-teal cursor-pointer">
                  Orthopedic Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('conditions')} className="hover:text-med-teal cursor-pointer">
                  Conditions We Treat
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('patient-journey')} className="hover:text-med-teal cursor-pointer">
                  Your Treatment Journey
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('testimonials')} className="hover:text-med-teal cursor-pointer">
                  Verified Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-med-teal cursor-pointer">
                  Bookings / Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Clinical Specialties Directory quick look */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Clinical Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>Joint Pain Treatment</li>
              <li>Fracture & Trauma Management</li>
              <li>Sports Ligament Reconstruction</li>
              <li>Bilateral Knee & Hip Arthroplasty</li>
              <li>Geriatric Arthritis Treatment</li>
              <li>Orthopedic Second Opinions</li>
            </ul>
          </div>

          {/* Clinical info / Location timings column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Hospital Timings & Address
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Debuka Hospital, Lalpur,<br />Ranchi, Jharkhand, India.</span>
              </div>
              
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:9241197116" className="hover:text-med-teal font-semibold">+91 92411 97116</a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:drekanshdebuka4@gmail.com" className="hover:text-med-teal">drekanshdebuka4@gmail.com</a>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400">
                <p className="font-bold uppercase tracking-wider text-slate-400 mb-1">OPD Consultation Hours</p>
                <p>Monday – Saturday: 9:00 AM – 5:00 PM</p>
                <p className="text-slate-500 font-medium mt-0.5">Closed on Sunday (Emergencies only)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright & Local SEO tags */}
        <div className="mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          
          {/* Copyright line */}
          <div className="font-medium text-center md:text-left">
            <p>© 2026 Dr. Ekansh Debuka Orthopedic Care. All rights reserved.</p>
            <p className="text-slate-600 font-bold mt-1.5 leading-relaxed max-w-xl">
              Local SEO Tags: Orthopedic Surgeon Ranchi • Bone Specialist Ranchi • Knee Pain Doctor Ranchi • Joint Pain Treatment Ranchi • Orthopedic Hospital Ranchi • Debuka Hospital Orthopedic Clinic Ranchi
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={handleScrollTop}
            className="bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 hover:border-white/15 px-3.5 py-2 rounded-xl transition-all duration-150 flex items-center space-x-1.5 cursor-pointer shrink-0"
          >
            <span>Scroll to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>

        </div>

      </div>
    </footer>
  );
}
