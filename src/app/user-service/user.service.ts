import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUser } from '../models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById = () => {
    return this.http.get<AppUser>('https://jsonplaceholder.typicode.com/users/1');
  }
}
