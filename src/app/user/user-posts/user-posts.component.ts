import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRepositoryService } from '../shared/user-repository.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  vm$: Observable<Post[]> | null = null;

  constructor(private userRepositoryService: UserRepositoryService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.vm$ = this.userRepositoryService.getUserPost$(userId);
  }

}
