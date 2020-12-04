import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/core/models/photo.model';
import { Post } from 'src/app/core/models/post.model';
import { User } from 'src/app/core/models/user.model';
import { PhotoService } from 'src/app/core/services/photo/photo.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {
  public editUserForm: FormGroup;


  public user: User;
  public user$: Observable<User>;
  public posts: Post[];
  public photoSelected: Photo;

  public photos: Photo[];
  public photos$: Observable<Photo[]>;
  public photo: Photo;
  public users: User[];
  public uid: string;

  constructor(
    public photoService: PhotoService,
    public userService: UserService
  ) {
    this.user = this.userService.getLoged();
    this.posts = this.user.posts;
  }

  ngOnInit(): void {
    // this.fetchPhotos();
    this.uid = '5fbed1a24fca323cd827f238'; // usertesting
    // this.uid = '5fbefe308b1acf29a4f1e25b'; // wasta
    // this.uid = '5fc019d9c1231638fc815195'; // panchodon
    this.getUser(this.uid);
  }

  getUser(id: string) {
    this.userService.getUser2(id)
      .subscribe((user: User) => {
        this.user = user;
        console.log(this.user);
        this.photos = this.user.photos;
        console.log(this.photos);
      });
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
    this.photoService.getPhoto('5fc8148868bc0125204860bb')
      .subscribe((photo: Photo) => {
        this.photo = photo;
        console.log(this.photo);
      });
  }

  gettingAllUsers() { // para haber agregado a followers/following
    this.userService.getAllUsers2()
      .subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
    this.photoService.getPhoto('5fc8148868bc0125204860bb')
      .subscribe((photo: Photo) => {
        this.photo = photo;
        console.log(this.photo);
      });
  }

  addPost() {
    console.log('Adding Post');
  }
  selectPost(photo: Photo, id: string) {
    this.photoSelected = photo;
    console.log('Haz Seleccionado una Photo');
    console.log(this.photoSelected);
  }

  editingPost(post: Photo, id: string) {
    // llamar al servicio y editar!
    console.log('Deseas Editar un post!');
    if (post && id) {
      console.log(post);
    } else {
      console.log('No haz seleccionado un post');
    }
  }

  deletingPost(post: Photo, id: string) {
    // llamar al servicio y eliminar desde allí
    console.log('Deseas Eliminar un post');
    if (post && id) {
      console.log(post);
    } else {
      console.log('No haz seleccionado un post');
    }
  }

}
