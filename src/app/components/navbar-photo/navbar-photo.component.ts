import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-navbar-photo',
  templateUrl: './navbar-photo.component.html',
  styleUrls: ['./navbar-photo.component.css']
})
export class NavbarPhotoComponent implements OnInit {

  public user: User;
  public uid: string;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
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
      });
  }

}
