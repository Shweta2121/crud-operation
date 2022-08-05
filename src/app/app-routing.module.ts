import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './user/layout/layout.component';
import { NgFormComponent } from './user/pages/ng-form/ng-form.component';
import { NgListComponent } from './user/pages/ng-list/ng-list.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
        { path: '', component: NgListComponent },
        { path: 'add', component: NgFormComponent },
        { path: 'edit/:id', component: NgFormComponent }
    ]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
