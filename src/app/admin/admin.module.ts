import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {adminRouting} from "./admin.routing";
import {RouterModule} from "@angular/router";
import { SettingsComponent } from './settings/settings.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [AdminComponent, SettingsComponent, EmailComponent]
})
export class AdminModule { }
