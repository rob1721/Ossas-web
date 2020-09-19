import { User } from './core/models/user.model';
import { Commentary } from './core/models/comment.model';


export class HardCode{

    users: User[] = [
        {
            name: 'User1',
            avatar: 'assets/images/ping.png',
            imgList: null,
        }
    ];

    comments: Commentary[] = [
        {
            user: {
                name: 'User1',
                avatar: 'assets/images/ping.png',
                imgList: null,
            },
            comment: 'Fea la wea de foto, borrala!'
        }
    ];

    constructor() {
        
    }
}
