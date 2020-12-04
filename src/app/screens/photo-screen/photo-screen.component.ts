import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Like } from 'src/app/core/models/like.model';
import { Photo } from 'src/app/core/models/photo.model';
import { Post } from 'src/app/core/models/post.model';
import { User } from 'src/app/core/models/user.model';
import { PhotoService } from 'src/app/core/services/photo/photo.service';
import { PostService } from 'src/app/core/services/post/post.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-photo-screen',
  templateUrl: './photo-screen.component.html',
  styleUrls: ['./photo-screen.component.css']
})
export class PhotoScreenComponent implements OnInit {


  public photo: Photo;
  public photo$: Observable<Photo>;
  public users2: User[];
  public user2: User;

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
    private photoService: PhotoService,
    private userService: UserService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) {
    const { id } = this.activatedRoute.snapshot.params; // quiero sacar el atributo id dentro de params
    this.gettingPhoto(id);

  }

  ngOnInit(): void {
  }

  gettingPhoto(id: string) {
    this.photoService.getPhoto(id)
      .subscribe((photo: Photo) => {
        this.photo = photo;
        console.log(this.photo);
      });
  }

  gettingUsers() {
    this.userService.getAllUsers2()
      .subscribe((users: User[]) => {
        this.users2 = users;
      });
  }

  /*gettingUser(id: string) {
    return this.users2.find((user: User) => )
  }*/

}
