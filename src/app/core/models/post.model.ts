import { Category } from './category.model';
import { Commentary } from './comment.model';
import { Like } from './like.model';

export interface Post {
    id?: string;
    image: string;
    title: string;
    author: string; // tiene q ser id del user
    likes: number; // likes: Like[];
    category?: string[]; // arreglo q contiene las id de las categorias // category?: Category[];
    description?: string;
    comments?: Commentary[];
    date: number;
}
