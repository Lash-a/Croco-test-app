import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
    {path: 'user-list', component: UserListComponent},
    {path: 'user-posts', component: UserPostsComponent},
    {path: '', redirectTo: 'user-list', pathMatch: 'full'}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
