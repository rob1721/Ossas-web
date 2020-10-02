import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { User } from 'src/app/core/models/user.model';
import { USERLOGED } from 'src/app/core/services/user/users.const';

@Component({
  selector: 'app-myimages-screen',
  templateUrl: './myimages-screen.component.html',
  styleUrls: ['./myimages-screen.component.css']
})
export class MyimagesScreenComponent implements OnInit {

  public user: User;
  public posts: Post[];
  public postSelected: Post;

  constructor() {
    this.user = USERLOGED;
    this.posts = this.user.posts;
  }

  ngOnInit(): void {
  }

  selectPost(post: Post, id: string) {
    this.postSelected = post;
    console.log('Haz Seleccionado un post');
    console.log(this.postSelected);
  }

}
