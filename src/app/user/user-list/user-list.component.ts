import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRepositoryService } from '../shared/user-repository.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  vm$: Observable<User[]> | null = null;

  constructor(private userRepositoryService: UserRepositoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.vm$ = this.userRepositoryService.userList$;
  }

  showUserInfo(userId: string): void {
    this.router.navigateByUrl(`/user-list/user/${userId}`)
  }
}
