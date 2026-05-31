import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Conditions from './components/Conditions';
import WhyChoose from './components/WhyChoose';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleBookClick = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    
    // Smooth scroll directly to the contact section with precise offset management
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const clearPreselectedService = () => {
    setPreselectedService('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased overflow-x-hidden selection:bg-blue-100 selection:text-med-navy">
      {/* Sticky Top Header Navigation */}
      <Navbar onBookClick={() => handleBookClick()} />

      {/* Hero Header */}
      <Hero onBookClick={() => handleBookClick()} />

      {/* Surgeon Biography section */}
      <About />

      {/* Specialties Services grid with detailed sub-modal routing */}
      <Services onBookClick={(svc) => handleBookClick(svc)} />

      {/* Conditions treated knowledge grids */}
      <Conditions />

      {/* Core Practice value list */}
      <WhyChoose />

      {/* Visual Patient roadmap process timeline */}
      <Journey />

      {/* Patient testimonial carousel & category toggles */}
      <Testimonials />

      {/* Mid-page Lead-generation action CTA */}
      <AppointmentCTA onBookClick={() => handleBookClick()} />

      {/* Appointment booking sheet form combined with Google Maps locator */}
      <Contact 
        preselectedService={preselectedService} 
        onClearPreselected={clearPreselectedService} 
      />

      {/* Elegant informative dark footer with SEO credits */}
      <Footer />
    </div>
  );
}
