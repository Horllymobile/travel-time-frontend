import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginUser } from '../models/login';
import { Token } from '../models/token';
import { UserModel } from '../models/userModel';
const baseUrl = 'http://localhost:5000/api/auth/'
@Injectable({
  providedIn: 'root'
})
 export class UserService {

  currentUserObject!: BehaviorSubject<any>;
  currentUser!: Observable<UserModel>;
  constructor(
    private http: HttpClient,
  ){
    this.currentUserObject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserObject.value;
  }

  get user ():any{
    return this.currentUser;
  }

  getUser(){
    return this.http.get<UserModel>(`${baseUrl}user`, {headers:{
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('accessToken')!
    }}).pipe(
      map((value:UserModel) => {
        localStorage.setItem('currentUser', JSON.stringify(value));
      }),
      catchError(err => {
        console.log(err);
        return err
      })
    );
  }

}
