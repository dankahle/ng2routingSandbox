import { NgModule } from '@angular/core';
import {AuthGuardService} from "./services/auth-guard.service";
import {InitComponent} from "./components/init/init.component";
import {InitService} from "./services/init.service";

@NgModule({
  imports: [
  ],
  declarations: [InitComponent],
  providers: [AuthGuardService, InitService]
})
export class CommonModule { }
