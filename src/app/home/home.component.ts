import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public stuff:string;

  constructor(aroute:ActivatedRoute) {
    aroute.data.forEach((data: {stuff:string}) => {
      this.stuff = data.stuff;
    })
  }

  ngOnInit() {
  }

}
