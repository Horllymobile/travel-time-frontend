import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login';
import { Token } from '../models/token';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
const baseUrl = 'http://localhost:5000/api/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  public isAuthenticated():boolean{

    const accessToken = localStorage.getItem('accessToken')!;
    const helper = new JwtHelperService({});
    if(accessToken && !helper.isTokenExpired(accessToken)){
      return true;
    }
    if(helper.isTokenExpired(accessToken)){
      this.token().subscribe(
        (data:any) => {
          localStorage.setItem('accessToken', data.accessToken);
          return true;
        },
        err => {
          console.log(err);
          return false;
        }
      )
    }
    return false;
  }

  token():Observable<any>{
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${baseUrl}/token`, {refreshToken});
  }


  login(user:LoginUser):Observable<Token>{
    return this.http.post<Token>(`${baseUrl}/login`, user);
  }

  register(user:User):Observable<any>{
    return this.http.post<any>(`${baseUrl}/users`,user);
  }
}
