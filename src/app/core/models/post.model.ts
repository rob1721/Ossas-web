import { Commentary } from './comment.model';

export interface Post {
    id?: string;
    image: string;
    title: string;
    author: string; // tiene q ser id del user
    likes: number;
    category?: string[];
    description?: string;
    comments?: Commentary[];
    date: number;
}
