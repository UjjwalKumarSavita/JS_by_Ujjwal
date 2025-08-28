import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  @Input() src = '';
  @Input() speed = 1;
  @Input() volume = 1; // 0..1
  @Output() speedChange = new EventEmitter<number>();
  @Output() volumeChange = new EventEmitter<number>();
  @Output() ended = new EventEmitter<void>();

  @ViewChild('video', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLInputElement>;

  playing = false;
  duration = 0;
  current = 0;

  ngOnInit() {}

  ngAfterViewInit() {
    const v = this.videoRef.nativeElement;
    v.playbackRate = this.speed;
    v.volume = this.volume;

    v.addEventListener('timeupdate', () => {
      this.current = v.currentTime;
      const input = this.trackRef?.nativeElement;
      if (input && this.duration) input.value = ((this.current / this.duration) * 100).toString();
    });
    v.addEventListener('loadedmetadata', () => this.duration = v.duration || 0);
    v.addEventListener('ended', () => { this.playing = false; this.ended.emit(); });
  }

  toggle() {
    const v = this.videoRef.nativeElement;
    if (v.paused) { v.play(); this.playing = true; } else { v.pause(); this.playing = false; }
  }
  seek(ev: Event) {
    const pct = Number((ev.target as HTMLInputElement).value);
    const v = this.videoRef.nativeElement;
    v.currentTime = (pct / 100) * (this.duration || 0);
  }
  setVol(ev: Event) {
    const vol = Number((ev.target as HTMLInputElement).value);
    this.videoRef.nativeElement.volume = vol;
    this.volumeChange.emit(vol);
  }
  setSpeed(ev: Event) {
    const sp = Number((ev.target as HTMLSelectElement).value);
    this.videoRef.nativeElement.playbackRate = sp;
    this.speedChange.emit(sp);
  }
  fmt(n: number) {
    if (!isFinite(n)) return '0:00';
    const m = Math.floor(n / 60);
    const s = Math.floor(n % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
  fullscreen(wrapper: HTMLElement) {
    if (document.fullscreenElement) document.exitFullscreen();
    else wrapper.requestFullscreen();
  }
}
