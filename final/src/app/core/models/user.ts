export type UserRole = 'Admin' | 'Author' | 'Learner';


export interface User {
id: number;
username: string;
email: string;
password?: string; // plain for json-server demo
fullName: string;
track?: string | null;
avatarUrl?: string | null;
joinDate?: string; // ISO
role: UserRole;
bio?: string | null;
location?: string | null;
}