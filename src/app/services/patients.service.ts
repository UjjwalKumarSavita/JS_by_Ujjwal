import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({ providedIn: 'root' })
export class PatientsService {
  private key = 'hc_patients';

  private seed(): Patient[] {
    return [
      { id: 1, name: 'John Smith', active: true },
      { id: 2, name: 'Emily Davis', active: true },
      { id: 3, name: 'Robert Wilson', active: true },
      { id: 4, name: 'Lisa Thompson', active: true },
      { id: 5, name: 'Mark Johnson', active: true },
      { id: 6, name: 'Susan Miller', active: false }
    ];
  }

  private get store(): Patient[] {
    const raw = localStorage.getItem(this.key);
    if (raw) return JSON.parse(raw);
    const seeded = this.seed();
    localStorage.setItem(this.key, JSON.stringify(seeded));
    return seeded;
  }

  all(): Patient[] { return this.store; }
  countActive(): number { return this.store.filter(p => p.active).length; }
}
