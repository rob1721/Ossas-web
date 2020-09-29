import { User } from './core/models/user.model';
import { Commentary } from './core/models/comment.model';
import { Img } from './core/models/img.model';


export class HardCode{

    imgList1: Img[] = [

    ];

    imgList2: Img[] = [

    ];

    imgList3: Img[] = [

    ];

    imgList4: Img[] = [

    ];

    imgList5: Img[] = [

    ];

    imgList6: Img[] = [

    ];

    users: User[] = [
        {
            name: 'User1',
            avatar: 'assets/images/ping.png',
            imgList: this.imgList1,
        },
        {
            name: 'User2',
            avatar: 'assets/images/ping.png',
            imgList: this.imgList2,
        },
        {
            name: 'User3',
            avatar: 'assets/images/ping.png',
            imgList: this.imgList3,
        },
        {
            name: 'User4',
            avatar: 'assets/images/ping.png',
            imgList: this.imgList4,
        },
        {
            name: 'User5',
            avatar: 'assets/images/ping.png',
            imgList: this.imgList5,
        },
        {
            name: 'User6',
            avatar: 'assets/images/ping.png',
            imgList: this.imgList6,
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
