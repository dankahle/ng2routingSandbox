import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminProp = 'something';

  constructor() { }

  ngOnInit() {
  }

  onActivate(val:any) {
    console.log('activate', val);
  }

  onDeactivate(val:any) {
    console.log('deactivate', val);
  }

}
