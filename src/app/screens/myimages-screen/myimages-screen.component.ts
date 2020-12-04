import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/core/models/photo.model';
import { Post } from 'src/app/core/models/post.model';
import { User } from 'src/app/core/models/user.model';
import { PhotoService } from 'src/app/core/services/photo/photo.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { USERLOGED } from 'src/app/core/services/user/users.const';

@Component({
  selector: 'app-myimages-screen',
  templateUrl: './myimages-screen.component.html',
  styleUrls: ['./myimages-screen.component.css']
})
export class MyimagesScreenComponent implements OnInit {

  public user: User;
  public postSelected: Post;
  public uid: string;

  public photos: Photo[];
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
    this.getUser(this.uid);
  }

  fetchPhotos() {
    this.photoService.getPhotos()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      });
  }

  getUser(id: string) {
    this.userservice.getUser2(id)
      .subscribe((user: User) => {
        this.user = user;
        console.log(this.user);
        this.photos = this.user.photos;
      });
  }

  selectPost(post: Post, id: string) {
    this.postSelected = post;
    console.log('Haz Seleccionado un post');
    console.log(this.postSelected);
  }

  selectPhoto(photo: Photo){

  }

}
