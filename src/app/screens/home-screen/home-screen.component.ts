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

  public posts: Post[];
  public posts$: Observable<Post[]>;
  public asdasd: Post[];

  public users: User[];
  public photos: Photo[];
  public userPhotos: Photo[];
  public photo: Photo;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private photoService: PhotoService
    ) {
      this.posts = this.postService.getAllPosts();
  }

  ngOnInit(): void {
    this.postService.getAllPosts2()
      .subscribe((qwe) => {
        this.asdasd = qwe;
        console.log(this.asdasd);
      }); // cuando se obtengan las URL quitar el subscribe y agregar el | async en el html card-colums *ngIf="posts$ | async; let posts"
    this.fetchPhotos();
    this.gettingAllUsers();
  }

  fetchPhotos() {
    this.photoService.getPhotos()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
        console.log(this.photos);
      });
  }

  gettingAllPhotos() {
    this.photoService.getPhotos()
      .subscribe(rta => {
        this.fetchPhotos();
      });
  }

  gettingPhotoByUser(user: User) {
    if (user.photos) {
      this.userPhotos = user.photos;
      return user.photos;
    }
    return null;
  }

  gettingPhotosByUsers(users: User[]) {
    users.forEach(user => {
      this.photos = user.photos;
      console.log(this.photos);
    });
  }

  gettingAllUsers() {
    this.userService.getAllUsers2()
      .subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
  }

  selectPost(post: Post) {
    this.postService.selectPost(post);
  }

}
