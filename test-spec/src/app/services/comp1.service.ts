import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Comp1Service {

  constructor() { }

  getRandom(max: number): number {
    return Math.floor(Math.random() * max)
  }
}
