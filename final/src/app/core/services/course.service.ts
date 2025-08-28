import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Course } from '../models/course';
import { Section } from '../models/curriculum';
import { Lesson } from '../models/lesson';


@Injectable({ providedIn: 'root' })
export class CourseService {
private api = inject(ApiService);


courses: WritableSignal<Course[]> = signal<Course[]>([]);
loaded = computed(() => this.courses().length > 0);


async loadCourses() {
const data = await this.api.get<Course[]>(`/courses`).toPromise();
this.courses.set(data || []);
}


getCourses(): Course[] { return this.courses(); }


async getCourse(id: number): Promise<Course | undefined> {
try { return await this.api.get<Course>(`/courses/${id}`).toPromise(); } catch { return undefined; }
}


// curriculum is stored as object keyed by courseId → fetch once then pick key
async getCurriculum(courseId: number): Promise<Section[]> {
const map = await this.api.get<Record<string, Section[]>>(`/curriculum`).toPromise();
return (map?.[String(courseId)] || []);
}


// helpers previously referenced by templates
findLessonById(course: { id: number }, lessonId: number, sections?: Section[]): Lesson | undefined {
const list = sections || [];
for (const s of list) {
const l = s.lectures.find(x => x.id === lessonId);
if (l) return l;
}
return undefined;
}


weeksToBucket(weeks?: number): 'week' | 'month' | 'six' | 'year' | 'All' {
if (!weeks) return 'All';
if (weeks <= 4) return 'week';
if (weeks <= 16) return 'month';
if (weeks <= 26) return 'six';
return 'year';
}


search(q: string): Course[] {
const term = q?.toLowerCase().trim();
if (!term) return this.courses();
return this.courses().filter(c =>
c.title.toLowerCase().includes(term) || c.subtitle?.toLowerCase().includes(term) ||
c.skills?.some(s => s.toLowerCase().includes(term))
);
}
}