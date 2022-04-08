import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../../models/user';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {


  userList$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  userPosts$: BehaviorSubject<Post[]> = new BehaviorSubject([]);

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(response => this.userList$.next(response as []));
    this.userService.getUserPosts().subscribe(response => this.userPosts$.next(response as []));
  }

  getUserInfo$(userId: string): Observable<User> {
    return this.userList$.pipe(map((userList: User[]) => userList.find(user => user.id === +userId)));
  }

  getUserPost$(userId: string): Observable<Post[]> {
    return this.userPosts$.pipe(map((userPosts: Post[]) => userPosts.filter(userPost => userPost.userId === +userId)));
  }
}
