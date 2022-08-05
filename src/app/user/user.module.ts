import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NgFormComponent } from './pages/ng-form/ng-form.component';
import { NgListComponent } from './pages/ng-list/ng-list.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NgFormComponent,
    NgListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UserModule { }
