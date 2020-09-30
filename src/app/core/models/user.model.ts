import { Img } from './img.model';

export interface User {
    name: string;
    pass?: string;
    email?: string;
    avatar: string;
    imgList?: Img[];
}
