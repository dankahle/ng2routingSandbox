import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onActivate(val:any) {
    console.log('activate', val);
  }

  onDeactivate(val:any) {
    console.log('deactivate', val);
  }

}
