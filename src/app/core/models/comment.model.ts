import { User } from './user.model';

export interface Commentary {
    user: User;
    date: number;
    comment: string;
}
