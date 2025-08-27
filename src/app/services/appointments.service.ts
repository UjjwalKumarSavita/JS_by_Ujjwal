import { Injectable, signal } from '@angular/core';
import { Appointment, Specialization } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  private key = 'hc_appointments';
  private list = signal<Appointment[]>(this.restore());

  all() { return this.list(); }

  upcoming(days = 7) {
    const now = new Date();
    const end = new Date(now); end.setDate(now.getDate() + days);
    return this.all().filter(a => a.status === 'scheduled' && new Date(a.date) <= end);
  }

  totalThisMonth() {
    const now = new Date();
    const ym = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    return this.all().filter(a => a.date.startsWith(ym)).length;
  }

  completedCount() { return this.all().filter(a => a.status === 'completed').length; }

  bySpecialization(): Record<Specialization, number> {
    const acc: Record<Specialization, number> =
      { Cardiology:0, Orthopedics:0, Neurology:0, Dermatology:0, Pediatrics:0 };
    this.all().forEach(a => acc[a.specialization]++);
    return acc;
  }

  create(appt: Omit<Appointment, 'id'>) {
    const nextId = Math.max(...this.all().map(a => a.id), 0) + 1;
    const created = { id: nextId, ...appt };
    this.list.update(arr => {
      const updated = [...arr, created];
      this.persist(updated);
      return updated;
    });
  }

  update(appt: Appointment) {
    this.list.update(arr => {
      const updated = arr.map(a => a.id === appt.id ? appt : a);
      this.persist(updated); return updated;
    });
  }

  private restore(): Appointment[] {
    const raw = localStorage.getItem(this.key);
    if (raw) return JSON.parse(raw) as Appointment[];
    const seeded = this.seed();
    localStorage.setItem(this.key, JSON.stringify(seeded));
    return seeded;
  }

  private persist(list: Appointment[]) {
    localStorage.setItem(this.key, JSON.stringify(list));
  }

  private seed(): Appointment[] {
    const today = new Date();
    const iso = (d: Date) => d.toISOString().slice(0,10);

    const d0 = iso(today);
    const d1 = iso(new Date(today.getFullYear(), today.getMonth(), today.getDate()+1));
    const d2 = iso(new Date(today.getFullYear(), today.getMonth(), today.getDate()+2));
    const d_1 = iso(new Date(today.getFullYear(), today.getMonth(), today.getDate()-1));
    const d_2 = iso(new Date(today.getFullYear(), today.getMonth(), today.getDate()-2));

    return [
      { id:1, patient:'John Smith',   doctor:'Dr. Sarah Johnson',   specialization:'Cardiology',  date:d0,  time:'10:00', durationMin:30, room:'Cardiology Wing - Room 205', status:'scheduled', notes:'Regular checkup and heart monitoring' },
      { id:2, patient:'Emily Davis',  doctor:'Dr. Michael Brown',   specialization:'Orthopedics', date:d0,  time:'14:30', durationMin:45, room:'Orthopedics Dept - Room 102', status:'scheduled', notes:'Knee pain consultation' },
      { id:3, patient:'Robert Wilson',doctor:'Dr. Sarah Johnson',   specialization:'Cardiology',  date:d1,  time:'09:15', durationMin:30, room:'Cardiology Wing - Room 205', status:'scheduled', notes:'Follow-up after cardiac procedure' },
      { id:4, patient:'Lisa Thompson',doctor:'Dr. Amanda Wilson',   specialization:'Dermatology', date:d_1, time:'11:00', durationMin:20, room:'Dermatology Clinic - Room 301', status:'completed', notes:'Skin condition examination' },
      { id:5, patient:'Mark Johnson', doctor:'Dr. David Lee',       specialization:'Neurology',   date:d2,  time:'15:45', durationMin:40, room:'Neurology Department - Room 401', status:'scheduled', notes:'Headache evaluation' },
      { id:6, patient:'Susan Miller', doctor:'Dr. Michael Brown',   specialization:'Orthopedics', date:d_2, time:'08:30', durationMin:30, room:'Orthopedics Dept - Room 102', status:'cancelled', notes:'Back pain consultation' }
    ];
  }
}
