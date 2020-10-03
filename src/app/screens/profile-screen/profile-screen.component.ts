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

  constructor(
    private formBuilder: FormBuilder,
    // private editUserService: EditUserService,
  ) {
    // this.formEmitter = new EventEmitter<FormGroup()>;
    this.userService = new UserService();
    this.user = this.userService.getLoged();
    this.posts = this.user.posts;
  }

  ngOnInit(): void {
    // this.buildForm();
  }


}
