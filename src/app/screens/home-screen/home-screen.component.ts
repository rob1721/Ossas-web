import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/core/models/photo.model';

import { Post } from 'src/app/core/models/post.model';
import { User } from 'src/app/core/models/user.model';
import { PhotoService } from 'src/app/core/services/photo/photo.service';
import { PostService } from 'src/app/core/services/post/post.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  public userLogged: User;

  public users: User[];
  public photos: Photo[];
  public photos$: Observable<Photo[]>;
  public userPhotos: Photo[];
  public photo: Photo;

  constructor(
    private userService: UserService,
    private photoService: PhotoService
    ) {
  }

  ngOnInit(): void {
    // cuando se obtengan las URL quitar el subscribe y agregar el | async en el html card-colums *ngIf="posts$ | async; let posts"
    this.gettingAllPhotos();
    this.gettingAllUsers();
    this.gettingUserLogged(localStorage.getItem('currentUser'));
  }

  gettingAllPhotos() {
    this.photos$ = this.photoService.getPhotos();
      /*.subscribe(rta => {
        this.fetchPhotos();
      });*/
  }

  gettingAllUsers() {
    this.userService.getAllUsers2()
      .subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
  }

  gettingUserLogged(uid: string) {
    this.userService.getUser2(uid)
      .subscribe((user: User) => {
        this.userLogged = user;
        console.log(this.userLogged);
      });
  }

}
