import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Clock, Clipboard, FileText, Download, CheckCircle2, User, Sparkles, Map, ArrowUpRight, HelpCircle } from 'lucide-react';
import { AppointmentSlip } from '../types';

interface ContactProps {
  preselectedService: string;
  onClearPreselected: () => void;
}

export default function Contact({ preselectedService, onClearPreselected }: ContactProps) {
  // Booking Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('General Consultation');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM - 11:00 AM');
  const [symptoms, setSymptoms] = useState('');
  const [message, setMessage] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentSlip, setAppointmentSlip] = useState<AppointmentSlip | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle preselected service changes from hero or services click
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const timeSlots = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 12:30 PM",
    "12:30 PM - 02:00 PM",
    "03:00 PM - 04:30 PM",
    "04:30 PM - 05:00 PM"
  ];

  const servicesList = [
    "General Consultation",
    "Joint Pain Treatment",
    "Fracture & Trauma Care",
    "Sports Injury Treatment",
    "Knee & Hip Care",
    "Arthritis Management",
    "Second Opinion Consultation"
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field Validations
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit telephone number.');
      return;
    }
    if (!date) {
      setErrorMsg('Please select a preferred consulting date.');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe clinical booking generation delay
    setTimeout(() => {
      const generatedSlip: AppointmentSlip = {
        slipId: `DEB-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        patientName: name,
        phone: phone,
        email: email || 'N/A',
        date: date,
        timeSlot: timeSlot,
        service: service,
        symptoms: symptoms || 'General orthopedic checkout',
        doctorName: "Dr. Ekansh Debuka",
        hospitalName: "Debuka Hospital, Ranchi",
        status: "Confirmed",
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setAppointmentSlip(generatedSlip);
      setIsSubmitting(false);

      // Reset form variables
      setName('');
      setPhone('');
      setEmail('');
      setSymptoms('');
      setMessage('');
      onClearPreselected();
    }, 1200);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-med-teal uppercase">
            SECURE CONSULT ROUTE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-med-navy tracking-tight mt-3">
            Schedule Appointment
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 leading-relaxed">
            Fill out the verified medical booking panel below. Your confirmation slip acts as your gate pass for clinical check-in at Debuka Hospital.
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-med-blue to-med-teal rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Booking Form / Digital Slip Result */}
          <div className="col-span-1 lg:col-span-7">
            
            <AnimatePresence mode="wait">
              {!appointmentSlip ? (
                /* The Booking Form */
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xs"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-med-blue flex items-center justify-center">
                      <Calendar className="w-5.5 h-5.5 text-med-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">Hospital Consultation Form</h3>
                      <p className="text-xs text-slate-400 font-semibold">Immediate routing to Dr. Debuka's OPD desk</p>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-100/80 text-rose-700 text-xs font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    
                    {/* Input Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Patient Full Name *</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 pl-10 pr-4 font-semibold text-slate-850 focus:outline-none focus:border-med-teal"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Contact Phone Number *</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            required
                            placeholder="9241197116"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 pl-10 pr-4 font-semibold text-slate-850 focus:outline-none focus:border-med-teal"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email and Specialty dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Email Address (Optional)</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            placeholder="patient@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 pl-10 pr-4 font-semibold text-slate-850 focus:outline-none focus:border-med-teal"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Required Service / Procedure</label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 px-4 font-bold text-slate-800 focus:outline-none focus:border-med-teal"
                        >
                          {servicesList.map((svc) => (
                            <option key={svc} value={svc}>{svc}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date picker and Time slot selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Consulting Date *</label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={date}
                            min={new Date().toISOString().split('T')[0]} // Block previous days
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 px-4 font-bold text-slate-800 focus:outline-none focus:border-med-teal"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Preferred Time Slot</label>
                        <select
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 px-4 font-bold text-slate-800 focus:outline-none focus:border-med-teal"
                        >
                          {timeSlots.map((ts) => (
                            <option key={ts} value={ts}>{ts}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Key Symptom descriptors */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">Key Symptoms / Concerns</label>
                      <input
                        type="text"
                        placeholder="e.g. Knee pain when climbing stairs, swelling in ankle after a fall"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        className="bg-white border border-slate-250 rounded-xl w-full text-sm py-3.5 px-4 font-semibold text-slate-855 focus:outline-none focus:border-med-teal"
                      />
                    </div>

                    {/* Additional Message notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">Additional Notes / History (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Share any past histories, surgical details, or specific concerns in detail..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-white border border-slate-250 rounded-xl w-full text-sm p-4 font-semibold text-slate-855 focus:outline-none focus:border-med-teal resize-none"
                      />
                    </div>

                    {/* Submit booking button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-med-blue hover:bg-med-navy text-white text-sm font-bold py-4 rounded-xl shadow-md transition-all duration-150 transform active:scale-99 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-80"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span>Processing Clinician Clearance...</span>
                        </div>
                      ) : (
                        <>
                          <Calendar className="w-5.5 h-5.5 text-sky-200" />
                          <span>Generate Clinical Registration Slip</span>
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              ) : (
                /* Patient Confirmation Slip view */
                <motion.div
                  key="appointment-slip"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-50/10 border border-emerald-100 rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-x-12 -translate-y-12" />

                  {/* Slip Header banner */}
                  <div className="flex items-center space-x-3 pb-6 border-b border-dashed border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-550 flex items-center justify-center text-white">
                      <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-800 flex items-center space-x-2">
                        <span>Registration Generated</span>
                        <Sparkles className="w-4.5 h-4.5 text-amber-500" />
                      </h3>
                      <p className="text-xs text-slate-400 font-semibold">Please carry this digital receipt to the OPD receptionist</p>
                    </div>
                  </div>

                  {/* Print Layout container */}
                  <div className="py-6 space-y-5" id="printable-receipt">
                    <div className="flex items-center justify-between bg-slate-50/55 p-3.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Appointment ID</span>
                      <span className="text-sm font-extrabold text-slate-800 font-mono tracking-wider">{appointmentSlip.slipId}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Patient Name</span>
                        <span className="text-sm font-extrabold text-slate-800 block mt-0.5">{appointmentSlip.patientName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Contact Number</span>
                        <span className="text-sm font-bold text-slate-800 block mt-0.5">{appointmentSlip.phone}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Medical Officer</span>
                        <span className="text-sm font-extrabold text-med-blue block mt-0.5">{appointmentSlip.doctorName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Requested Care</span>
                        <span className="text-sm font-bold text-slate-800 block mt-0.5">{appointmentSlip.service}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Confirmed Date</span>
                        <span className="text-sm font-extrabold text-med-teal block mt-0.5">{appointmentSlip.date}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Scheduled Window</span>
                        <span className="text-sm font-extrabold text-slate-800 block mt-0.5">{appointmentSlip.timeSlot}</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Clinical Facility</span>
                      <span className="text-sm font-semibold text-slate-700 block mt-0.5">Debuka Hospital, Lalpur, Ranchi, Jharkhand, India</span>
                    </div>

                    <div className="bg-blue-50/55 text-med-blue p-4 rounded-xl text-xs font-semibold leading-relaxed border border-blue-100">
                      <strong>Check-in Instructions:</strong> Please arrive 15 minutes before your scheduled slot ({appointmentSlip.timeSlot}) to complete registration protocols and digital health profiling. For immediate re-scheduling, call the desk at <strong>9241197116</strong>.
                    </div>
                  </div>

                  {/* Actions for generating print outputs or scheduling another */}
                  <div className="border-t border-slate-200/85 pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <button
                      onClick={() => setAppointmentSlip(null)}
                      className="w-full sm:w-auto text-slate-500 hover:text-slate-800 text-xs font-extrabold"
                    >
                      Book Another Consultation
                    </button>

                    <div className="flex space-x-3 w-full sm:w-auto">
                      <button
                        onClick={handlePrintSlip}
                        className="flex-1 sm:flex-initial border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2"
                      >
                        <FileText className="w-4.5 h-4.5 text-slate-500" />
                        <span>Print Receipt</span>
                      </button>

                      <button
                        onClick={() => {
                          const text = `
-----------------------------
DEBUKA HOSPITAL APPOINTMENT
-----------------------------
ID: ${appointmentSlip.slipId}
Patient: ${appointmentSlip.patientName}
Date: ${appointmentSlip.date}
Slot: ${appointmentSlip.timeSlot}
Doctor: ${appointmentSlip.doctorName}
Service: ${appointmentSlip.service}
-----------------------------
Address: Lalpur, Ranchi, India
Desk Phone: 9241197116
                          `;
                          const blob = new Blob([text], { type: 'text/plain' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `Debuka_Appointment_${appointmentSlip.slipId}.txt`;
                          a.click();
                          URL.revokeObjectURL(url);
                        }}
                        className="flex-1 sm:flex-initial bg-med-blue hover:bg-med-navy text-white font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-sm"
                      >
                        <Download className="w-4.5 h-4.5 text-sky-200" />
                        <span>Download Info</span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Block: Patient Info and Map details */}
          <div className="col-span-1 lg:col-span-5 space-y-8">
            
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6.5 space-y-6">
              
              <h3 className="text-lg font-bold text-slate-800">
                Clinic Coordinates
              </h3>

              {/* Coordinate Items list */}
              <div className="space-y-4.5">
                
                {/* Map location address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Hospital Address</span>
                    <p className="text-sm font-extrabold text-slate-800 mt-0.5">Debuka Hospital</p>
                    <p className="text-xs text-slate-500 font-semibold leading-normal mt-0.5">
                      Lalpur, Ranchi, Jharkhand 834001, India
                    </p>
                  </div>
                </div>

                {/* Direct Dial */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-med-teal shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Direct Appointment Desk</span>
                    <p className="text-sm font-extrabold text-slate-800 mt-0.5">
                      <a href="tel:9241197116" className="hover:text-med-teal transition-colors">+91 92411 97116</a>
                    </p>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Desk Available 9:00 AM – 5:00 PM</p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Email Inquiry</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      <a href="mailto:drekanshdebuka4@gmail.com" className="hover:text-med-teal transition-colors">drekanshdebuka4@gmail.com</a>
                    </p>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Response within 24 operational hours</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Embedded Google Maps locator frame */}
            <div className="bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-xs relative">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-150 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 flex items-center space-x-1.5">
                  <Map className="w-4 h-4 text-med-teal" />
                  <span>Interactive Clinic Locator</span>
                </span>
                
                {/* Anchor check Map direction link */}
                <a
                  href="https://maps.google.com/?q=Debuka+Hospital+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-med-teal hover:underline flex items-center"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Map embed frame */}
              <div className="w-full h-[260px] bg-slate-50 relative">
                <iframe
                  title="Debuka Hospital Ranchi Location Map"
                  src="https://www.google.com/maps/embed/v1/place?key=&q=Debuka+Hospital,Ranchi,Jharkhand,India"
                  className="w-full h-full border-0 grayscale opacity-90 contrast-110"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Stylized custom HUD card covering the key embed link to look absolute premium and hospital-grade */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 border border-slate-100 p-3 rounded-xl shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-800 leading-none">Debuka Hospital Ranchi</p>
                    <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase tracking-wider">Jharkhand, India</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Debuka+Hospital+Ranchi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-med-blue hover:bg-med-navy text-white text-[9px] font-extrabold px-3 py-1.5 rounded-lg flex items-center space-x-1"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3 h-3 text-sky-200" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
