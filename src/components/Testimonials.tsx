import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Heart } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'All' | 'Knee/Hip' | 'Trauma' | 'Sports'>('All');

  const testimonials: TestimonialItem[] = [
    {
      id: "t1",
      name: "Amitabh Shah",
      age: 58,
      condition: "Severe Knee Osteoarthritis (Knee Replacement)",
      rating: 5,
      review: "I could barely stand for ten minutes without severe knee aches. Dr. Ekansh Debuka performed a bilateral total knee reconstruction at Debuka Hospital. His surgery prep, counseling, and recovery therapy plan were absolute god-sends. Within 3 weeks, I was walking pain-free. Breathtaking expertise!",
      recoveryTime: "3.5 Weeks to Active Walking",
    },
    {
      id: "t2",
      name: "Rohan Mahto",
      age: 26,
      condition: "Complex Tibial Fracture (Trauma Management)",
      rating: 5,
      review: "After a severe roadside motorbike accident in Ranchi, my shin bone was broken in multiple fragments. Dr. Debuka and his trauma team managed the case in emergency with anatomical plates. His calm assurance, moral strength, and surgical expertise saved my athletic leg. Eternally grateful to Debuka Hospital.",
      recoveryTime: "12 Weeks to full bone fusion"
    },
    {
      id: "t3",
      name: "Pooja Priyadarshini",
      age: 34,
      condition: "Acute ACL Tear & Ligament Meniscus Care",
      rating: 5,
      review: "Injured my knee severely playing badminton. Dr. Ekansh Debuka handled my arthroscopic ACL ligament reconstruction surgery. The micro-incisions were extremely tidy, non-restrictively minor, and the rehab guidelines were customized perfectly. Now my knee joint is completely stable!",
      recoveryTime: "6 Weeks to Light Jogging",
    },
    {
      id: "t4",
      name: "Madan Kishore Lal",
      age: 64,
      condition: "Chronic Hip Joint Degeneration (Total Hip)",
      rating: 5,
      review: "Every night was a struggle with deep osteoarthritis groin pain. Dr. Debuka diagnosed avascular necrosis and successfully replaced my left hip. This team has truly hospital-grade ethics. Caring hospitality at Debuka Hospital has set a benchmark for medical care in Ranchi.",
      recoveryTime: "4 Weeks to Unassisted Mobility"
    },
    {
      id: "t5",
      name: "Sumant Keshri",
      age: 41,
      condition: "Acute Trauma Fracture Restructuring",
      rating: 5,
      review: "A heavy loading fall led to a multi-fragment left shoulder collarbone displacement. Dr. Ekansh performed locking fracture plate fixing surgery. Today my shoulder rotation and bone loading feel completely normal. He is Ranchi's absolute specialist doctor.",
      recoveryTime: "8 Weeks to standard load carrying"
    }
  ];

  // Filter list based on selected category tags
  const filteredTestimonials = testimonials.filter(t => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Knee/Hip') return t.condition.includes('Knee') || t.condition.includes('Hip');
    if (activeTab === 'Trauma') return t.condition.includes('Fracture') || t.condition.includes('Trauma');
    if (activeTab === 'Sports') return t.condition.includes('ACL') || t.condition.includes('Sports') || t.condition.includes('Ligament');
    return true;
  });

  // Ensure sliding coordinates stay within bounds after tab toggling
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Autoplay cycle every 6.5 seconds
  useEffect(() => {
    if (filteredTestimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % filteredTestimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 overflow-hidden relative">
      
      {/* Visual background lights */}
      <div className="absolute top-0 right-10 w-[350px] h-[350px] rounded-full bg-blue-100/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-med-teal uppercase">
            PATIENT VALIDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-med-navy tracking-tight mt-3">
            Patient Experiences
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 leading-relaxed">
            Nothing describes surgical care better than the stories of neighbors walking, running, and living pain-free once again.
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-med-blue to-med-teal rounded-full mx-auto mt-5" />
        </div>

        {/* Categories Tab selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-lg mx-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
          {(['All', 'Knee/Hip', 'Trauma', 'Sports'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs px-4 py-2.5 rounded-xl font-bold tracking-tight transition-all duration-200 cursor-pointer flex-1 text-center ${
                activeTab === tab
                  ? 'bg-white text-med-navy shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Reviews' : tab}
            </button>
          ))}
        </div>

        {/* Carousel Slider Panel with custom AnimatePresence transition */}
        <div className="relative max-w-4xl mx-auto px-1 md:px-10">
          {filteredTestimonials.length > 0 ? (
            <div className="relative min-h-[360px] md:min-h-[300px] flex items-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredTestimonials[currentIndex].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-md relative"
                >
                  {/* Big luxury Quote signifier */}
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-slate-100/80 -scale-x-100 pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    
                    {/* Star scores */}
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                      <span className="text-xs text-slate-400 font-bold ml-2">Verified Patient Story</span>
                    </div>

                    {/* Review text body */}
                    <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed md:leading-loose">
                      "{filteredTestimonials[currentIndex].review}"
                    </p>

                    {/* recovery timeline badge & patient metrics */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      
                      {/* Name credentials */}
                      <div className="flex items-center space-x-3.5">
                        <div className="w-11 h-11 bg-gradient-to-tr from-med-blue to-sky-600 rounded-full flex items-center justify-center text-white text-sm font-extrabold shadow-sm select-none">
                          {filteredTestimonials[currentIndex].name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 leading-none">
                            {filteredTestimonials[currentIndex].name}
                          </p>
                          <p className="text-xs text-slate-400 font-semibold mt-1">
                            Age {filteredTestimonials[currentIndex].age} • Treated for <span className="text-slate-500 font-bold">{filteredTestimonials[currentIndex].condition}</span>
                          </p>
                        </div>
                      </div>

                      {/* Timeline duration tag */}
                      <div className="inline-flex self-start sm:self-center items-center bg-emerald-50 text-emerald-700 border border-emerald-100 px-3.5 py-1.5 rounded-full text-xs font-extrabold max-w-full">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 mr-2" />
                        <span>Timeline: {filteredTestimonials[currentIndex].recoveryTime}</span>
                      </div>

                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-slate-100 rounded-2xl">
              <p className="text-slate-500 font-semibold">No reviews verified yet for this specialty category.</p>
            </div>
          )}

          {/* Navigation Arrows for slide controls */}
          {filteredTestimonials.length > 1 && (
            <div className="flex md:contents">
              <button
                onClick={handlePrev}
                className="absolute left-[-20px] md:left-[-15px] top-[102%] md:top-1/2 md:-translate-y-1/2 bg-white border border-slate-200/80 text-slate-700 hover:text-med-teal hover:border-slate-350 p-3 rounded-full transition-all duration-150 cursor-pointer shadow-sm md:shadow-md z-20 hover:scale-105 active:scale-95 mx-2 md:mx-0"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-[-20px] md:right-[-15px] top-[102%] md:top-1/2 md:-translate-y-1/2 bg-white border border-slate-200/80 text-slate-700 hover:text-med-teal hover:border-slate-350 p-3 rounded-full transition-all duration-150 cursor-pointer shadow-sm md:shadow-md z-20 hover:scale-105 active:scale-95 mx-2 md:mx-0"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Slide page status dots indicator */}
        {filteredTestimonials.length > 1 && (
          <div className="flex justify-center space-x-2.5 mt-8 md:mt-12">
            {filteredTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-med-blue' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
