import { User } from './user.model';

export interface Comment {
    _id?: string;
    author: User; // User q hizo el comentario
    comment: string; // contenido
    date: Date;
}
