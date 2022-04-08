import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRepositoryService } from '../shared/user-repository.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  
  vm$: Observable<User> | null = null;

  constructor(private userRepositoryService: UserRepositoryService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.vm$ = this.userRepositoryService.getUserInfo$(userId);
  }

  showUserPosts(userId: string): void {
    this.router.navigateByUrl(`user-list/user/${userId}/posts`);
  }
}
