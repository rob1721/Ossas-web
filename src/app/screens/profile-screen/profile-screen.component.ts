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
  styleUrls: ['./profile-screen.component.less']
})
export class ProfileScreenComponent implements OnInit {
  public editUserForm: FormGroup;

  public userLogged: User;

  public user: User;
  public user$: Observable<User>;
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
  }

  ngOnInit(): void {
    this.getUser(localStorage.getItem('currentUser'));
  }

  getUser(id: string) {
    this.userService.getUser2(id)
      .subscribe((user: User) => {
        this.userLogged = user;
        console.log(this.userLogged);
        this.photos = this.userLogged.photos;
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
  }

  gettingAllUsers() { // para haber agregado a followers/following
    this.userService.getAllUsers2()
      .subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
  }

  selectPhoto(photo: Photo, id: string) {
    this.photoSelected = photo;
    console.log('Haz Seleccionado una Photo');
    console.log(this.photoSelected);
  }

  editingPhoto(photo: Photo, id: string) {
    // llamar al servicio y editar!
    console.log('Deseas Editar un photo!');
    if (photo && id) {
      console.log(photo);
    } else {
      console.log('No haz seleccionado un photo');
    }
  }

  deletingPhoto(photo: Photo, id: string) {
    // llamar al servicio y eliminar desde allí
    console.log('Deseas Eliminar un photo');
    if (photo && id) {
      console.log(photo);
    } else {
      console.log('No haz seleccionado un photo');
    }
  }

  bringPhotos() {
    console.log('bsidcksd');
  }

  bringUsers() {
    console.log('aksfjskdjvnslkjdv');
  }

}
