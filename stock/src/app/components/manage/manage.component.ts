import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent {
    symbols: Array<string>;
    stock: string;

    constructor(private service: StockService) {
        this.symbols = service.get();
    }

    add() {
        this.symbols = this.service.add(this.stock.toUpperCase());
        this.stock = '';
    }

    remove(symbol) {
        this.symbols = this.service.remove(symbol);
    }

}
