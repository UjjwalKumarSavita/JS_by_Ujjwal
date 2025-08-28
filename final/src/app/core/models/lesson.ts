export type LessonType = 'Video' | 'PDF' | 'Text';


export interface LessonContent {
videoUrl?: string;
fileUrl?: string; // pdf
htmlContent?: string;// text
}


export interface Lesson {
id: number;
title: string;
type: LessonType;
durationMinutes: number;
content: LessonContent;
}