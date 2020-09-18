import { User } from './user.model';

export interface Commentary {
    user: User;
    comment: string;
}
