import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { USERLOGED } from 'src/app/core/services/user/users.const';

@Component({
  selector: 'app-navbar-photo',
  templateUrl: './navbar-photo.component.html',
  styleUrls: ['./navbar-photo.component.css']
})
export class NavbarPhotoComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = USERLOGED;
  }

  ngOnInit(): void {
  }

}
