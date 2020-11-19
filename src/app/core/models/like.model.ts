import { User } from './user.model';

export interface Like {
    _id?: string;
    user?: User; // qué usuarios dieron likes
    totalLikes: number; // cuantos usuarios dieron likes, se inicializa en 0
}
