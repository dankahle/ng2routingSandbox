import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent}    from './admin.component';
import {SettingsComponent} from "./settings/settings.component";
import {EmailComponent} from "./email/email.component";

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'settings', component: SettingsComponent},
      {path: 'email', component: EmailComponent},
      {path: '', redirectTo: '/admin/settings', pathMatch: 'full'}
    ]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
