import { User } from './core/models/user.model';
import { Commentary } from './core/models/comment.model';


export class HardCode{

    users: User[] = [
        {
            name: 'User1',
            avatar: 'assets/images/ping.png',
            imgList: null,
        },
        {
            name: 'User2',
            avatar: 'assets/images/ping.png',
            imgList: null,
        },
        {
            name: 'User3',
            avatar: 'assets/images/ping.png',
            imgList: null,
        },
        {
            name: 'User4',
            avatar: 'assets/images/ping.png',
            imgList: null,
        },
        {
            name: 'User5',
            avatar: 'assets/images/ping.png',
            imgList: null,
        },
        {
            name: 'User6',
            avatar: 'assets/images/ping.png',
            imgList: null,
        },
    ];

    comments: Commentary[] = [
        {
            user: this.users[0],
            comment: 'Fea la wea de foto, borrala!'
        },
        {
            user: this.users[1],
            comment: 'Fea la wea de foto, borrala!'
        },
        {
            user: this.users[2],
            comment: 'Fea la wea de foto, borrala!'
        },
        {
            user: this.users[3],
            comment: 'Fea la wea de foto, borrala!'
        },
        {
            user: this.users[4],
            comment: 'Fea la wea de foto, borrala!'
        },
        {
            user: this.users[5],
            comment: 'Fea la wea de foto, borrala!'
        },
    ];

    constructor() {}
}
