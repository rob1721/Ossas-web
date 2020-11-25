import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { USERLOGED, USERS } from './users.const';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];
  private userLoged: User;
  private userLoged$: Observable<User>;
  private userSubject: Subject<User>;

  constructor() {
    this.users = USERS;
    this.userLoged = USERLOGED;
    this.userSubject = new Subject();
    this.userLoged$ = this.userSubject.asObservable();
  }

  public getAllUsers() {
    return this.users;
  }

  public getLoged() {
    return this.userLoged;
  }

  public loginUser(user: User) {
    this.userSubject.next(user);
  }

  public getUserLoged() {
    return this.userLoged$;
  }

  public getUserById(id: string) {
    return this.users.find((user: User) => user._id === id);
  }
}
