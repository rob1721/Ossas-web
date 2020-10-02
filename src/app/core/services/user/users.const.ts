import { User } from '../../models/user.model';
import { SOMEPOSTS, POSTS } from './../post/posts.const';

export const USERS: User [] = [
    {
        id: '0',
        name: 'Roberto',
        avatar: 'assets/images/q.jpg',
        posts: [] = POSTS,
    },
    {
        id: '1',
        name: 'Francisco',
        avatar: 'assets/images/q.jpg',
    },
    {
        id: '2',
        name: 'Felipe',
        avatar: 'assets/images/q.jpg',
    },
    {
        id: '3',
        name: 'Cristian',
        avatar: 'assets/images/q.jpg',
    },
];

export const USERLOGED: User = {
    id: '0',
    name: 'Roberto',
    avatar: 'assets/images/q.jpg',
    posts: [] = SOMEPOSTS,
};
