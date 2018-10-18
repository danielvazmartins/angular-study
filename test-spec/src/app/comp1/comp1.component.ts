import { Component, OnInit } from '@angular/core';
import { Comp1Service } from '../services/comp1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

    showNumber: number
  constructor(private comp1Service: Comp1Service) { }

  ngOnInit() {
      this.newNumber()
  }

  newNumber() {
    this.showNumber = this.comp1Service.getRandom(10)
  }

}
