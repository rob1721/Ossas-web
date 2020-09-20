import { Commentary } from './comment.model';

export interface Img {
    image: string;
    title: string;
    author: string;
    likes: number;
    description: string;
    comments?: Commentary[];
    date: number;
}
