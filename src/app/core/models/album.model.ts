import { Like } from './like.model';
import { Post } from './post.model';

export interface Album {
  _id?: string;
  name: string;
  posts?: Post[];
  // likes?: Like[];
  // coments?: Comment[];
  updatedAt?: Date;
  createdAt?: Date;
}
