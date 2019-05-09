import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user'
@Injectable()
export class RegisterService {
  private baseUrl = 'http://localhost:3000/users';
  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get(this.baseUrl);
  }

  getUser(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  create(user: User) {
      return this.http.post(this.baseUrl, user);
  }

  update(user: User) {
      return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  delete(user: User) {
      return this.http.delete(this.baseUrl + '/' + user.id);
  }
}
