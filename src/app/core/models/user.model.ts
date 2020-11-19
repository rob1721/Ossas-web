import { Album } from './album.model';
import { Post } from './post.model';

export interface User {
    _id?: string;
    name: string;
    pass?: string;
    email?: string;
    avatar: string;
    posts?: Post[];
    albums?: Album[];
    following?: User[];
    followers?: User[];
}
