import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post/post.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  public posts: Post[];

  constructor(
    private postService: PostService,
    ) {
      this.posts = this.postService.getAllPosts();
  }

  ngOnInit(): void {
  }

  selectPost(post: Post) {
    this.postService.selectPost(post);
  }

}
