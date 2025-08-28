import { User } from './user';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface CourseProvider {
  name: string;
  logoUrl: string;
}

export interface Course {
  id: number;
  title: string;
  subtitle?: string;

  authorId: number;
  provider?: CourseProvider;
  thumbnailUrl: string;

  rating: number;
  reviewCount: number;
  enrollmentCount: number;

  difficulty: Difficulty;
  durationText: string;     // e.g. "05 Weeks", "6 months"
  skills: string[];

  whatYoullLearn?: string[];
  requirements?: string[];
  status: 'Published' | 'Draft' | 'Archived';
  publishedDate?: string;   // ISO string

  // ---- Optional/derived fields used across templates (kept optional to avoid compile errors)
  author?: User;
  durationWeeks?: number;
  durationLabel?: string;
  badges?: string[];
  updatedAt?: string;       // for "Last updated ..." labels
  progress?: number;        // for "My Courses" progress overlay
  flexibleSchedule?: boolean;
  prerequisites?: string;
}
