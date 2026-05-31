import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Activity } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'conditions', 'why-dr-debuka', 'patient-journey', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Dr. Debuka', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Conditions', id: 'conditions' },
    { label: 'Why Choose Us', id: 'why-dr-debuka' },
    { label: 'Patient Journey', id: 'patient-journey' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-med-blue flex items-center justify-center text-white shadow-md shadow-blue-500/10">
              <Activity className="w-5.5 h-5.5 animate-pulse text-sky-400" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-med-navy block leading-none">
                Dr. Ekansh Debuka
              </span>
              <span className="text-xs text-med-slate font-medium block mt-1 tracking-wider uppercase">
                Orthopedic Surgeon
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-med-teal cursor-pointer relative py-2 ${
                  activeSection === item.id
                    ? 'text-med-teal font-semibold'
                    : 'text-slate-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-med-teal rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Contact and Appointment CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:9241197116"
              className="flex items-center text-slate-700 hover:text-med-teal font-semibold text-sm mr-2 transition-colors duration-150"
            >
              <Phone className="w-4 h-4 text-med-teal mr-2" />
              <span>+91 92411 97116</span>
            </a>
            <button
              onClick={onBookClick}
              className="bg-med-blue hover:bg-med-navy text-white text-xs md:text-sm px-5 py-2.5 rounded-xl font-semibold shadow-sm transition-all duration-200 transform active:scale-95 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-med-teal p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-y-auto max-h-[85vh]">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-3 rounded-lg text-base font-semibold ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-med-teal'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-slate-100 pt-4 mt-4 space-y-4">
              <div className="flex items-center px-3 py-2 text-slate-700 font-semibold">
                <Phone className="w-5 h-5 text-med-teal mr-3" />
                <a href="tel:9241197116" className="text-base text-slate-800 hover:text-med-teal">
                  +91 92411 97116
                </a>
              </div>
              <div className="px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-med-blue hover:bg-med-navy text-white text-center py-3 rounded-xl font-bold transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-sky-200" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
