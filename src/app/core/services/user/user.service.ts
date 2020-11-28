import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpService } from '../http/http.service';
import { USERLOGED, USERS } from './users.const';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];
  private userLoged: User;
  private userLoged$: Observable<User>;
  private userSubject: Subject<User>;

  constructor(
    private httpService: HttpService
  ) {
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

  // -------------------------------------NEW METHODS
  public getAllUsers2(): Observable<User[]> {
    return this.httpService.get<User[]>('/user/all');
  }
  public getUser2(id: string): Observable<User>{
    return this.httpService.get<User>(`/user/${id}`);
  }
  public postUser2(user: User): Observable<User>{
    return this.httpService.post<User>('/user/', user);
  }
  public updateUser2(userId: string, user: Partial<User>): Observable<User>{
    return this.httpService.patch<User>(`/user/${userId}`, user);
  }
  public deleteUser2(userId: string): Observable<User>{
    return this.httpService.delete<User>(`/user/${userId}`);
  }

}
