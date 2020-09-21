import { Component, OnInit } from '@angular/core';
import { HardCode } from 'src/app/hardcode';
import {Img} from 'src/app/core/models/img.model'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  hardCode = new HardCode();

  image1: Img = {
    image: 'images/carousel1.jpg',
    title: 'Lago Morado',
    author: 'Felipe',
    likes: 15,
    description: 'Una foto de un lago morado',
    comments: this.hardCode.comments,
    date: Date.now(), 
  };

  image2: Img = {
    image: 'images/carousel2.jpg',
    title: 'Colinas Verdes',
    author: 'Roberto',
    likes: 25,
    description: 'Una foto de unas colinas verdes',
    comments: this.hardCode.comments,
    date: Date.now(), 
  };

  image3: Img = {
    image: 'images/carousel3.jpg',
    title: 'Camino Nevado',
    author: 'Francisco',
    likes: 35,
    description: 'Una foto de un camino nevado',
    comments: this.hardCode.comments,
    date: Date.now(), 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
