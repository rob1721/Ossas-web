import { User } from '../../models/user.model';
import { SOMEPOSTS, POSTS } from './../post/posts.const';

export const USERS: User [] = [
    {
        _id: '0',
        name: 'Roberto',
        avatar: 'assets/images/q.jpg',
        posts: [] = POSTS,
    },
    {
        _id: '1',
        name: 'Francisco',
        avatar: 'assets/images/q.jpg',
    },
    {
        _id: '2',
        name: 'Felipe',
        avatar: 'assets/images/q.jpg',
    },
    {
        _id: '3',
        name: 'Cristian',
        avatar: 'assets/images/q.jpg',
    },
];

export const USERLOGED: User = {
    _id: '0',
    name: 'Roberto',
    avatar: 'assets/images/q.jpg',
    posts: [] = SOMEPOSTS,
};
