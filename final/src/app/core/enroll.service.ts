import { Injectable, computed, effect, signal } from '@angular/core';
import { Course } from './models/course';
import { CourseService } from './course.service';

type CompletedMap = Record<string, boolean>; // lessonId -> true

interface CourseState {
  enrolled: boolean;
  completed: CompletedMap;
  last?: string;   // last lessonId played
  speed?: number;  // playback speed
  volume?: number; // 0..1
}

type StoreShape = Record<string, CourseState>;
const STORAGE_KEY = 'enroll_state_v2';

@Injectable({ providedIn: 'root' })
export class EnrollService {
  private store = signal<StoreShape>(this.load());

  constructor(private courses: CourseService) {
    effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(this.store())));
  }

  private load(): StoreShape {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  isEnrolled = (id: string) => !!this.store()[id]?.enrolled;

  enroll(id: string) {
    const s = { ...this.store() };
    s[id] = s[id] || { enrolled: false, completed: {} };
    s[id].enrolled = true;
    s[id].last = s[id].last ?? this.courses.firstLessonId(this.courses.getCourseById(id)!);
    this.store.set(s);
  }

  unenroll(id: string) {
    const s = { ...this.store() };
    if (!s[id]) return;
    s[id].enrolled = false;
    s[id].completed = {};
    s[id].last = undefined;
    this.store.set(s);
  }

  toggleLesson(courseId: string, secLessonId: string) {
    const s = { ...this.store() };
    s[courseId] = s[courseId] || { enrolled: true, completed: {} };
    s[courseId].completed[secLessonId] = !s[courseId].completed[secLessonId];
    this.store.set(s);
  }

  isLessonDone(courseId: string, secLessonId: string): boolean {
    return !!this.store()[courseId]?.completed?.[secLessonId];
  }

  setLast(courseId: string, lessonId: string) {
    const s = { ...this.store() };
    s[courseId] = s[courseId] || { enrolled: true, completed: {} };
    s[courseId].last = lessonId;
    this.store.set(s);
  }
  getLast(courseId: string): string | undefined {
    return this.store()[courseId]?.last;
  }

  setSpeed(courseId: string, speed: number) {
    const s = { ...this.store() };
    s[courseId] = s[courseId] || { enrolled: true, completed: {} };
    s[courseId].speed = speed;
    this.store.set(s);
  }
  getSpeed(courseId: string): number { return this.store()[courseId]?.speed ?? 1; }

  setVolume(courseId: string, volume: number) {
    const s = { ...this.store() };
    s[courseId] = s[courseId] || { enrolled: true, completed: {} };
    s[courseId].volume = volume;
    this.store.set(s);
  }
  getVolume(courseId: string): number { return this.store()[courseId]?.volume ?? 1; }

  totalLessons(course: Course): number {
    return course.curriculum.reduce((acc, sec) => acc + (sec.lessons?.length || 0), 0);
  }

  doneLessons(courseId: string): number {
    return Object.values(this.store()[courseId]?.completed || {}).filter(Boolean).length;
  }

  progressPercent(course: Course): number {
    const total = this.totalLessons(course);
    if (!total) return 0;
    const done = this.doneLessons(course.id);
    return Math.round((done / total) * 100);
  }

  isCompleted(course: Course): boolean {
    const total = this.totalLessons(course);
    return total > 0 && this.progressPercent(course) >= 100;
  }

  enrolledIds = computed(() =>
    Object.entries(this.store())
      .filter(([, st]) => st.enrolled)
      .map(([id]) => id)
  );
}
