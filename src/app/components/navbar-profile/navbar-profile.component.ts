import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {

  public user: User;

  constructor(
    private userService: UserService
  ) {
    this.user = this.userService.getLoged();
  }
  ngOnInit(): void {
  }



}
