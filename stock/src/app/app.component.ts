import { Component, OnInit } from '@angular/core';
import { StockService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stock';

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.get()
  }
}
