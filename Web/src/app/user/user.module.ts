import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DetailsContactComponent } from './details-contact/details-contact.component';

const routes: Routes = [
  { path: 'user/:id', component: UserDetailsComponent }
];

@NgModule({
  declarations: [UserDetailsComponent, DetailsContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
