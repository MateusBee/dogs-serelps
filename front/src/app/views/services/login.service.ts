import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user'
@Injectable()
export class LoginService {
  private baseUrl = 'http://localhost:3000/login';
  constructor( private http: HttpClient ) { }

  autenticar(user: User) {
      return this.http.post(this.baseUrl, user);
  }

}
