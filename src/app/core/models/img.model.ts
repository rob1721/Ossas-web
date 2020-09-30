import { Commentary } from './comment.model';

export interface Img {
    id?: string;
    image: string;
    title: string;
    author: string;
    likes: number;
    category?: string[];
    description?: string;
    comments?: Commentary[];
    date: number;
}
