import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }    from './home.component';
import {InitService} from "../common/services/init.service";
import {HomeResolveService} from "./home-resolve.service";

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [InitService],
    resolve: {
      stuff: HomeResolveService
    }
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
