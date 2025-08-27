import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentsService } from '../../services/appointments.service';

import { Appointment } from '../../models/appointment.model';

@Component({
  standalone: true,
  selector: 'app-analytics',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  patientsTotal = 156;               // demo static
  thisMonth = 0;
  completionRate = 0;
  specializationData: [string, number][] = [];
  weekly = [14, 21, 18, 25, 20, 28]; // demo static

  constructor(private appts: AppointmentsService) {}

  ngOnInit(): void {
    this.thisMonth = this.appts.totalThisMonth();
    const all = this.appts.all();
    const completed = all.filter((a: Appointment) => a.status === 'completed').length;
    this.completionRate = Math.round((completed / Math.max(all.length,1)) * 1000)/10;
    const special = this.appts.bySpecialization();
    this.specializationData = Object.entries(special);
  }
}
