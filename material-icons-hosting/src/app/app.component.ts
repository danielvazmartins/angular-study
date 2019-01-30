import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'material-icons-hosting';
    icons: String[] = [
        'account_circle', 
        'autorenew',
        'delete',
        'face',
        'search'
    ]
}
