import { Injectable } from '@angular/core';

@Injectable()
export class HomeResolveService {

  constructor() { }

  resolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolve data');
        console.log('home resolve done');
      }, 1000);


    })
  }
}
