import { Component, Input } from "@angular/core";

const cloud = 'http://localhost:3000/imgs/';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    @Input() description:string
    
    private _url: string = ''
    
    @Input() set url(url:string) {
        if(url && url.startsWith('data')) {
            this._url = url;
        } else {
            this._url = cloud + url;
        }
    }

    get() {
        return this._url
    }
}