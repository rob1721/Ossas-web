import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/core/models/photo.model';
import { User } from 'src/app/core/models/user.model';
import { PhotoService } from 'src/app/core/services/photo/photo.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-myimages-screen',
  templateUrl: './myimages-screen.component.html',
  styleUrls: ['./myimages-screen.component.css']
})
export class MyimagesScreenComponent implements OnInit {

  public user: User;
  public user$: Observable<User>;
  public uid: string;

  public photos: Photo[];
  public photos$: Observable<Photo[]>;
  public users: User[];

  constructor(
    private photoService: PhotoService,
    private userservice: UserService
  ) {
  }

  ngOnInit(): void {
    // this.fetchPhotos();
    this.uid = '5fbed1a24fca323cd827f238'; // usertesting
    // this.uid = '5fbefe308b1acf29a4f1e25b'; // wasta
    // this.uid = '5fc019d9c1231638fc815195'; // panchodon
    this.getUser(localStorage.getItem('currentUser'));
  }

  /*fetchPhotos() {
    this.photoService.getPhotos()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      });
  }*/

  getUser(id: string) {
    this.user$ = this.userservice.getUser2(id);
  }

  selectPhoto(photo: Photo){

  }

}
