export type Specialization = 'Cardiology' | 'Orthopedics' | 'Neurology' | 'Dermatology' | 'Pediatrics';

export interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  specialization: Specialization;
  date: string;         // ISO yyyy-mm-dd
  time: string;         // "HH:mm"
  durationMin: number;
  room: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}
