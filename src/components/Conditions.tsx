import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ShieldCheck, Heart, Search } from 'lucide-react';
import { ConditionItem } from '../types';

export default function Conditions() {
  const [searchTerm, setSearchTerm] = useState('');

  const conditions: ConditionItem[] = [
    {
      id: "back-pain",
      title: "Back Pain & Spine Stiffness",
      description: "Severe or lingering discomfort arising from lumbar disc alignment, muscle strain, or structural spine wear.",
      symptoms: ["Lower lumbar throbbing", "Sciatic nerve radiating soreness", "Stiffness upon waking up"],
      severity: "Moderate",
      iconName: "Activity",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145393/Sciatica.jpg_e45b4v.png"
    },
    {
      id: "knee-pain",
      title: "Knee Osteoarthritis & Degeneration",
      description: "Cartilage wear leading to bone-on-bone friction, inflammation, stiffness, and severe walking limitations.",
      symptoms: ["Joint clicking sounds", "Frictional walking discomfort", "Seasonal knee swelling"],
      severity: "Severe",
      iconName: "Activity",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780229613/b025b372-beb7-49b9-9895-646ced2f2957.png"
    },
    {
      id: "arthritis",
      title: "Arthritis & Chronic Inflammatory Joint Disorders",
      description: "Systemic joint inflammation including Osteoarthritis, Rheumatoid Arthritis, and high uric acid joint crystal flares.",
      symptoms: ["Symmetrical knuckle throbbing", "Morning finger joint locking", "Persistent cartilage aches"],
      severity: "Severe",
      iconName: "Healing",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780229691/3a10fcd7-2560-4300-9174-d8f0bab86fc8.png"
    },
    {
      id: "fractures",
      title: "Traumatic Bone Fractures & Breaks",
      description: "Cracks, hair-line stresses, or complete structural displacement of orthopedic limbs from accidents or sudden sports falls.",
      symptoms: ["Sudden severe structural swell", "Compromised limb mobility", "Vocal grating pain on contact"],
      severity: "Acute",
      iconName: "Bone",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780229815/ca8e2df5-08cc-4921-be3c-6eb83e1d2c4d.png"
    },
    {
      id: "sports-injuries",
      title: "Sports Ligament & Meniscus Tears",
      description: "Ligament stresses, ACL pivots, shoulder cuff tears, or knee meniscus bruises acquired during dynamic active games.",
      symptoms: ["Dynamic knee giving-way", "Instability during sideways pivots", "Sudden pop-sound inside knee"],
      severity: "Acute",
      iconName: "Flame",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780229852/48d6aded-c472-423d-ad68-8a8dd5e3d020.png"
    },
    {
      id: "bone-disorders",
      title: "Osteoporosis & Skeletal Calcium Disorders",
      description: "Reduction in bone mass density, calcium structural loss, making bones brittle and highly susceptible to sudden fracture.",
      symptoms: ["Postural rounding or stoops", "Frequent dull muscular bone ache", "Minor fractures from domestic slips"],
      severity: "Mild",
      iconName: "Activity",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780229928/eff0865a-0349-4e2c-914f-a77a4dbc7b56.png"
    },
    {
      id: "joint-disorders",
      title: "Bursitis & Joint Cartilage Tear",
      description: "Inflammation of fluid-filled cushions (bursae) or protective connective pads guiding smooth shoulder, knee, and hip rotations.",
      symptoms: ["Localized heat or burning", "Sharp pain on specific joint pivots", "Soft fluid-fluctuation feel"],
      severity: "Moderate",
      iconName: "Layers",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780229995/e6d67156-59f8-4a4a-b75a-838a6c57517d.png"
    },
    {
      id: "trauma-cases",
      title: "Complex Poly-Trauma Cases",
      description: "High-energy accident care involving multi-fragment injuries, compound limb displacements, and emergency bone reconstructions.",
      symptoms: ["Multiple fracture alignments", "Soft tissue damage surrounding bone", "Immobilized emergency pathology"],
      severity: "Acute",
      iconName: "Activity",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780230102/pexels-photo-6003301_ibyi0l.jpg"
    }
  ];

  const filteredConditions = conditions.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="conditions" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Ambient Visual graphics */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-blue-50/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase tracking-widest block mb-1">
              PATIENT KNOWLEDGE DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-med-navy tracking-tight mt-1">
              Conditions We Treat
            </h2>
            <div className="h-1.5 w-16 bg-med-teal rounded-full mt-3.5" />
            <p className="text-sm sm:text-base text-slate-500 font-medium mt-4">
              Access trusted, professional information on common orthopedic ailments. Understanding your symptoms is the fundamental first step toward finding a permanent, pain-free cure.
            </p>
          </div>

          {/* Quick Search bar */}
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4.5 h-4.5" />
            </div>
            <input
              type="text"
              placeholder="Search joint pain, arthritis, trauma..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-med-teal focus:ring-2 focus:ring-sky-100 transition-all font-semibold"
            />
          </div>
        </div>

        {/* Dynamic Medical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredConditions.map((condition) => {
            const severityColors = {
              Mild: "bg-emerald-500/90 text-white border-emerald-400",
              Moderate: "bg-blue-600/90 text-white border-blue-500",
              Severe: "bg-amber-500/90 text-white border-amber-400",
              Acute: "bg-rose-600/90 text-white border-rose-400"
            };

            return (
              <motion.div
                key={condition.id}
                layoutId={`card-${condition.id}`}
                className="group border border-slate-100 hover:border-slate-200 bg-slate-50/20 hover:bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Condition Diagnostic Image Cover */}
                  {condition.image && (
                    <div className="h-44 w-full relative overflow-hidden bg-slate-100">
                      <img
                        src={condition.image}
                        alt={condition.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-slate-950/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                        <AlertCircle className={`w-3.5 h-3.5 ${
                          condition.severity === 'Acute' ? 'text-rose-400 animate-pulse' : 'text-slate-300'
                        }`} />
                        <span className="text-[10px] font-bold text-slate-100 uppercase tracking-widest leading-none">
                          Orthopedic Case
                        </span>
                      </div>

                      <span className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${severityColors[condition.severity]}`}>
                        {condition.severity} Severity
                      </span>
                    </div>
                  )}

                  <div className="p-6.5">
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-2.5 group-hover:text-med-teal transition-colors">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5">
                      {condition.description}
                    </p>

                    {/* Diagnostic Symptom checklist */}
                    <div className="space-y-2 mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
                        Identify Your Symptoms
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {condition.symptoms.map((sym, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-med-teal shrink-0" />
                            <span className="text-xs text-slate-600 font-medium leading-none">
                              {sym}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Foot indicators */}
                <div className="px-6.5 pb-6.5 pt-4 border-t border-slate-100/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium flex items-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 mr-1.5" />
                    <span>Specialized treatment protocol available</span>
                  </span>
                </div>
              </motion.div>
            );
          })}

          {filteredConditions.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-16 bg-slate-50 border border-slate-150 rounded-3xl">
              <p className="text-slate-500 font-bold mb-2">No matching conditions found</p>
              <p className="text-xs text-slate-400 font-medium">Please search another keyword or contact us directly.</p>
            </div>
          )}
        </div>

        {/* Local SEO Text and trust assurance block */}
        <div className="mt-16 bg-gradient-to-r from-blue-50/55 to-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200/50 text-med-teal shrink-0">
              <Heart className="w-6 h-6 animate-pulse text-rose-500" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-800">
                Are you experiencing severe local joint pain, skeletal trauma, or stiffness?
              </p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                R Ranchi's reliable orthopedic hospital and surgical trauma specialist is here to support your safe physical recovery.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-xs shrink-0"
          >
            Schedule Clinical Diagnosis
          </a>
        </div>

      </div>
    </section>
  );
}
