import { Injectable, signal } from '@angular/core';
import { Course, CourseStatus, Lesson, Section } from './models/course';

const LS = 'app.courses';
function uid(prefix = ''): string { return prefix + Math.random().toString(36).slice(2, 10); }

@Injectable({ providedIn: 'root' })
export class CourseService {
  courses = signal<Course[]>([]);

  constructor() {
    const raw = localStorage.getItem(LS);
    if (raw) this.courses.set(JSON.parse(raw));
    else { this.courses.set([this.demo()]); this.persist(); }
  }
  private persist() { localStorage.setItem(LS, JSON.stringify(this.courses())); }

  private demo(): Course {
    return {
      id: 'c-google-da',
      title: 'Google Data Analytics Course-1',
      overview: 'Become a Prompt Engineering Expert...',
      description: 'Long description about the course…',
      provider: 'OpenLearn',
      thumbnail: 'assets/images/course1.jpg',
      author: { id: 'a-steph', name: 'Stephane Maarek', bio: 'AWS Certified…' },
      level: 'Beginner',
      durationWeeks: 6,
      rating: 4.7,
      reviews: 12780,
      enrolled: 45908,
      publishedAt: new Date().toISOString(),
      status: 'published',
      skills: ['Prompt Engineering', 'SQL', 'Visualization'],
      requirements: ['No experience required'],
      softwareRequirements: ['Browser', 'Spreadsheet software'],
      whatYouWillLearn: ['Clean and organize data','Analyze with spreadsheets, SQL and R'],
      testimonials: [
        { name: 'Jacob Jones', rating: 4.7, text: 'Great content!' },
        { name: 'Bessie Cooper', rating: 4.5, text: 'Very helpful.' },
      ],
      curriculum: [
        {
          id: uid('s_'),
          title: 'Introduction',
          lessons: [
            { id: uid('l_'), title: 'Course Overview', type: 'video', durationMinutes: 3, url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
            { id: uid('l_'), title: 'Google Analytics Overview', type: 'text', content: 'Text lesson...' },
            { id: uid('l_'), title: 'Set up Demo Account', type: 'pdf', url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf' },
          ]
        }
      ]
    };
  }

  // ---- Compat helpers (used by other components) ----
  getCourses(): Course[] { return this.courses(); }
  getCourseById(id: string) { return this.courses().find(c => c.id === id); }
  related(courseId: string) {
    const me = this.getCourseById(courseId);
    return this.courses().filter(c => c.id !== courseId && (!me || c.level === me.level)).slice(0, 5);
  }
  search(q: string): Course[] {
    const s = (q || '').toLowerCase();
    if (!s) return this.getCourses();
    return this.courses().filter(c =>
      c.title.toLowerCase().includes(s) || (c.provider || '').toLowerCase().includes(s)
    );
  }
  weeksToBucket(weeks: number): string {
    if (weeks < 1) return '< 1 week';
    if (weeks <= 4) return '1–4 weeks';
    if (weeks <= 12) return '1–3 months';
    if (weeks <= 24) return '3–6 months';
    return '6–12 months';
  }
  findLessonById(course: Course, lectureId: string) {
    for (let s = 0; s < course.curriculum.length; s++) {
      const i = course.curriculum[s].lessons.findIndex(x => x.id === lectureId);
      if (i >= 0) return { s, l: i, lesson: course.curriculum[s].lessons[i] };
    }
    return undefined;
  }
  firstLessonId(c: Course): string { return c.curriculum[0]?.lessons[0]?.id ?? ''; }

  // ---- Author APIs ----
  listByAuthor(authorId: string, status?: CourseStatus) {
    let arr = this.courses().filter(c => c.author.id === authorId);
    if (status) arr = arr.filter(c => c.status === status);
    return arr;
  }
  createDraft(authorId: string): Course {
    const course: Course = {
      id: uid('c_'),
      title: '',
      overview: '',
      description: '',
      provider: 'OpenLearn',
      thumbnail: 'assets/images/course2.jpg',
      author: { id: authorId, name: 'You' },
      level: 'Beginner',
      durationWeeks: 4,
      rating: 0,
      reviews: 0,
      enrolled: 0,
      status: 'draft',
      skills: [],
      requirements: [],
      softwareRequirements: [],
      whatYouWillLearn: [],
      testimonials: [],
      curriculum: []
    };
    this.courses.set([course, ...this.courses()]); this.persist(); return course;
  }
  save(updated: Course) { this.courses.update(list => list.map(c => c.id === updated.id ? updated : c)); this.persist(); }
  publish(id: string) { const c = this.getCourseById(id); if (!c) return; c.status = 'published'; c.publishedAt = new Date().toISOString(); this.save(c); }
  archive(id: string) { const c = this.getCourseById(id); if (!c) return; c.status = 'archived'; this.save(c); }
  addSection(courseId: string, title = 'New Section'): Section {
    const c = this.getCourseById(courseId)!; const sec: Section = { id: uid('s_'), title, lessons: [] };
    c.curriculum.push(sec); this.save(c); return sec;
  }
  removeSection(courseId: string, sectionId: string) {
    const c = this.getCourseById(courseId)!; c.curriculum = c.curriculum.filter(s => s.id !== sectionId); this.save(c);
  }
  duplicateSection(courseId: string, sectionId: string) {
    const c = this.getCourseById(courseId)!;
    const s = c.curriculum.find(x => x.id === sectionId); if (!s) return;
    const copy: Section = { id: uid('s_'), title: s.title + ' (copy)', lessons: s.lessons.map(l => ({ ...l, id: uid('l_') })) };
    c.curriculum.push(copy); this.save(c);
  }
  addLecture(courseId: string, sectionId: string, data: Omit<Lesson, 'id'>): Lesson {
    const c = this.getCourseById(courseId)!; const s = c.curriculum.find(x => x.id === sectionId)!;
    const l: Lesson = { id: uid('l_'), ...data }; s.lessons.push(l); this.save(c); return l;
  }
  moveLecture(courseId: string, sectionId: string, index: number, dir: -1 | 1) {
    const c = this.getCourseById(courseId)!; const s = c.curriculum.find(x => x.id === sectionId)!;
    const i2 = index + dir; if (i2 < 0 || i2 >= s.lessons.length) return;
    const [item] = s.lessons.splice(index, 1); s.lessons.splice(i2, 0, item); this.save(c);
  }
  totalMinutes(section: Section) { return section.lessons.reduce((a, l) => a + (l.durationMinutes || 0), 0); }
}
