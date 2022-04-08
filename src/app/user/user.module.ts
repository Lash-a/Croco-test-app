import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { AccordionComponent} from '../components/accordion/accordion.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    UserInfoComponent,
    UserListComponent, 
    UserPostsComponent,
    UserComponent,
    AccordionComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
  ]
})

export class UserModule { }
