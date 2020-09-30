import { Post } from './post.model';

export interface User {
    id: string;
    name: string;
    pass?: string;
    email?: string;
    avatar: string;
    posts?: Post[];
}
