import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { USERLOGED } from 'src/app/core/services/user/users.const';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = USERLOGED;
  }

  ngOnInit(): void {
  }

}
