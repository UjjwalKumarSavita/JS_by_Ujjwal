import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentsService } from '../../services/appointments.service';
import { PatientsService } from '../../services/patients.service';
import { Appointment } from '../../models/appointment.model';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalThisMonth = 0;
  completed = 0;
  upcoming: Appointment[] = [];
  activePatients = 0;
  firstName = 'John';

  constructor(private appts: AppointmentsService, private patients: PatientsService) {}

  ngOnInit(): void {
    this.totalThisMonth = this.appts.totalThisMonth();
    this.completed = this.appts.completedCount();
    this.upcoming = this.appts.upcoming(7);
    this.activePatients = this.patients.countActive();
  }
}
