import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from 'src/app/core/models/post.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {
  // @Output() formEmitter: EventEmitter<FormGroup>; // para enviar la info..adelantando pega
  public editUserForm: FormGroup;

  public userService: UserService;
  public user: User;
  public posts: Post[];
  public postSelected: Post;

  constructor(
    // private formBuilder: FormBuilder,
    // private editUserService: EditUserService,
  ) {
    this.userService = new UserService();
    this.user = this.userService.getLoged();
    this.posts = this.user.posts;
    // this.formEmitter = new EventEmitter<FormGroup()>;
  }

  ngOnInit(): void {
    // this.buildForm();
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
