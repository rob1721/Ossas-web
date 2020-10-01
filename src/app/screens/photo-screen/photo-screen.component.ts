import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post/post.service';

@Component({
  selector: 'app-photo-screen',
  templateUrl: './photo-screen.component.html',
  styleUrls: ['./photo-screen.component.css']
})
export class PhotoScreenComponent implements OnInit {

  public post: Post;
  public nombres: string[] = [
    'Cristian',
    'Felipe',
    'Francisco',
    'Roberto',
    'BLEEEH'
  ];
  public comments: string[] = [
    'Este es un comentario',
    'Este es otro comentario',
    'Este es el tercer comentario',
    'Este es el cuarto comentario',
    'Este es el quinto comentario'
  ];
  public avatar = 'assets/images/q.jpg';

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) {
    const { id } = this.activatedRoute.snapshot.params; // quiero sacar el atributo id dentro de params
    this.post = this.postService.getPostById(id);
  }

  ngOnInit(): void {
  }

}
