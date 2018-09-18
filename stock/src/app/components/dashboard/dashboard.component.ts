import { Component, OnInit } from '@angular/core';
import { StockInterface, StockService } from '../../services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    stocks: Array<StockInterface>;
    symbols: Array<string>;

    constructor(private stockService: StockService) {
        this.symbols = stockService.get();
    }
    ngOnInit() {
        this.stockService.load(this.symbols)
        .subscribe(stocks => this.stocks = stocks);
    }
}
