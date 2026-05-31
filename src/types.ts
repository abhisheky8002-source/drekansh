export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  iconName: string;
}

export interface ConditionItem {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  severity: 'Mild' | 'Moderate' | 'Severe' | 'Acute';
  iconName: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  condition: string;
  rating: number;
  review: string;
  recoveryTime: string;
  photoUrl?: string;
}

export interface AppointmentSlip {
  slipId: string;
  patientName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  service: string;
  symptoms: string;
  doctorName: string;
  hospitalName: string;
  status: 'Confirmed' | 'Pending Verification';
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
