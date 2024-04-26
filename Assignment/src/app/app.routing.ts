import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: '', redirectTo: '/user-details', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/user-details' } // Handle invalid routes
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
