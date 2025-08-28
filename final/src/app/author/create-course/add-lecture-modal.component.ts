import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type LecturePayload = {
  title: string;
  type: 'video'|'text'|'pdf';
  description?: string;
  durationMinutes?: number;
  url?: string;
  content?: string;
};

@Component({
  selector: 'app-add-lecture-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-lecture-modal.component.html',
  styleUrls: ['./add-lecture-modal.component.scss']
})
export class AddLectureModalComponent {
  @Output() close = new EventEmitter<LecturePayload | null>();

  type: 'video'|'text'|'pdf' = 'video';
  title = '';
  description = '';
  durationMinutes: number | null = 3;
  url = '';
  content = '';

  submit(){
    if (!this.title.trim()) { alert('Please enter a topic title'); return; }
    const payload: LecturePayload = {
      title: this.title.trim(),
      type: this.type,
      description: this.description || undefined,
      durationMinutes: this.durationMinutes || undefined,
    };
    if (this.type !== 'text') payload.url = this.url || '';
    if (this.type === 'text') payload.content = this.content || '';
    this.close.emit(payload);
  }
}
