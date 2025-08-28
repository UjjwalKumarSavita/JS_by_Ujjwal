import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Review } from '../models/review';


@Injectable({ providedIn: 'root' })
export class ReviewService {
private api = inject(ApiService);
async byCourse(courseId: number): Promise<Review[]> {
const map = await this.api.get<Record<string, Review[]>>(`/reviews`).toPromise();
return (map?.[String(courseId)] || []);
}
}