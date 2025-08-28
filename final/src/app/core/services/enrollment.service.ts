import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { EnrollmentItem } from '../models/enrollment';


@Injectable({ providedIn: 'root' })
export class EnrollmentService {
private api = inject(ApiService);
async byUser(userId: number): Promise<EnrollmentItem[]> {
const map = await this.api.get<Record<string, EnrollmentItem[]>>(`/userEnrollments`).toPromise();
return (map?.[String(userId)] || []);
}
}