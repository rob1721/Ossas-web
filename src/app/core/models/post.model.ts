import { Category } from './category.model';
import { Comment } from './comment.model';
import { Like } from './like.model';

export interface Post {
    id?: string;
    image: string;
    title: string;
    likes?: Like[];
    category?: Category[];
    comments?: Comment[];
    date: Date;
    description?: string;
}
