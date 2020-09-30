import { Injectable } from '@angular/core';
import { Commentary } from '../../models/comment.model';
import { Img } from '../../models/img.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HardCode{

  users: User[] = [
      {
          name: 'User1',
          avatar: 'assets/images/ping.png',
          // imgList: this.imgList1,
      },
      {
          name: 'User2',
          avatar: 'assets/images/ping.png',
          // imgList: this.imgList2,
      },
      {
          name: 'User3',
          avatar: 'assets/images/ping.png',
          // imgList: this.imgList3,
      },
      {
          name: 'User4',
          avatar: 'assets/images/ping.png',
          // imgList: this.imgList4,
      },
      {
          name: 'User5',
          avatar: 'assets/images/ping.png',
          // imgList: this.imgList5,
      },
      {
          name: 'User6',
          avatar: 'assets/images/ping.png',
          // imgList: this.imgList6,
      },
  ];

  image1: Img = {
      id: '0',
      title: 'Titulo 1',
      author: this.users[0].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/k.jpg',
      likes: 69,
      // comments: ,
  };

  image2: Img = {
      id: '1',
      title: 'Titulo 2',
      author: this.users[1].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/s.jpg',
      likes: 69,
      // comments: ,
  };

  image3: Img = {
      id: '2',
      title: 'Titulo 3',
      author: this.users[2].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/a.jpg',
      likes: 69,
      // comments: ,
  };

  image4: Img = {
      id: '3',
      title: 'Titulo 4',
      author: this.users[3].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/s.jpg',
      likes: 69,
      // comments: ,
  };

  image5: Img = {
      id: '4',
      title: 'Titulo 5',
      author: this.users[4].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/d.jpg',
      likes: 69,
      // comments: ,
  };

  image6: Img = {
      id: '5',
      title: 'Titulo 6',
      author: this.users[5].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/f.jpg',
      likes: 69,
      // comments: ,
  };

  image7: Img = {
      id: '6',
      title: 'Titulo 7',
      author: this.users[5].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/l.jpg',
      likes: 69,
      // comments: ,
  };

  image8: Img = {
      id: '7',
      title: 'Titulo 8',
      author: this.users[0].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/j.jpg',
      likes: 69,
      // comments: ,
  };

  image9: Img = {
      id: '8',
      title: 'Titulo 9',
      author: this.users[1].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/g.jpg',
      likes: 69,
      // comments: ,
  };

  image10: Img = {
      id: '9',
      title: 'Titulo 10',
      author: this.users[2].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/h.jpg',
      likes: 69,
      // comments: ,
  };

  image11: Img = {
      id: '10',
      title: 'Titulo 11',
      author: this.users[3].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/g.jpg',
      likes: 69,
      // comments: ,
  };

  image12: Img = {
      id: '11',
      title: 'Titulo 12',
      author: this.users[4].name,
      date: Date.now(),
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      image: 'assets/images/h.jpg',
      likes: 69,
      // comments: ,
  };

  imgListAll: Img[] = [
    this.image1,
    this.image2,
    this.image3,
    this.image4,
    this.image5,
    this.image6,
    this.image7,
    this.image8,
    this.image9,
    this.image10,
    this.image11,
    this.image12,
  ];

  imglista: Img[] =  [ // ultima opcion..mostrar la foto
      this.image4,
      this.image5,
      this.image6,
      this.image7,
      this.image8,
      this.image9,
      this.image1,
      this.image2,
      this.image3,
      this.image4,
      this.image5,
      this.image6,
      this.image7,
      this.image8,
      this.image9,
      this.image10,
      this.image11,
      this.image12,
      this.image7,
      this.image8,
      this.image9,
      this.image10,
      this.image11,
      this.image12,
  ];

  imgList1: Img[] = [ // en caso de no lograr buen posicionamiento..poner misma cantidad de fotos a todos
      this.image1,
      this.image12,
  ];

  imgList2: Img[] = [
      this.image3,
      this.image4,
      this.image2,
      this.image4
  ];

  imgList3: Img[] = [
      this.image5,
      this.image6,
  ];

  imgList4: Img[] = [
      this.image7,
      this.image8,
      this.image7,
      this.image8,
  ];

  imgList5: Img[] = [
      this.image9,
      this.image10,
  ];

  imgList6: Img[] = [
      this.image11,
      this.image12,
  ];

  comments: Commentary[] = [
      {
          user: this.users[0],
          date: Date.now(),
          comment: 'Fea la wea de foto, borrala!'
      },
      {
          user: this.users[1],
          date: Date.now(),
          comment: 'Fea la wea de foto, borrala!'
      },
      {
          user: this.users[2],
          date: Date.now(),
          comment: 'Fea la wea de foto, borrala!'
      },
      {
          user: this.users[3],
          date: Date.now(),
          comment: 'Fea la wea de foto, borrala!'
      },
      {
          user: this.users[4],
          date: Date.now(),
          comment: 'Fea la wea de foto, borrala!'
      },
      {
          user: this.users[5],
          date: Date.now(),
          comment: 'Fea la wea de foto, borrala!'
      },
  ];

  constructor() {
      this.users[0].imgList = this.imgList1;
      this.users[1].imgList = this.imgList2;
      this.users[2].imgList = this.imgList3;
      this.users[3].imgList = this.imgList4;
      this.users[4].imgList = this.imgList5;
      this.users[5].imgList = this.imgList6;
      this.image1.comments = this.comments;
      this.image2.comments = this.comments;
      this.image3.comments = this.comments;
      this.image4.comments = this.comments;
      this.image5.comments = this.comments;
      this.image6.comments = this.comments;
      this.image7.comments = this.comments;
      this.image8.comments = this.comments;
      this.image9.comments = this.comments;
      this.image10.comments = this.comments;
      this.image11.comments = this.comments;
      this.image12.comments = this.comments;
  }

  hardCodeSelectID(img: Img) {
    return img.id;
  }

  getAllImg() {
    return this.imgListAll;
  }
}

