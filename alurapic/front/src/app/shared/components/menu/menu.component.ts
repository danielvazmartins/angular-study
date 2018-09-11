import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs/operators';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    isShown: boolean = false

    toggle() {
        this.isShown = !this.isShown
    }
}