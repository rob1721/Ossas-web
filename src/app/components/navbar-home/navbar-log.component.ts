import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { USERLOGED } from 'src/app/core/services/user/users.const';

@Component({
  selector: 'app-navbar-log',
  templateUrl: './navbar-log.component.html',
  styleUrls: ['./navbar-log.component.css']
})
export class NavbarLogComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = USERLOGED;
  }

  ngOnInit(): void {
  }

}
