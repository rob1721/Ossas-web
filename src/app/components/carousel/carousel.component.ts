import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  image1 = 'assets/images/1472725484019.jpg';
  image2 = 'assets/images/1472873279290.jpg';
  image3 = 'assets/images/1473824210925.png';

  constructor() { }

  ngOnInit(): void {
  }

}
