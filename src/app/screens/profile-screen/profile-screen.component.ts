import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  // @Output() formEmitter: EventEmitter<FormGroup>; // para enviar la info..adelantando pega
  public editUserForm: FormGroup;


  public user: User;
  public posts: Post[];
  public postSelected: Post;
  public photos: Photo[];

  constructor(
    // private formBuilder: FormBuilder,
    // private editUserService: EditUserService,
    public photoService: PhotoService,
    public userService: UserService
  ) {
    this.user = this.userService.getLoged();
    this.posts = this.user.posts;
    // this.formEmitter = new EventEmitter<FormGroup()>;
  }

  ngOnInit(): void {
    // this.buildForm();
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.photoService.getPhotos()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
        console.log(this.photos);
      });
  }

  gettingAllPhotos() {
    this.userService.getAllUsers2()
      .subscribe(rta => {
        this.fetchPhotos();
      });
  }

  addPost() {
    console.log('Adding Post');
  }
  selectPost(post: Post, id: string) {
    this.postSelected = post;
    console.log('Haz Seleccionado un post');
    console.log(this.postSelected);
  }

  editingPost(post: Post, id: string) {
    // llamar al servicio y editar!
    console.log('Deseas Editar un post!');
    if (post && id) {
      console.log(post);
    } else {
      console.log('No haz seleccionado un post');
    }
  }

  deletingPost(post: Post, id: string) {
    // llamar al servicio y eliminar desde allí
    console.log('Deseas Eliminar un post');
    if (post && id) {
      console.log(post);
    } else {
      console.log('No haz seleccionado un post');
    }
  }

}
