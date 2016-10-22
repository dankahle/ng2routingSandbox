import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AdminModule} from "./admin/admin.module";
import {RouterModule} from "@angular/router";
import {HomeModule} from "./home/home.module";
import {CommonModule} from "./common/common.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
    AdminModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
