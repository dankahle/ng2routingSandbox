import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent}    from './admin.component';
import {SettingsComponent} from "./settings/settings.component";
import {EmailComponent} from "./email/email.component";
import {AuthGuardService} from "../common/services/auth-guard.service";
import {InitService} from "../common/services/init.service";

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuardService, InitService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          {path: '', redirectTo: 'settings'},
          // {path: '', redirectTo: '/admin/settings', pathMatch: 'full'}// this is overkill, we're making a child route decision here
          {path: 'settings', component: SettingsComponent},
          {path: 'email', component: EmailComponent},
        ]
      }
    ]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
