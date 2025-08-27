import { Component, computed, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppointmentsService } from '../../services/appointments.service';
import { Appointment, Specialization } from '../../models/appointment.model';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';

type StatusUnion = 'scheduled' | 'completed' | 'cancelled';

@Component({
  standalone: true,
  selector: 'app-appointments',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule,AppointmentCardComponent
  ],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  @ViewChild('dlg', { static: false }) dlg!: ElementRef<HTMLDialogElement>;

  specs: Specialization[] = ['Cardiology','Orthopedics','Neurology','Dermatology','Pediatrics'];
  q = '';

  form!: FormGroup;

  private editingId = signal<number|null>(null);
  editing = computed(() => this.editingId() !== null);

  constructor(private appts: AppointmentsService, private fb: FormBuilder) {
    // Initialize here to avoid "used before initialization"
    this.form = this.fb.group({
      id:        [0],
      patient:   ['', Validators.required],
      doctor:    ['', Validators.required],
      specialization: ['Cardiology' as Specialization, Validators.required],
      date:      ['', Validators.required],
      time:      ['', Validators.required],
      durationMin: [30, Validators.required],
      room:      ['', Validators.required],
      status:    ['scheduled' as StatusUnion],
      notes:     ['']
    });
  }

  all() { return this.appts.all(); }

  filtered(): Appointment[] {
    const term = this.q.toLowerCase().trim();
    if (!term) return this.all();
    return this.all().filter((a: Appointment) =>
      [a.patient,a.doctor,a.specialization,a.status].join(' ').toLowerCase().includes(term)
    );
  }

  onView(a: Appointment) {
    alert(`${a.patient} with ${a.doctor}\n${a.date} ${a.time} (${a.durationMin} min)\n${a.room}\n${a.notes ?? ''}`);
  }

  openCreate() {
    this.editingId.set(null);
    this.form.reset({
      id: 0,
      patient: '', doctor: '',
      specialization: 'Cardiology' as Specialization,
      date: '', time: '',
      durationMin: 30,
      room: '',
      status: 'scheduled' as StatusUnion,
      notes: ''
    });
    this.dlg.nativeElement.showModal();
  }

  openEdit(a: Appointment) {
    this.editingId.set(a.id);
    this.form.patchValue(a as any);
    this.dlg.nativeElement.showModal();
  }

  save() {
    if (this.form.invalid) return;

    const value = this.form.value as unknown as Appointment;
    if (this.editing()) {
      this.appts.update(value);
    } else {
      const { id: _discard, ...rest } = value as any;
      this.appts.create(rest);
    }
    this.dlg.nativeElement.close();
  }
}
