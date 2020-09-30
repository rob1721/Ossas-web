import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Img } from 'src/app/core/models/img.model';
import { EventService } from 'src/app/core/services/event/event.service';
import { HardCode } from 'src/app/core/services/hardCode/hard-code.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-photo-screen',
  templateUrl: './photo-screen.component.html',
  styleUrls: ['./photo-screen.component.css']
})
export class PhotoScreenComponent implements OnInit {

  public image: Img;
  imgloaded: boolean;
  allImgs: Img[];

  user: User = {
    name: 'User1',
    avatar: 'assets/images/ping.png',
  };
  comment = 'Fea la wea de foto, borrala!';
  hardCode: HardCode;
  hardCodeComments;

  constructor(
    private eventService: EventService,
  ) {
    this.imgloaded = false;
    this.allImgs = this.hardCode.getAllImg();
    // this.hardCodeComments = this.hardCode.comments[0];
    // console.log(this.hardCodeComments);
  }

  ngOnInit(): void {
    this.eventService.on('select-event', (id: string) => {
      console.log(id);
      this.selectedImage(id);
    });
    console.log('primera llegada');
  }

  public selectedImage(id: string) {
    this.image = id;
    this.imgloaded = true;
    console.log(this.image);
  }

}
