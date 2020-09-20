import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Img } from 'src/app/core/models/img.model';
import { HardCode } from 'src/app/hardcode';

@Component({
  selector: 'app-photo-screen',
  templateUrl: './photo-screen.component.html',
  styleUrls: ['./photo-screen.component.css']
})
export class PhotoScreenComponent implements OnInit {

  hardCode = new HardCode();

  imageDetails: Img = {
    image: 'assets/images/prueba.jpg',
    title: 'RetroWallpaper',
    author: 'Roberto',
    likes: 5,
    description: 'Esta es una prueba de la imagen puesta, es un wallpaper retro, foto tomada en mi balcón, 100% real no fake',
    comments: this.hardCode.comments,
    date: Date.now(),
  };

constructor() {
  console.log(this.imageDetails.comments);
}

ngOnInit(): void {}


}
