import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
