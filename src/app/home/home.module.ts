import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {homeRouting} from "./home.routing";
import {RouterModule} from "@angular/router";
import {HomeResolveService} from "./home-resolve.service";

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomeComponent],
  providers: [HomeResolveService]
})
export class HomeModule { }
