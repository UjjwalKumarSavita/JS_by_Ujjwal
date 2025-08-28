import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { QuizQuestion } from '../models/quiz';


@Injectable({ providedIn: 'root' })
export class QuizService {
private api = inject(ApiService);
async byCourse(courseId: number): Promise<QuizQuestion[]> {
const map = await this.api.get<Record<string, QuizQuestion[]>>(`/quizzes`).toPromise();
return (map?.[String(courseId)] || []);
}
}