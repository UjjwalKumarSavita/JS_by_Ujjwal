import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Section } from '../models/curriculum';


@Injectable({ providedIn: 'root' })
export class CurriculumService {
private api = inject(ApiService);
async byCourse(courseId: number): Promise<Section[]> {
const map = await this.api.get<Record<string, Section[]>>(`/curriculum`).toPromise();
return (map?.[String(courseId)] || []);
}
}