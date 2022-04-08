import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(apiUrl);
  }

  getUserPosts(): Observable<Post[]> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get<Post[]>(apiUrl);    
  }
}
