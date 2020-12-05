import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post/post.service';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})

export class HomeScreenComponent implements OnInit {

  public posts: Post[];
  public posts$: Observable<Post[]>;
  public asdasd: Post[];
  public myVar = localStorage.getItem('currentUser');

  constructor(
    private postService: PostService,
    ) {
      this.posts = this.postService.getAllPosts();
  }

  ngOnInit(): void {
    this.postService.getAllPosts2()
      .subscribe((qwe) => {
        this.asdasd = qwe;
        console.log(this.asdasd);
      }); // cuando se obtengan las URL quitar el subscribe y agregar el | async en el html card-colums *ngIf="posts$ | async; let posts"
  }

  selectPost(post: Post) {
    this.postService.selectPost(post);
  }

}
