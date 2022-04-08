import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: 'user-list/user/:id', component: UserInfoComponent },
  { path: 'user-list/user/:id/posts', component: UserPostsComponent },
  {path: "**", redirectTo: 'user-list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
