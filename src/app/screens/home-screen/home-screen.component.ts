import { Component, OnInit } from '@angular/core';
import { HardCode } from 'src/app/core/services/hardCode/hard-code.service';

import { Img } from 'src/app/core/models/img.model';
import { EventService } from 'src/app/core/services/event/event.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  hardCode: HardCode;
  hardCodeUsers;
  hardCodeUsersLength;
  hardCodeImages;

  constructor(
    private eventService: EventService,
    ) {
    this.hardCode = new HardCode();
    this.hardCodeUsers = this.hardCode.users;
    this.hardCodeImages = this.gettingImages();
  }

  ngOnInit(): void {
    this.eventService.on('select-event', (id: string) => {
      console.log('Evento Capturado');
    });
  }

  gettingImages() {
    return this.hardCode.imglista;
  }

  selectImage(img: Img) {
    console.log(img);
    this.eventService.emitSelectEvent(img.id);
  }

  gettingUsers() {
    return this.hardCode.users;
  }
 // routerLink='/photo/{{img.id}}'
}
