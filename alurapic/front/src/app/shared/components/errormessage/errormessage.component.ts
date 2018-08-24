import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-errormessage',
    templateUrl: './errormessage.component.html'
})
export class ErrorMessageComponent {
    @Input() text:string = ''
}